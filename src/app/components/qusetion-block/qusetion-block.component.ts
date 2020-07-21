import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { QuestionsService } from '../../services/add.question.service'
import { Router } from '@angular/router'
import { CommentService } from '../../services/comment.service'
import { ShareService } from '../../services/share.service'
import { AuthService } from '../../services/auth.service'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { TIME_OFFSET } from '../../app.params'
@Component({
  selector: 'app-qusetion-block',
  templateUrl: './qusetion-block.component.html',
  styleUrls: ['./qusetion-block.component.scss']
})
export class QusetionBlockComponent implements OnInit, OnDestroy {

  constructor( public auth: AuthService, public shared : ShareService ,public questions : QuestionsService , private router : Router, public comms : CommentService) {
      this.date = new Date(1970, 0, 1)
   }
  private destroy$: Subject<void> = new Subject<void>();
  async ngOnInit() { 
    this.shared.share.pipe(
      takeUntil(this.destroy$)
    ).subscribe(val => {
      this.subpanel = val.subpanel
    })
    this.owner = JSON.parse(this.data.owner)
    this.mytags = JSON.parse(this.data.tags)
    this.tag1 = this.mytags.includes('Tag 1')
    this.tag2 = this.mytags.includes('Tag 2')
    this.tag3 = this.mytags.includes('Tag 3')
    this.date.setSeconds(this.data.date / 1000 + TIME_OFFSET)
    let commse = await this.comms.getComments(this.data.id)
    this.answered = commse.length > 0
    commse = commse.filter((el : any)=> el.solution === true)
    this.finished = commse.length > 0
   }
   ngOnDestroy():void{
     this.destroy$.next()
     this.destroy$.complete()
   }
  
  @Input() isAdmin: any;
  @Input() data: any;
  @Output() refreshData = new EventEmitter;

  date : Date
  mytags : Array<string>
  logined = this.auth.getUser()
  owner : Object
  finished : boolean = undefined
  answered : boolean = undefined
  subpanel : boolean 
  tag1: boolean
  tag2: boolean
  tag3: boolean
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
  edit() : void{
    if (this.data !== undefined) this.router.navigateByUrl(`/edit/${this.data.uid}`)
  }
}
