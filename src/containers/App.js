import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import PropTypes from 'prop-types';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id: 'asdf1', name: 'Max', age: 28},
      {id: 'asdr2', name: 'Manu', age: 29},
      {id: 'asfd3', name: 'Stephanie', age: 26}
    ],
    otherState: "some value",
    showPersons: false,
    showCockpit: true,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
   
  //componentWillMount() {
    //console.log('[App.js] componentWillMount');
  //}

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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

    // THIS IS WHAT ACTUALLY SETS STATE...NOT SCHEDULES
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

<<<<<<< HEAD
  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render () {
    console.log('[App.js] render');
    let persons = null;
    
=======
  render () {
    let persons = null;
  
>>>>>>> 886a6e7d28bae66fba376db548665050506f0698
    if (this.state.showPersons){
      persons = ( 
        <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonsHandler}
<<<<<<< HEAD
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
        />
       ); 
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }} >
        Remove Cockpit
        </button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? 
          <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} 
          /> : null}
          {persons}
        </AuthContext.Provider>
        
      </Aux>
=======
        changed={this.nameChangedHandler} />
       );   
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
>>>>>>> 886a6e7d28bae66fba376db548665050506f0698
    
    ); 
  }
  //click={this.switchNameHandler.bind(this, 'Maximilian')} - bind example
};   

Persons.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};


export default withClass(App, classes.App);
