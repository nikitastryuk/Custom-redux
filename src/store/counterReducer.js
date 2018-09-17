import {INCREMENT, DECREMENT, RESET, GET_INITIAL_COUNT_SUCCESS} from './counterActionTypes';

function reducer(state, action) {
    switch(action.type) {
        case GET_INITIAL_COUNT_SUCCESS: return {count: action.count}; 
        case INCREMENT: return {count: state.count + action.amount}; 
        case DECREMENT: return {count: state.count - action.amount}; 
        case RESET: return {count: 0};
        default: return state; 
    }
}

export default reducer;