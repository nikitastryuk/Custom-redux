import counterReducer from './counterReducer';
import createStore from '../redux/createStore';

const initialState = {count: 0};
const store = createStore(counterReducer, initialState);

const addThunkAndPromiseSupport = store => {
    // Standart dispatch
    const dispatch = store.dispatch;
    // Return function
    return action => {
        // Passing dispatch to action(if it is function), so we will have access to it
        if(typeof action === 'function') {
            return action(dispatch);
        }
        // If action returns promise - dispatching it
        else if (typeof action.then === 'function') {
            return action.then(dispatch);
        }
    // If not function - use standart dispatch
    return dispatch(action);
    };     
};

store.dispatch = addThunkAndPromiseSupport(store);

export default store;