import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";   
import {fbase} from '../scripts/firebase'  
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service'
import { NotifyService } from '../services/app.notify.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private note: NotifyService, private fstore: FirestoreService, public router : Router){}
  FacebookAuth(thenn: any = ()=>{}, catchh : any = ()=>{}) {
    const face = new firebase.auth.FacebookAuthProvider();
    face.addScope('user_photos');
    return this.AuthLogin(face, thenn, catchh);
  }  
  GoogleAuth(thenn: any = ()=>{}, catchh : any = ()=>{}) {
    const goo = new firebase.auth.GoogleAuthProvider()
    goo.addScope('https://www.googleapis.com/auth/contacts.readonly');
    return this.AuthLogin(goo, thenn, catchh);
  }  
  GithubAuth(thenn: any = ()=>{}, catchh : any = ()=>{}) {
    return this.AuthLogin(new firebase.auth.GithubAuthProvider(), thenn, catchh);
  }  
  async AuthLogin(provider : any, thenn : any, catchh: any) {
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      this.fstore.checkAdmin()
      return thenn(result)
    }).catch((error) => {
      this.fstore.checkAdmin()
      return catchh(error)
    })
  }
  Logout(){
    fbase('out').then(()=>{
      this.note.showLogout()
    })
  }
  async EmailAuth(email: string, pass : string){
    await fbase('in',email ,pass, this.router).then(()=>{
      this.note.showSuccess('Email')
    })
    this.fstore.checkAdmin()
  }
  async Register(email: string, pass : string){
    await fbase('up',email ,pass, this.router).then(()=>{
      this.note.show({
        message : 'Finally!\n Welcome to community!',
        color: 'success'
      })
    })
    this.fstore.checkAdmin()
  }
  getUser(){
    return firebase.auth().currentUser
  }

}