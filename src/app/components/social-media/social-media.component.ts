import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { NotifyService } from '../../services/app.notify.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  constructor(public note: NotifyService, public authService: AuthService, public router : Router) { }

  thenn = () => {
    const keys = ['Google', 'Facebook', 'Github']
    const action = (i : number) => {
      this.note.showSuccess(keys[i])
      this.router.navigateByUrl('/main')
    }
    return {
      g:(result : any)=>action(0),
      f:(result : any)=>action(1),
      gh:(result : any)=>action(2),
    }
    
  }
  catchh = (errorr : any) => {
    this.note.show({
      message : `Wrong!\n${errorr.message}!`,
      color: 'danger'
    })
  }

  google(){
      this.authService.GoogleAuth(this.thenn().g, this.catchh)
  }
  face(){
      this.authService.FacebookAuth(this.thenn().f, this.catchh)
  }
  git(){
      this.authService.GithubAuth(this.thenn().gh, this.catchh)
  }
}
