import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor() { }
  show(obj : Object): void{ 
    document.querySelector('.notificator').innerHTML = ''
    document.querySelector('.notificator').innerHTML = this.getTempate(obj)
    setTimeout(()=>{
      document.querySelector('.notificator-alert').classList.add('actived')
    }, 150)
  }
  showSuccess(str : string){
    this.show({
      message : `Logged in!\n${str} Login Success!`,
      color: 'success'
    })
  }
  showLogout(){
    this.show({
      message : `Logged out!\n You have successfully logged out!`,
      color: 'info'
    })
  }
  showDanger(str : string){
    this.show({
      message : `Wrong!\n${str}!`,
      color: 'danger'
    })
  }
  getTempate(obj : Object): string{
    return `<div class="notificator-alert alert alert-${obj['color']}" role="alert">${obj['message']}</div>`
  }
}
