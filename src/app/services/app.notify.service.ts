import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor() { }
  notifySubject = new Subject()
  show(obj : Object): void{ 
    this.notifySubject.next(obj)
  }
  showSuccess(str : string) : void{
    this.show({
      message : `Logged in!\n${str} Login Success!`,
      color: 'success'
    })
  }
  showLogout() : void{
    this.show({
      message : `Logged out!\n You have successfully logged out!`,
      color: 'info'
    })
  }
  showDanger(str : string) : void{
    this.show({
      message : `Wrong!\n${str}!`,
      color: 'danger'
    })
  }
}
