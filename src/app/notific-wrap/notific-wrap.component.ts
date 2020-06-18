import { Component, OnInit } from '@angular/core';
import {eventDispatcher, store} from '../services/app-notify';
import {ActionTypes} from '../actions';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-notific-wrap',
  templateUrl: './notific-wrap.component.html',
  styleUrls: ['./notific-wrap.component.scss']
})
export class NotificWrapComponent implements OnInit {

  constructor() { 
    eventDispatcher.next({type: ActionTypes.GET_NOTIFY}); 
    store.subscribe((state) => {
    const {notification} = state;
    this.notification = notification;
  });
    
  }
  ngOnInit(): void { 
    setInterval(()=>this.show(), 100)
  }

  //RXJS
  notification : Object = {
    message: '',
    color: ''
  }
  getTempate(): string{
    return `<div class="notificator-alert alert alert-${this.notification['color']}" role="alert">${this.notification['message']}</div>`
  }
  clearNoti(): void{
    this.notification = {
      message: '',
      color:''
    }
  }
  create(data: Object): void{
    eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: data});
  }
  show(): void{ 
      if (this.notification['message'] !== ''){
        document.querySelector('.notificator').innerHTML = this.getTempate()
        setTimeout(()=>{
          document.querySelector('.notificator-alert').classList.add('actived')
        }, 150)
        this.clearNoti()
        eventDispatcher.next({type: ActionTypes.DEL_NOTIFY});
      }
  }
}


