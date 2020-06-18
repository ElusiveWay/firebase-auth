import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContentComponent } from './user-content/user-content.component'
import { SignPageComponent } from './sign-page/sign-page.component'
import { AppGuard } from './app-guard';

const routes: Routes = [
  { path: 'main', component: UserContentComponent, canActivate: [AppGuard]},
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'signpage', component: SignPageComponent, data : {sign : 'page'}},
  { path: 'signup', component: SignPageComponent, data : {sign : 'up'}},
  { path: 'signin', component: SignPageComponent, data : {sign : 'in'}},
  { path: '**', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', redirectTo: '/main', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [AppGuard]
})
export class AppRoutingModule { }
