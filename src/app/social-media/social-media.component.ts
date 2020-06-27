import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { NotifyService } from '../services/app.notify.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {

  constructor(public note: NotifyService, public authService: AuthService, public router : Router) { }

  google(){
    const thenn = (result : any) => {
      this.note.showSuccess('Google')
      this.router.navigateByUrl('/main')
    }
    const catchh = (errorr : any) => {
      this.note.show({
        message : `Wrong!\n${errorr.message}!`,
        color: 'danger'
      })
    }
    this.authService.GoogleAuth(thenn, catchh)
}
  face(){
      const thenn = (result : any) => {
        this.note.showSuccess('Facebook')
        this.router.navigateByUrl('/main')
      }
      const catchh = (errorr : any) => {
        this.note.show({
          message : `Wrong!\n${errorr.message}!`,
          color: 'danger'
        })
      }
      this.authService.FacebookAuth(thenn, catchh)
  }
  git(){
    const thenn = (result : any) => {
      this.note.showSuccess('Github')
      this.router.navigateByUrl('/main')
    }
    const catchh = (errorr : any) => this.note.showDanger(errorr.message)
    this.authService.GithubAuth(thenn, catchh)
}
  
}
