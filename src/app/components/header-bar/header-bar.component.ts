import { Component, OnInit, OnDestroy } from '@angular/core';
import "firebase/auth"
import { isNull } from 'util';
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { FirestoreService } from '../../services/firestore.service'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit, OnDestroy {

  constructor(private auth : AuthService, private fstore : FirestoreService) { }
  ngOnInit(): void {
    this.fstore.isAdminObserver.pipe(
      takeUntil(this.destroy$)
    ).subscribe((v)=> this.isAdmin = v)
    clearInterval(this.interval)
    this.interval = setInterval(() => this.isUser = isNull(this.auth.getUser()), 100 )
    this.fstore.checkAdmin()
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
    this.destroy$.next()
    this.destroy$.complete()
  }
  interval : any
  isUser: boolean
  switch = function() : void{
    this.fstore.toggleAdmin()
  }
  out() : void{
    this.auth.Logout()
  }

  private destroy$: Subject<void> = new Subject<void>()
  isAdmin : boolean = false

}
