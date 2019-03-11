import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'asdf1', name: 'Max', age: 28},
      {id: 'asdr2', name: 'Manu', age: 29},
      {id: 'asfd3', name: 'Stephanie', age: 26}
    ],
    otherState: "some value",
    showPersons: false
  };
   
  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

     //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {

    let persons = null;
    

    if (this.state.showPersons){
      persons = ( 
        <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonsHandler}
        changed={this.nameChangedHandler}/>
       );

        
        
    }

    

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
      
        
        {persons}
      </div>
    
    ); 
  }
  //click={this.switchNameHandler.bind(this, 'Maximilian')} - bind example
};   



export default App;
