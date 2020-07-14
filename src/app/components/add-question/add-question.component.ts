
import { Component, AfterViewInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service'
import { QuestionsService } from '../../services/add.question.service'
import { NotifyService } from '../../services/app.notify.service'
import { WaiterService } from '../../services/waiter.service'
import { AuthService } from '../../services/auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import { TAGS } from '../../app.params'
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements AfterViewInit {
  constructor(
    public waiter: WaiterService, 
    public note: NotifyService, 
    public fstore : FirestoreService, 
    public auth : AuthService, 
    public questions : QuestionsService,
    private arouter : ActivatedRoute,
    private router : Router
    ) { 
      this.uid = this.arouter.snapshot.params['uid']
      this.allTags = TAGS
    }
    
  uid : string
  question: Object
  owner : Object 
  tags : Array<string>
  allTags : Array<string>
  title: string
  text: string
  
  async ngAfterViewInit() {
    if (this.uid === undefined) return
    const temp = await this.questions.getQuestions()
    if (temp instanceof Array !== true) return
    this.question = temp.filter((el: any) => el.uid === this.uid)[0]
    if(this.question === undefined) return
    this.owner = JSON.parse(this.question['owner'])
    if (this.auth.getUser() && this.owner['id'] === this.auth.getUser().uid){}
    else{
      this.router.navigateByUrl(`/questions/${this.question['id']}`)
      this.note.show({
        message: 'You can\'t edit the question!',
        color: 'warning'
      })
    }
    this.tags = JSON.parse(this.question['tags'])
    if (this.tags) this.tags.forEach((v : any)=>{
      document.querySelectorAll(`[name="${v}"]`).forEach((v: any) => v.checked = true)
    })
    this.text = this.question['text']
    this.title = this.question['title']
  } 
  async submit(){
    this.waiter.waiter()
    await this.questions.addQuestion(
      this.title,
      this.text,
      JSON.stringify(
        Array.prototype.map.call(document.querySelectorAll('[id*="new-question-defaultCheck"'), 
          (el : any)=>{
            return {
              name: el.name,
              value: el.checked
            }
        })
        .filter((obj: any) => obj.value != false)
        .map((obj: any) => obj.name)
      )
    )
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
  async edit(){
    this.waiter.waiter()
    await this.questions.editQuestion(this.question['id'],this.title, this.text,JSON.stringify(
      Array.prototype.map.call(document.querySelectorAll('[id*="new-question-defaultCheck"'), 
        (el : any)=>{
          return {
            name: el.name,
            value: el.checked
          }
      })
      .filter((obj: any) => obj.value != false)
      .map((obj: any) => obj.name)
    ) )
    this.waiter.unwaiter()
  }
}
