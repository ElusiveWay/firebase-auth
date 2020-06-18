import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import {eventDispatcher} from '../services/app-notify';
import {ActionTypes} from '../actions';
import { Router } from '@angular/router'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    this.gitProvider = new firebase.auth.GithubAuthProvider();
    this.faceProvider = new firebase.auth.FacebookAuthProvider();
    this.faceProvider.addScope('user_photos');
    firebase.auth().useDeviceLanguage();
  }
  provider: firebase.auth.GoogleAuthProvider
  faceProvider: firebase.auth.FacebookAuthProvider
  gitProvider: firebase.auth.GithubAuthProvider
  google(){
    firebase.auth().signInWithPopup(this.provider).then((result)=>{
      eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
        message : `Logged in!\nGoogle Login Success!`,
        color: 'success'
      }});
      this.router.navigateByUrl('/main')
    }).catch(function(error) {
      eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
        message : `Wrong!\n${error.message}!`,
        color: 'danger'
      }});
    });
  }
  face(){
    firebase.auth().signInWithPopup(this.faceProvider).then((result) => {
      eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
        message : `Logged in!\nFacebook Login Success!`,
        color: 'success'
      }});
    this.router.navigateByUrl('/main')
    }).catch(function(error) {
      eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
        message : `Wrong!\n${error.message}!`,
        color: 'danger'
      }});
    });
  }
  git(){
    firebase.auth().signInWithPopup(this.gitProvider).then((result)=>{
      eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
        message : `Logged in!\nGithub Login Success!`,
        color: 'success'
      }});
      this.router.navigateByUrl('/main')
    }).catch(function(error) {
      eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
        message : `Wrong!\n${error.message}!`,
        color: 'danger'
    }});
    });
  }
  
}
