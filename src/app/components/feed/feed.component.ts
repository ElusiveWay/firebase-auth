import { Component, OnInit, OnDestroy, Input, AfterViewChecked  } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
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

  constructor( public auth: AuthService, public comms: CommentService, public shared: ShareService, private quest: QuestionsService, private fstore : FirestoreService) {
    this.sortFnc = this.sortFnc.bind(this)
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
        if (this.subpanel && this.subpanel.sorted !== undefined) {
          if (this.subpanel.sorted === false) {this.sorter = -1}
          else {this.sorter = 1}
        }
      })
    this.refresh()
  }
  private destroy$: Subject<void> = new Subject<void>();
  @Input() flag : string
  ngAfterViewChecked() :void{
    const adm = this.isAdmin,
          que = this.questions
          setTimeout(() => {
            if (adm !== undefined && que !== undefined) this.isEmpty = document.querySelectorAll('.question-box').length === 0
          })
  }
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
    clearInterval(this.timer)
  }
  async refresh() {
    this.questions = await this.quest.getQuestions()
    this.questions = this.questions.sort((a,b) => b.date - a.date)
  }
  subpanel : any
  isEmpty : boolean 
  timer : any
  questions: Array<any> = undefined
  sub : Subscription
  isAdmin : any = undefined
  sorter: number = 1
  uid : any = (this.auth.getUser()) ? this.auth.getUser().uid : ''
  sortFnc(){  
    return this.sorter
  }
}
