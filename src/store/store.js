import counterReducer from './counterReducer';
import createStore from '../redux/createStore';

const initialState = {count: 0};
const store = createStore(counterReducer, initialState);
const dispatch = store.dispatch;
store.dispatch = action => {
    if(typeof action === 'function') {
        return action(dispatch);
    }
    return dispatch(action);
}

export default store;