// reducer(state, action) - function to change state
// initialState - state to work with
const createStore = (reducer, initalState) => {
    let currentState = initalState;
    // Subscribers functions list (observer pattern)
    let callbacks = [];
    // Get state method
    const getState = () => currentState; 
    const dispatch = action => {
        currentState = reducer(currentState, action);
        callbacks.forEach(callback=>callback());
    }
    // Subscribe method
    const subscribe = callback => {
        callbacks.push(callback);
        // Return unsibscribe (const unsub = subscribe(()=>{}))
        return () => callbacks.filter(cb=>cb!==callback);
    }
    // Call with emty object to init currentState (first time we rendered component, state wasn't initialized without it)
    dispatch({});
    return {getState, dispatch, subscribe};
};

export default createStore;