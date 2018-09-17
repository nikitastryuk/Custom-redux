import {INCREMENT, DECREMENT, RESET, GET_INITIAL_COUNT_START, GET_INITIAL_COUNT_SUCCESS, GET_INITIAL_COUNT_ERROR} from './counterActionTypes';

export const increment = (amount) => {
    return {type: INCREMENT, amount};
}

export const decrement = (amount) => {
    return {type: DECREMENT, amount};
}
export const reset = () => {
    return  {type: RESET};
}
export const getCountStart = () => {
    return {
        type: GET_INITIAL_COUNT_START
    };
};

export const getCountSuccess = (count) => {
    return {
        type: GET_INITIAL_COUNT_SUCCESS,
        count
    };
};

export const getCountError = (error) => {
    return {
        type: GET_INITIAL_COUNT_ERROR,
        error
    };
};

export const getCount = () => {
    return dispatch => {
        dispatch(getCountStart());
        fetch(`./count.json`)
        .then(response => response.json())
        .then(data => console.log(data));
    }
}