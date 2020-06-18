import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContentComponent } from './user-content/user-content.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { NotificWrapComponent } from './notific-wrap/notific-wrap.component';
import { SocialMediaComponent } from './social-media/social-media.component';
@NgModule({
  declarations: [
    AppComponent,
    UserContentComponent,
    SignUpComponent,
    SignInComponent,
    SignPageComponent,
    HeaderBarComponent,
    FooterBarComponent,
    NotificWrapComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
