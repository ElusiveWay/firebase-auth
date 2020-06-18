import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app"
import "firebase/auth"
import { isNull } from 'util';
import { fb } from '../scripts/firebase'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>this.isUser = isNull(firebase.auth().currentUser), 100)
  }
  isUser: boolean
  fb = async function(...args){
    // @ts-ignore
    if (args[0] === 'out') {
      fb('out', undefined, undefined)
    }
  }
}
