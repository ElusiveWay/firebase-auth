import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app"
import "firebase/auth"

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent implements OnInit {
  ngOnInit(): void {
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'))
    document.querySelector('.main-btn').classList.add('active')
  }
  user : string = firebase.auth().currentUser.displayName || firebase.auth().currentUser.email
  email : string = firebase.auth().currentUser.email
  photo : string = firebase.auth().currentUser.photoURL || 'https://previews.123rf.com/images/diddleman/diddleman1204/diddleman120400002/13058158-no-user-profile-picture-hand-drawn--Stock-Vector-image.jpg'
  defPhoto : string = 'https://previews.123rf.com/images/diddleman/diddleman1204/diddleman120400002/13058158-no-user-profile-picture-hand-drawn--Stock-Vector-image.jpg'
}
