import { Component, OnInit } from '@angular/core';
import { fb } from '../scripts/firebase'
import { Router } from '@angular/router'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  fb = async function(...args){
    // @ts-ignore
    fb(...args, router)
  }
  email: string
  pass: string
}
