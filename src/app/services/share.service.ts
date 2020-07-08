import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface Subpanel{ 
  answered: boolean,
  resolved: boolean,
  sorted: boolean,
  date: string,
  categories: string,
  line: boolean
}
const DefaultSubpanel : Subpanel = {
    answered: false,
    resolved: false,
    sorted: true,
    date: 'All dates',
    categories: 'All categories',
    line: false
}

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  constructor() {
    this.share = new BehaviorSubject( {subpanel : DefaultSubpanel} )
   }
  share : BehaviorSubject<any>
  async setSubpanel(input : Subpanel = DefaultSubpanel){
    const prev = await this.share.getValue()
    const current = {
      subpanel: {...input}
    }
    this.share.next({...prev, ...current})
  }
}
