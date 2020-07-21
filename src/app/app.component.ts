import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreService } from './services/firestore.service'
import { fadeInAnimation } from './fadein.animation';
import { ShareService } from './services/share.service';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [ fadeInAnimation ]
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(private fstore : FirestoreService, private share : ShareService){}
  $destroy : Subject<void> = new Subject<void>()
  ngOnInit() : void{
    this.fstore.checkAdmin()
  }
  ngOnDestroy() : void{
    this.$destroy.next()
    this.$destroy.complete()
  }
}
