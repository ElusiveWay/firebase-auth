import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotifyService } from '../../services/app.notify.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-notificator',
  templateUrl: './notificator.component.html',
  styleUrls: ['./notificator.component.scss']
})
export class NotificatorComponent implements OnInit,OnDestroy {

  constructor(
    private note : NotifyService
  ) { }
  ngOnInit(): void {
    this.note.notifySubject.pipe( takeUntil(this.destroy$)).subscribe((obj :object)=>{
      this.notification = Object.assign(obj)
      clearTimeout(this.timer)
      this.active = false
      this.timer = setTimeout(()=>{
        this.active = true
      }, 150)
    })
  }
  ngOnDestroy() : void {
    this.destroy$.next()
    this.destroy$.complete()
    clearTimeout(this.timer)
  }
  private destroy$ = new Subject()
  timer : any
  notification : Object = {
    color: '',
    message: ''
  }
  active : boolean = false
}
