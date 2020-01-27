import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import CounterReducer from './store/reducers/counter';
import ResultReducer from './store/reducers/results';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: ResultReducer
});

const logger = store => {
    return next => {
        return action =>{
            console.log('[Logger]', action);
            const result = next(action);
            console.log('[Logger2]', store.getState());
            return result;
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
