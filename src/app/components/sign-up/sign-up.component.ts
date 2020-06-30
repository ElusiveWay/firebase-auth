import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { fb } from '../../scripts/firebase'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  fb = async function(...args){
    // @ts-ignore
    fb(...args,router)
  }
  email: string 
  pass: string 
}
