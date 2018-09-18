import counterReducer from './counterReducer';
import createStore from '../redux/createStore';

const initialState = {count: 0};
const store = createStore(counterReducer, initialState);

// const addThunkAndPromiseSupport = store => {
//     // Standart dispatch
//     const dispatch = store.dispatch;
//     // Return function
//     return action => {
//         // Passing dispatch to action(if it is function), so we will have access to it
//         if(typeof action === 'function') {
//             return action(dispatch);
//         }
//         // If action returns promise - dispatching it
//         else if (typeof action.then === 'function') {
//             return action.then(dispatch);
//         }
//     // If not function - use standart dispatch
//     return dispatch(action);
//     };     
// };

// const addLogSupport = (store)=> {
//     const dispatch = store.dispatch;
//     return action => {
//         console.log('State before', store.getState());
//         console.log('Action', action.type, action)
//         dispatch(action);
//         console.log('State after', store.getState());
//     }
// }

// store.dispatch = addThunkAndPromiseSupport(store);
// store.dispatch = addLogSupport(store);

// Redux like with currying
// function middleware(store) {
//     return function(next) {
//         return function(action) {
//             return next(action);
//         }
//     }
// }

const addThunkAndPromiseSupport = store => {
    return next => {
        return action => {
            if(typeof action === 'function') {
                return action(next);
            }
            else if (typeof action.then === 'function') {
                return action.then(next);
            }
        return next(action);
        };     
    };
};

const addLogSupport = (store)=> {
    return next => {
        return action => {
            console.log('State before', store.getState());
            console.log('Action', action.type, action)
            let result = next(action);
            console.log('State after', store.getState());
            return result;
        }
    }
}

// AddThunkSupport goes first (ritght to left) - slice and reverse to fix
// const middlewares = [addLogSupport, addThunkAndPromiseSupport];
// middlewares.slice().reverse().forEach(middleware => store.dispatch = middleware(store)(store.dispatch))

const applyMiddleware = (store,...middlewares) => {
    middlewares.forEach(middleware => store.dispatch = middleware(store)(store.dispatch))
}
applyMiddleware(store, addThunkAndPromiseSupport, addLogSupport)
export default store;