import React, { Component } from 'react';

import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPersonHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePersonHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {persons: state.persons}
);

const mapDispatchToProps = (dispatch) => ({
    onAddPersonHandler: () => dispatch({type: 'ADD_PERSON'}),
    onRemovePersonHandler: (id) => dispatch({type: 'REMOVE_PERSON', personId: id})
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);