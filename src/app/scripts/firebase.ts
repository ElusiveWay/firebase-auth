import * as firebase from "firebase/app"
import "firebase/auth"
import {Router} from '@angular/router'
import { NotifyService } from '../services/app.notify.service'


export async function fbase(action: string, email: string = '', password: string = '', router: Router = undefined){
    switch (action){
        case 'in':
            await firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                return error
            }).then(function(r){
                if (r.user !== undefined){
                    router.navigateByUrl('/main')
                    return r.user
                }
            })
            break
        case 'up':
            await firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                return error
            }).then(function(r){
                if (r.user !== undefined){
                    router.navigateByUrl('/main')
                    return r.user
                }
            })
            break
        default:
            await firebase.auth().signOut().then(() => {}).catch(function(error) {
                return error
            });
            if (router) router.navigateByUrl('/signpage')
    }
}
