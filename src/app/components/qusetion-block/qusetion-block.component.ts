import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionsService } from '../../services/add.question.service'
import { Router } from '@angular/router'
import * as firebase from 'firebase'
import { CommentService } from '../../services/comment.service'

@Component({
  selector: 'app-qusetion-block',
  templateUrl: './qusetion-block.component.html',
  styleUrls: ['./qusetion-block.component.scss']
})
export class QusetionBlockComponent implements OnInit {

  constructor(public questions : QuestionsService , private router : Router, public comms : CommentService) {
      this.date = new Date(1970, 0, 1)
   }
  async ngOnInit() { 
    this.owner = JSON.parse(this.data.owner)
    this.mytags = JSON.parse(this.data.tags)
    this.date.setSeconds(this.data.date / 1000)
    let commse = await this.comms.getComments(this.data.id)
    commse = commse.filter((el : any)=> el.solution === true)
    this.finished = commse.length > 0
   }
  
  @Input() isAdmin: any;
  @Input() data: any;
  @Output() refreshData = new EventEmitter;

  date : Date
  mytags : any
  logined = firebase.auth().currentUser
  owner : any
  finished : any = undefined
  async delete(id : any){
    if (confirm('Delete?')) {
      await this.questions.deleteQuestion(id)
      this.refreshData.next()
    }
  }
  async approve(id : any){
    await this.questions.approveQuestion(id)
    this.refreshData.next()
  }
  edit(){
    if (this.data !== undefined) this.router.navigateByUrl(`/edit/${this.data.uid}`)
  }
}
