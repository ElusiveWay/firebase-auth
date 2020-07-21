import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareService } from '../../services/share.service'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
import { TAGS } from '../../app.params'
@Component({
  selector: 'app-subpanel',
  templateUrl: './subpanel.component.html',
  styleUrls: ['./subpanel.component.scss']
})
export class SubpanelComponent implements OnInit, OnDestroy {

  constructor( public shared : ShareService ) { }
  allTags : string[]
  $destroy : Subject<void> = new Subject<void>()
  dateArray : Array<string> = [
    'All dates',
    'Last day',
    'Last week',
    'Last month'
  ]
  categoriesArray : Array<string> = [
    'All categories', ...TAGS
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


  refresh() : void{
    this.shared.setSubpanel({
      answered: this.answered,
      resolved: this.resolved,
      sorted: this.sorted,
      date: this.date,
      categories: this.categories,
      line: this.line
    })
  }
  changeDate(string: string) : void{
    this.date = string
    this.refresh()
  }
  changeCategory(string: string) : void{
    this.categories = string
    this.refresh()
  }
  changeSorter() : void{
    this.sorted = !this.sorted
    this.refresh()
  }
  reset() : void{
    this.shared.setSubpanel()
  }
  changeRange() {
    //@ts-ignore
    document.querySelector('html').style.filter = `hue-rotate(${(event.target as HTMLInputElement).value * 1.8 }deg)`
    localStorage.setItem('color', (event.target as HTMLInputElement).value)
  }
  changeLine() : void{
    this.refresh()
  }

  answered: boolean
  resolved: boolean
  sorted: boolean
  date: string
  categories: string
  line: boolean
  
}
