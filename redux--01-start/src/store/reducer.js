// import * as ActionTypes from './actions';

// const initialState = {
//     counter: 0,
//     results: []
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case ActionTypes.INCREMENT:
//             const newState = Object.assign({}, state);
//             newState.counter = state.counter+1;
//             return newState;
//         case ActionTypes.DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter-1
//             }
//         case ActionTypes.ADD:
//             return {
//                 ...state,
//                 counter: state.counter+action.payload.value
//             }
//         case ActionTypes.SUBSTRACT:
//             return {
//                 ...state,
//                 counter: state.counter-action.payload.value
//             }
//         case ActionTypes.STORE_RESULT:
//             return {
//                 ...state,
//                 results: state.results.concat({id: new Date(), value: state.counter})
//                 // counter: state.counter-action.payload.value
//             }
//         case ActionTypes.DELETE_RESULT:
//             return {
//                 ...state,
//                 results: state.results.filter( result => (result.id!==action.deleteID) )
//             }
//         default:
//             return state;    
//     }
// }

// export default reducer;