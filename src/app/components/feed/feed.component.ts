import { Component, OnInit, OnDestroy, Input, AfterViewChecked  } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { FirestoreService } from '../../services/firestore.service'
import { QuestionsService } from '../../services/add.question.service'
import * as firebase from 'firebase'
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, AfterViewChecked {

  constructor(private quest: QuestionsService, private fstore : FirestoreService) { }
  async ngOnInit() { 
    this.fstore.isAdminObserver.pipe(
        takeUntil(this.destroy$)
      ).subscribe(v => {
        this.isAdmin = v
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
  }
  isEmpty : boolean 
  timer : any
  questions: Array<any> = undefined
  sub : Subscription
  isAdmin : any = undefined
  uid : any = (firebase.auth().currentUser) ? firebase.auth().currentUser.uid : ''
}
