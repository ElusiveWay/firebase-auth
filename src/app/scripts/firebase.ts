import * as firebase from "firebase/app"
import "firebase/auth"
import {Router} from '@angular/router'
import {eventDispatcher} from '../services/app-notify';
import {ActionTypes} from '../actions';

export async function fb(action: string, email: string = '', password: string = '', router: Router = undefined){
    switch (action){
        case 'in':
            await firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
                    message : `Oops!\n ${error.message}!`,
                    color: 'danger'
                }});
                return error
            }).then(function(r){
                if (r.user !== undefined){
                    eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
                        message : 'Logged in!\n You have successfully logged in!',
                        color: 'success'
                    }});
                    router.navigateByUrl('/main')
                    return r.user
                }
            })
            break
        case 'up':
            await firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
                    message : `Oops!\n ${error.message}!`,
                    color: 'danger'
                }});
                return error
            }).then(function(r){
                if (r.user !== undefined){
                    eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
                        message : 'Finally!\n Welcome to community!',
                        color: 'success'
                    }})    
                    router.navigateByUrl('/main')
                    return r.user
                }
            })
            break
        default:
            await firebase.auth().signOut().then(function() {
                eventDispatcher.next({type: ActionTypes.CREATE_NOTIFY, payload: {
                    message : 'Logged out!\n You have successfully logged out!',
                    color: 'info'
                }});
            }).catch(function(error) {
                return error
            });
            router.navigateByUrl('/signpage')
    }
}
