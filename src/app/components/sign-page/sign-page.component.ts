import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.scss']
})
export class SignPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    const a = this.router.getCurrentNavigation().extras
    this.message = a.queryParams && a.queryParams.message ? a.queryParams.message : undefined
    this.messageColor = a.queryParams && a.queryParams.messageColor ? a.queryParams.messageColor : 'transparent'
  }
  ngOnInit(): void {
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'))
    if (this.route.snapshot.data['sign'] === 'up'){
      document.querySelector('.signup-btn').classList.add('active')
    } else if (this.route.snapshot.data['sign'] === 'in'){
      document.querySelector('.signin-btn').classList.add('active')
    }
  }
  //Checking data passing across the Router
  isUp: boolean = this.route.snapshot.data['sign'] === 'up'
  isIn: boolean = this.route.snapshot.data['sign'] === 'in'
  isPage: boolean = this.route.snapshot.data['sign'] === 'page'
  isMessage : boolean = true
  message : string
  messageColor: string
}
