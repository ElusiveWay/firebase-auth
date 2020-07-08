import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import "firebase/auth"

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent implements OnInit {
  constructor( public auth : AuthService){}
  ngOnInit(): void {
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'))
    document.querySelector('.main-btn').classList.add('active')
  }
  user : string = this.auth.getUser().displayName || this.auth.getUser().email
  email : string = this.auth.getUser().email
  photo : string = this.auth.getUser().photoURL || 'https://previews.123rf.com/images/diddleman/diddleman1204/diddleman120400002/13058158-no-user-profile-picture-hand-drawn--Stock-Vector-image.jpg'
  defPhoto : string = 'https://previews.123rf.com/images/diddleman/diddleman1204/diddleman120400002/13058158-no-user-profile-picture-hand-drawn--Stock-Vector-image.jpg'
}
