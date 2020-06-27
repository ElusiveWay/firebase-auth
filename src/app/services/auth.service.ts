import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";     

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  FacebookAuth(thenn: any, catchh : any) {
    const face = new firebase.auth.FacebookAuthProvider();
    face.addScope('user_photos');
    return this.AuthLogin(face, thenn, catchh);
  }  
  GoogleAuth(thenn: any, catchh : any) {
    const goo = new firebase.auth.GoogleAuthProvider()
    goo.addScope('https://www.googleapis.com/auth/contacts.readonly');
    return this.AuthLogin(goo, thenn, catchh);
  }  
  GithubAuth(thenn: any, catchh : any) {
    return this.AuthLogin(new firebase.auth.GithubAuthProvider(), thenn, catchh);
  }  
  async AuthLogin(provider : any, thenn : any, catchh: any) {
    return firebase.auth().signInWithPopup(provider)
    .then((result) => thenn(result)).catch((error) => catchh(error))
  }

}