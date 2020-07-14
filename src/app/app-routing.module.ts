import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContentComponent } from './components/user-content/user-content.component'
import { SignPageComponent } from './components/sign-page/sign-page.component'
import { FeedComponent } from './components/feed/feed.component'
import { AddQuestionComponent } from './components/add-question/add-question.component'
import { QuestionPageComponent } from './components/question-page/question-page.component'
import { Logined } from './services/app-guard';
import { FirestoreService } from './services/firestore.service';


const routes: Routes = [
  { path: 'questions/:id', component: QuestionPageComponent, canActivate: [Logined]},
  { path: 'my', component: FeedComponent, canActivate: [Logined]},
  { path: 'moderate', component: FeedComponent, canActivate: [Logined, FirestoreService]},
  { path: 'main', component: FeedComponent, canActivate: [Logined]},
  { path: 'add', component: AddQuestionComponent, canActivate: [Logined]},
  { path: 'edit/:uid', component: AddQuestionComponent, canActivate: [Logined]},
  { path: 'profile', component: UserContentComponent, canActivate: [Logined]},
  { path: 'questions', component: FeedComponent, canActivate: [Logined]},
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'signpage', component: SignPageComponent, data : {sign : 'page'}},
  { path: 'signup', component: SignPageComponent, data : {sign : 'up'}},
  { path: 'signin', component: SignPageComponent, data : {sign : 'in'}},
  { path: '**', redirectTo: '/main', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [Logined, FirestoreService]
})
export class AppRoutingModule { }
