import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import 'firebase/firestore'
import * as cuid from 'cuid';
import { isNull } from 'util'
import { NotifyService } from '../services/app.notify.service'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(
    private note : NotifyService,
    ) { }
    
  db = firebase.firestore();
  async getComments(questId : string){
    let ret : any = []
    await this.db.collection('comments').get()
    .then(r=>{
      r.forEach((doc)=>{
        const dat = Object.assign(doc.data())
        dat.id = doc.id
        ret.push(dat)
      })
    })
    .catch(e=>e)
    ret = ret.filter((el: any) => el.question === questId)
    return ret
  }
  async solution(cmoId: string){
    await this.db.collection('comments').doc(cmoId).update({
      solution: true
    })
  }
  async  addComment(questId : string){
    if (isNull(firebase.auth().currentUser)) {
      return false
    }
    await this.db.collection('comments').add({
      date: new Date().getTime(),
      text: (document.querySelector('#comment-area-input') as  HTMLInputElement).value,
      solution: false,
      owner: (firebase.auth().currentUser) ? 
      JSON.stringify({
        id : firebase.auth().currentUser.uid,
        name : firebase.auth().currentUser.displayName || firebase.auth().currentUser.email,
        email : firebase.auth().currentUser.email
      }) : 
      JSON.stringify({id : '', email : '', name: ''}),
      question: questId,
      uid: cuid()
    })
    .then(r=>r)
    .catch(e=>e)
  }
  async deleteWithQuestion(questionId : string){
    this.db.collection("comments").where("question", "==", questionId).onSnapshot(snap =>{
      snap.docs.forEach(doc => {
        this.db.collection("comments").doc(doc.id).delete()
        .catch(error => {
            console.log(error)
        })
      })
    })
  }
  async deleteComment(uid : string, callback : any = undefined){
    this.db.collection("comments").where("uid", "==", uid).onSnapshot(snap =>{
      snap.docs.forEach(doc => {
        this.db.collection("comments").doc(doc.id).delete()
        .catch(error => {
            console.log(error)
        })
        .then(()=>{
          if ( callback!== undefined)callback()
        }
        )
      })
    })
  }
}
