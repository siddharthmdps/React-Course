import * as ActionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.payload.storeValue})
                // counter: state.counter-action.payload.value
            }
        case ActionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter( result => (result.id!==action.deleteID) )
            }
        default:
            return state;    
    }
}

export default reducer;