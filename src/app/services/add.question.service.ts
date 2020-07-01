import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import 'firebase/firestore'
import * as cuid from 'cuid';
import { isNull } from 'util'
import { Router } from '@angular/router'
import { NotifyService } from '../services/app.notify.service'
import { CommentService } from '../services/comment.service'


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private router: Router, private note : NotifyService ,private comms: CommentService) { }
  db = firebase.firestore();

  async getQuestions(){
    let ret : any = []
    await this.db.collection('questions').get()
    .then(r=>{
      r.forEach((doc)=>{
        const dat = Object.assign(doc.data())
        dat.id = doc.id
        ret.push(dat)
      })
    })
    .catch(e=>e)
    return ret
  }
  async deleteQuestion(id : any){
    await this.db.collection('questions').doc(id).delete()
    .then(r=>{
      this.note.show({
        message : "Qustion deleted!",
        color: "info"
      })
    })
    .catch(e=>e)
    this.comms.deleteWithQuestion(id)
  }
  async approveQuestion(id : any){
    await this.db.collection('questions').doc(id).update({
      moded: true
    })
    .then(r=>{
      this.note.show({
        message : "Posted!",
        color: "success"
      })
    })
    .catch(e=>e)
  }
  async editQuestion(id : any, title : string, text : string, tags : string){
    await this.db.collection('questions').doc(id).update({
      title : title,
      text : text,
      tags : tags
    })
    .then(r=>{
      this.router.navigateByUrl(`/questions/${id}`)
      this.note.show({
        message : "Edited!",
        color: "success"
      })
    })
    .catch(e=>{
      this.note.show({
        message : "Something went wrong!",
        color: "danger"
      })
    })
  }
  async addQuestion(){
    if (isNull(firebase.auth().currentUser)) {
      return false
    }
    await this.db.collection('questions').add({
      moded: false,
      date: new Date().getTime(),
      title: (document.querySelector('#new-question-title-input') as  HTMLInputElement).value,
      text: (document.querySelector('#new-question-text-input') as  HTMLInputElement).value,
      tags: JSON.stringify(
              Array.prototype.map.call(document.querySelectorAll('[id*="new-question-defaultCheck"'), 
                (el : any)=>{
                  return {
                    name: el.name,
                    value: el.checked
                  }
              })
              .filter((obj: any) => obj.value != false)
              .map((obj: any) => obj.name)
            ),
      owner: (firebase.auth().currentUser) ? 
      JSON.stringify({
        id : firebase.auth().currentUser.uid,
        name : firebase.auth().currentUser.displayName || firebase.auth().currentUser.email,
        email : firebase.auth().currentUser.email
      }) : 
      JSON.stringify({id : '', email : '', name: ''}),
      comments: '[]',
      uid: cuid()
    })
    .then(r=>r)
    .catch(e=>e)
  }
}
