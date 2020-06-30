import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service'
import { Location } from '@angular/common'
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-moderate',
  templateUrl: './moderate.component.html',
  styleUrls: ['./moderate.component.scss']
})
export class ModerateComponent implements OnInit, OnDestroy {

  constructor(private loc : Location, private fstore : FirestoreService) { }

  private destroy$: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    this.fstore.isAdminObserver.pipe(
      takeUntil(this.destroy$)
    ).subscribe((val) => {
      if (!val) this.loc.back()
    })
  }
  ngOnDestroy(): void{
    this.destroy$.next()
    this.destroy$.complete()
  }

}
