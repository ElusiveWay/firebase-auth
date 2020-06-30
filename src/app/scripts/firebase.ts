import * as firebase from "firebase/app"
import "firebase/auth"
import {Router} from '@angular/router'
import { NotifyService } from '../services/app.notify.service'

export async function fb(action: string, email: string = '', password: string = '', router: Router = undefined){
    switch (action){
        case 'in':
            await firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                new NotifyService().showDanger(error.message)
                return error
            }).then(function(r){
                if (r.user !== undefined){
                    new NotifyService().showSuccess('Email')
                    router.navigateByUrl('/main')
                    return r.user
                }
            })
            break
        case 'up':
            await firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                new NotifyService().showDanger(error.message)
                return error
            }).then(function(r){
                if (r.user !== undefined){
                    new NotifyService().show({
                        message : 'Finally!\n Welcome to community!',
                        color: 'success'
                    }) 
                    router.navigateByUrl('/main')
                    return r.user
                }
            })
            break
        default:
            await firebase.auth().signOut().then(() => new NotifyService().showLogout()).catch(function(error) {
                return error
            });
            if (router) router.navigateByUrl('/signpage')
    }
}
