import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../../services/waiter.service'
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../../services/add.question.service'
import * as firebase from 'firebase'

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  constructor(
    private waiter: WaiterService,
    private activateRoute: ActivatedRoute,
    private questions: QuestionsService
  ) {
    this.id = this.activateRoute.snapshot.params['id']
   }
  async ngOnInit() { 
      this.waiter.waiter()
      const quests = await this.questions.getQuestions()
      this.question = (quests.filter((el : any) => el.id === this.id).length > 0) ? quests.filter((el : any) => el.id === this.id)[0] : undefined
      this.author = (typeof this.question.owner === 'string') ? JSON.parse(this.question.owner) : ''
      this.tags = (typeof this.question.tags === 'string') ? JSON.parse(this.question.tags) : []
      this.waiter.unwaiter()
    }
  question: any
  id : string
  author: any
  tags : Array<any>
  message : string = ''
}
