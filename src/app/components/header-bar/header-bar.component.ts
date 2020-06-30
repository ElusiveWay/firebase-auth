import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from "firebase/app"
import "firebase/auth"
import { isNull } from 'util';
import { fb } from '../../scripts/firebase'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { FirestoreService } from '../../services/firestore.service'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit, OnDestroy {

  constructor(private fstore : FirestoreService) { }
  private destroy$: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    this.fstore.isAdminObserver.pipe(
      takeUntil(this.destroy$)
    ).subscribe((v)=> this.isAdmin = v)
    this.interval = setInterval(()=>this.isUser = isNull(firebase.auth().currentUser), 100)
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
    this.destroy$.next()
    this.destroy$.complete()
  }
  interval : any
  isUser: boolean
  switch = function(){
    this.fstore.toggleAdmin()
  }
  fb = async function(...args){
    if (args[0] === 'out') {
      fb('out', undefined, undefined)
    }
  }
  sub : any
  isAdmin : any = false
}
