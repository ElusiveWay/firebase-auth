import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareService } from '../../services/share.service'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
@Component({
  selector: 'app-subpanel',
  templateUrl: './subpanel.component.html',
  styleUrls: ['./subpanel.component.scss']
})
export class SubpanelComponent implements OnInit, OnDestroy {

  constructor( public shared : ShareService ) { }
  $destroy : Subject<void> = new Subject<void>()
  dateArray : Array<string> = [
    'All dates',
    'Last day',
    'Last week',
    'Last month'
  ]
  categoriesArray : Array<string> = [
    'All categories',
    'Tag 1',
    'Tag 2',
    'Tag 3'
  ]


  ngOnInit(): void {
    this.shared.share.pipe( takeUntil(this.$destroy) ).subscribe(( out )=>{
      const sp = out.subpanel
      this.answered = sp.answered
      this.resolved = sp.resolved
      this.sorted = sp.sorted
      this.date = sp.date
      this.categories = sp.categories
      this.line = sp.line
    })
  }
  ngOnDestroy(): void {
    this.$destroy.next()
    this.$destroy.complete()
  }


  refresh(){
    this.shared.setSubpanel({
      answered: this.answered,
      resolved: this.resolved,
      sorted: this.sorted,
      date: this.date,
      categories: this.categories,
      line: this.line
    })
  }
  changeDate(string: string){
    this.date = string
    this.refresh()
  }
  changeCategory(string: string){
    this.categories = string
    this.refresh()
  }
  changeSorter(){
    this.sorted = !this.sorted
    this.refresh()
  }
  reset(){
    this.shared.setSubpanel()
  }
  changeRange() {
    //@ts-ignore
    document.querySelector('body').style.filter = `hue-rotate(${(event.target as HTMLInputElement).value * 1.8 }deg)`
    localStorage.setItem('color', (event.target as HTMLInputElement).value)
  }
  changeLine(){
    this.refresh()
  }

  answered: boolean
  resolved: boolean
  sorted: boolean
  date: string
  categories: string
  line: boolean
}
