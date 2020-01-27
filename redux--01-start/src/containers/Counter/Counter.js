import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteCounter(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.ctr.counter, 
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch(ActionTypes.increment()),
        onDecrementCounter: () => dispatch({type: ActionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: ActionTypes.ADD, payload: {value: 5} }),
        onSubtractCounter: () => dispatch({type: ActionTypes.SUBSTRACT, payload: {value: 5} }),
        onStoreCounter: (value) => dispatch({type: ActionTypes.STORE_RESULT, payload: {storeValue: value} }),
        onDeleteCounter: (id) => dispatch({type: ActionTypes.DELETE_RESULT, deleteID: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);