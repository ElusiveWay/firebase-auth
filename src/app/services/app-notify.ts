    import {Subject} from 'rxjs';
    import {ActionTypes} from '../actions';
    
    interface InitialState {
      notification: Object;
    }
    
    let state: InitialState = {
        notification: {
            message: '',
            color: ''
        },
    };
    
    interface Event {
      type: String;
      payload?: Object;
    }
    
    export const store = new Subject<InitialState>();
    export const eventDispatcher = new Subject<Event>();
    
    eventDispatcher.subscribe((data: Event) => {
      switch (data.type) {
        case ActionTypes.GET_NOTIFY:
          store.next(state);
          break;
    
        case ActionTypes.CREATE_NOTIFY:
          state = {
            notification: data.payload
          };
          store.next(state);
          break;
    
        case ActionTypes.DEL_NOTIFY:
            state = {
                notification: {
                    message: '',
                    color: ''
                }
            }
          store.next(state);
          break;
        default:
          break;
      }
    });