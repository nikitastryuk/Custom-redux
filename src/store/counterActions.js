import {INCREMENT, DECREMENT, RESET, GET_INITIAL_COUNT_SUCCESS} from './counterActionTypes';

export const increment = (amount) => {
    return {type: INCREMENT, amount};
}

export const decrement = (amount) => {
    return {type: DECREMENT, amount};
}
export const reset = () => {
    return  {type: RESET};
}

export const getCountSuccess = (count) => {
    return {type: GET_INITIAL_COUNT_SUCCESS, count};
};

export const getCount = () => {
    // Returning promise
    return fetch('https://gist.githubusercontent.com/nikitastryuk/a6ff5ec6e346a6c72d14004882778507/raw/8dbcd48533453517728a169325166a196a1bbb18/count.json')
        .then(response => response.json())
        .then(data => getCountSuccess(data.count))
        .catch(error => console.log(error));
}

// export const getCount = () => {
//     // Returning other function with dispatch parameter (thunk)
//     return dispatch => {
//         fetch('https://gist.githubusercontent.com/nikitastryuk/a6ff5ec6e346a6c72d14004882778507/raw/8dbcd48533453517728a169325166a196a1bbb18/count.json')
//         .then(response => response.json())
//         .then(data => dispatch(getCountSuccess(data.count)))
//         .catch(error => console.log(error));
//     }
// }