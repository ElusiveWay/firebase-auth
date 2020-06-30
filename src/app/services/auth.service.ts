import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";   
import {fb} from '../scripts/firebase'  
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public router : Router){}
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
    .then((result) => thenn(result)).catch((error) => catchh(error))
  }
  Logout(){
    fb('out')
  }
  EmailAuth(email: string, pass : string){
    fb('in',email ,pass, this.router)
  }
  Register(email: string, pass : string){
    fb('up',email ,pass, this.router)
  }

}