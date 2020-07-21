import { Component, OnInit, OnDestroy, Input, AfterViewChecked  } from '@angular/core';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { Router } from '@angular/router'
import { FirestoreService } from '../../services/firestore.service'
import { QuestionsService } from '../../services/add.question.service'
import { ShareService } from '../../services/share.service'
import { CommentService } from '../../services/comment.service'
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, AfterViewChecked {

  constructor( private router : Router, public auth: AuthService, public comms: CommentService, public shared: ShareService, private quest: QuestionsService, private fstore : FirestoreService) {
    this.sortFnc = this.sortFnc.bind(this)
    this.flag = this.router.url.replace(/[|&;$%@"<>()+,\\\/]/g, "")
    this.share = this.shared.fade
  }
  async ngOnInit() { 
    this.fstore.isAdminObserver.pipe(
        takeUntil(this.destroy$)
      ).subscribe(v => {
        this.isAdmin = v
      })
    this.shared.share.pipe(
        takeUntil(this.destroy$)
      ).subscribe(val => {
        this.subpanel = val.subpanel
        if (this.subpanel && this.subpanel['sorted'] !== undefined) {
          if (this.subpanel['sorted'] === false) {this.sorter = -1}
          else {this.sorter = 1}
        }
      })
    this.shared.fade.pipe(
        takeUntil(this.destroy$)
      ).subscribe(val => {
        this.length = val
      })
    this.refresh()
  }
  private destroy$: Subject<void> = new Subject<void>();
  ngAfterViewChecked() :void{
          this.isEmpty = this.length === 0
  }
  async ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
  async refresh() {
    this.questions = await this.quest.getQuestions()
    this.questions = this.questions.sort((a,b) => b.date - a.date)
    this.quests = this.questions || []
    this.comments = await this.comms.getComments()
  }
  nothingToMod = () : boolean => {
    return this.isEmpty && this.flag=='moderate' && this.isAdmin !== undefined && this.questions !== undefined
  }
  noOwnQuestions = () : boolean => {
    return this.isEmpty && this.flag=='my' && this.isAdmin !== undefined && this.questions !== undefined
  }
  noQuestions = () : boolean => {
    return this.isEmpty && this.flag!=='my' && this.flag!=='moderate' && this.isAdmin !== undefined && this.questions !== undefined
  }
  showBlockExpression = (question : any) : boolean => {
    return (
      (question.owner.indexOf(this.uid) !== -1 && this.flag==='my') || 
      (!question.moded && this.flag==='moderate' && this.isAdmin) || 
      (this.flag!=='my' && this.flag!=='moderate' && this.isAdmin !== undefined && ((!this.isAdmin && question.moded) || this.isAdmin))
    )
  }
  sortFnc(){  
    return this.sorter
  }

  length : number
  share : BehaviorSubject<any>
  subpanel : Object
  isEmpty : boolean 
  questions: Array<any> = undefined
  quests: Array<any> = []
  isAdmin : boolean = undefined
  sorter: number = 1
  flag : string
  comments : Array<any>
  uid : string = (this.auth.getUser()) ? this.auth.getUser().uid : ''
  
}
