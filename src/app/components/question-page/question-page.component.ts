import { Component, OnInit, OnDestroy } from '@angular/core';
import { WaiterService } from '../../services/waiter.service'
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../../services/add.question.service'
import * as firebase from 'firebase'
import { Subject } from 'rxjs' 
import { takeUntil } from 'rxjs/operators' 
import { isNull } from 'util'
import { CommentService } from '../../services/comment.service'
import { NotifyService } from '../../services/app.notify.service'
import { FirestoreService } from '../../services/firestore.service'

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit, OnDestroy {

  constructor(
    private waiter: WaiterService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private questions: QuestionsService,
    private comments: CommentService,
    private fstore: FirestoreService,
    private note: NotifyService
  ) {
    this.id = this.activateRoute.snapshot.params['id']
    this.date = new Date(1970, 0, 1)
   }
  private destroy$: Subject<void> = new Subject<void>();
  ngOnDestroy() : void {
    this.destroy$.next()
    this.destroy$.complete()
  }
  async ngOnInit() { 
      this.waiter.waiter()
      const quests = await this.questions.getQuestions()
      this.question = (quests.filter((el : any) => el.id === this.id).length > 0) ? quests.filter((el : any) => el.id === this.id)[0] : undefined
      this.date.setSeconds(this.question.date / 1000)
      this.author = (this.question && typeof this.question.owner === 'string') ? JSON.parse(this.question.owner) : {}
      this.isOwner = (!isNull(firebase.auth().currentUser) && this.author.id === firebase.auth().currentUser.uid)
      this.tags = (this.question && typeof this.question.tags === 'string') ? JSON.parse(this.question.tags) : []
      this.waiter.unwaiter()
      this.user = firebase.auth().currentUser
      this.fstore.isAdminObserver.pipe(
        takeUntil(this.destroy$)
      ).subscribe((val) => {
        this.isAdmin = val
      })
      this.fstore.checkAdmin()
      await this.refresh()
      console.log(this.question)
    }
  async del(uid: string){
     if (confirm('Delete?')){ 
       await this.comments.deleteComment(uid, ()=>this.refresh()).catch(e=>e)
      }
  }
  async add(){
    const backup = this.message;
    this.message = ''
    if (this.id === undefined) return
    await this.comments.addComment(this.id)
    .then(_=>{
      this.note.show({
        message: 'Commented!',
        color: 'success'
      })
    })
    .catch(_=>{
      this.message = backup
      this.note.show({
        message: 'Error!\nTry again or later..',
        color: 'danger'
      })
    })
    this.refresh()
  }
  async refresh(){
    this.comms = (this.id === undefined) ? [] : await this.comments.getComments(this.id)
    this.comms.forEach((el : any, i : number)=>{
      this.comms[i].owner = JSON.parse(this.comms[i].owner)
    })
    this.comms = this.comms.sort((a,b)=>Number(a.date) - Number(b.date))
  }
  async solution(e : any){
    e.currentTarget['disabled'] = true
    if (!this.isOwner) return false
    await this.comments.solution(e.currentTarget.id).catch(e=>e)
    this.refresh()
  }
  async approve(){
    if (this.question) this.questions.approveQuestion(this.question.id).then(_=>{
        this.approved = true;
        this.note.show({
          message: 'Approved!',
          color: 'success'
        })
    }).catch(e=>{
      this.note.show({
        message: 'Something went wrong!',
        color: 'danger'
      })
    })
  }
  edit(){
    if (this.question !== undefined) this.router.navigateByUrl(`/edit/${this.question.uid}`)
  }
  async delete(){
    if(!this.question && !this.question.id) return
    if (confirm('Delete?')) {
      await this.questions.deleteQuestion(this.question.id).then(_=>{
        this.router.navigateByUrl(`/main`)
        this.note.show({
          message: 'Deleted!',
          color: 'success'
        })
      }).catch(_=>{
        this.note.show({
          message: 'Something went wrong!',
          color: 'danger'
        })
      })
    }
  }
  approved = false
  isAdmin: any = false
  isOwner: any
  user : any
  date : any
  question: any
  id : string
  author: any
  tags : Array<any>
  message : string = ''
  comms : any
}
