export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const incrementCounter = () =>{
    return{
        type: INCREMENT
    }
}

export const increment = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(incrementCounter())
        }, 2000);

    }
}
export const decrement = () => {
    return{
        type: DECREMENT
    }
}