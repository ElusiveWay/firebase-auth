import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionsService } from '../../services/add.question.service'
import * as firebase from 'firebase'

@Component({
  selector: 'app-qusetion-block',
  templateUrl: './qusetion-block.component.html',
  styleUrls: ['./qusetion-block.component.scss']
})
export class QusetionBlockComponent implements OnInit {

  constructor(public questions : QuestionsService) {
    
   }
  ngOnInit(): void { 
    this.owner = JSON.parse(this.data.owner).id 
   }
  
  @Input() isAdmin: any;
  @Input() data: any;
  @Output() refreshData = new EventEmitter;

  logined = firebase.auth().currentUser
  owner : string
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
}
