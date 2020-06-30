import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service'
import { QuestionsService } from '../../services/add.question.service'
import { NotifyService } from '../../services/app.notify.service'
import { WaiterService } from '../../services/waiter.service'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  constructor(
    public waiter: WaiterService, 
    public note: NotifyService, 
    public fstore : FirestoreService, 
    public questions : QuestionsService
    ) { }
    
  ngOnInit(): void { }
  title: string
  text: string
  async submit(){
    this.waiter.waiter()
    await this.questions.addQuestion()
    .then(_=>{
      this.waiter.unwaiter()
      this.note.show({
        message: 'Created!\nWait for acception!',
        color: 'success'
      })
      this.title = ''
      this.text = ''
    })
    .catch(_=>{
      this.waiter.unwaiter()
      this.note.show({
        message: 'Error!\nTry again or later..',
        color: 'danger'
      })
    })
  }
}
