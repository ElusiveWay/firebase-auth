import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './services/firestore.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private fstore : FirestoreService){}
  ngOnInit() : void{
    this.fstore.checkAdmin()
  }
}
