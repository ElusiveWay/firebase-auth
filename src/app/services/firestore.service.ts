import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras} from "@angular/router";
import {Observable, BehaviorSubject} from "rxjs";
import { Injectable } from '@angular/core';
import {Location} from '@angular/common'
import * as firebase from 'firebase'
import 'firebase/firestore'
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService implements CanActivate  {
  constructor(private router: Router, private loc : Location) {
    this.timerHandler('on')
   }
  isAdminObserver = new BehaviorSubject(undefined)
  timer : any
  timerHandler = (action : string) => {
    clearInterval(this.timer)
    if (action === 'on'){
      this.timer = setInterval(async ()=>{
        console.log('pass next')
        this.isAdminObserver.next(await this.isAdmin())
      },1500)
    }
}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :  Promise<boolean> | Observable<boolean>  | boolean {
    return new Promise((resolve) => {
      resolve(this.isAdmin())
    })
  }
  db = firebase.firestore();
  async getAdmins(){
    let ret : any = []
    await this.db.collection('admins').get()
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
  async isAdmin(uid : string = (firebase.auth().currentUser) ? firebase.auth().currentUser.uid : '', returnId: boolean = false){
    if (isNull(firebase.auth().currentUser)) {
      return (!returnId) ? false : ''
    }
    const userCallback = (el : any) => el.uid === uid
    let arr   : any,
        docsId : string
    arr = await this.getAdmins()
    docsId = arr.filter(userCallback).map((el: any) => el.id)
    return (!returnId) 
      ? arr.some(userCallback) 
      : (docsId.length>0) 
        ? docsId[0]
        : ''
  }
  async toggleAdmin(uid: string = (firebase.auth().currentUser) ? firebase.auth().currentUser.uid : ''){
    if (isNull(firebase.auth().currentUser)) {
      return false
    }
    const id = await this.isAdmin(uid, true)
    if ( id === '' ){
      this.db.collection('admins').add({
        uid:uid
      })
      .then(r=>{
        this.isAdminObserver.next(true)
      })
      .catch(e=>e)
    } else {
      this.db.collection('admins').doc(id).delete()
      .then(r=>{
        this.isAdminObserver.next(false)
      })
      .catch(e=>e)
    }
  }
}
