import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras} from "@angular/router";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'

@Injectable({
    providedIn: 'root'
  })
export class AppGuard implements CanActivate{
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        if ( firebase.auth().currentUser !== null ) {
            return true
        } else {
            this.router.routeReuseStrategy.shouldReuseRoute = ( ) => false;
            this.router.navigateByUrl('/signpage',{replaceUrl: true, queryParams: {messageColor: '#007bff13', message : 'You have to Sign first!'}})
            return false
        }
    }
}