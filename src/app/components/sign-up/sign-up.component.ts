import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { fb } from '../../scripts/firebase'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  register(email: any, pass : any){
    this.auth.Register(email, pass)
  }
  email: string 
  pass: string 
}
