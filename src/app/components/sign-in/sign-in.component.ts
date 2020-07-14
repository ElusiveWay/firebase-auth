import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private auth : AuthService, private router: Router) { }
  ngOnInit(): void {

  }
  login(email: string, pass: string) : void{
    this.auth.EmailAuth(email, pass)
  }
  email: string
  pass: string
}
