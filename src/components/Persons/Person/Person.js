import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

<<<<<<< HEAD
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering....');
        return (
            <Aux>
                <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in.</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!!
                </p>
                <p>{this.props.children}</p>
                <input type="text" 
                       //ref={(inputEl) => {this.inputElement = inputEl}} 
                       ref={this.inputElementRef}
                       onChange={this.props.changed} 
                       value={this.props.name} 
                />
            </Aux>
            );
    };
=======
const person = (props) => {
    return (
    <div className={classes.Person}>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    ) 
>>>>>>> 886a6e7d28bae66fba376db548665050506f0698
};

export default withClass(Person, classes.Person);