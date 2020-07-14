import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { UserContentComponent } from './components/user-content/user-content.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignPageComponent } from './components/sign-page/sign-page.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FeedComponent } from './components/feed/feed.component';
import { AddQuestionComponent } from './components/add-question/add-question.component'
import { AuthService } from './services/auth.service'
import { NotifyService } from './services/app.notify.service';
import { Logined } from './services/app-guard';
import { FirestoreService } from './services/firestore.service';
import { QusetionBlockComponent } from './components/qusetion-block/qusetion-block.component';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { SubpanelComponent } from './components/subpanel/subpanel.component';
import { NotificatorComponent } from './components/notificator/notificator.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContentComponent,
    SignUpComponent,
    SignInComponent,
    SignPageComponent,
    HeaderBarComponent,
    FooterBarComponent,
    SocialMediaComponent,
    FeedComponent,
    AddQuestionComponent,
    QusetionBlockComponent,
    QuestionPageComponent,
    SubpanelComponent,
    NotificatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ AuthService, NotifyService, Logined, FirestoreService  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
