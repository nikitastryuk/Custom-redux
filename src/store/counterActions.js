import {INCREMENT, DECREMENT, RESET} from './counterActionTypes';

export const increment = (amount) => {
    return {type: INCREMENT, amount};
}

export const decrement = (amount) => {
    return {type: DECREMENT, amount};
}
export const reset = () => {
    return  {type: RESET};
}