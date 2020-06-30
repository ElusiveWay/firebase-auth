import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
//
import 'bootstrap'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuneDZjAGrPnbEjGjWFONZfTVzFVPioiY",
  authDomain: "dev-incubator.firebaseapp.com",
  databaseURL: "https://dev-incubator.firebaseio.com",
  projectId: "dev-incubator",
  storageBucket: "dev-incubator.appspot.com",
  messagingSenderId: "927467482341",
  appId: "1:927467482341:web:657a3d87fb8e63f5b4f80c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//init dom on firebase loading
let once: boolean = true;
firebase.auth().onAuthStateChanged(()=>{
  if(once){
    once=false
    document.querySelector('.connectingToFirebase').remove()
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err))
  }
})

