import React, { Component } from 'react';
import {Well, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './LogIn.css';
import {firebaseApp} from '../firebase';
import Dashboard from './Dashboard';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
      message: ''
      }
    }
  }

  LogIn() {
    console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch (error => {
        this.setState({error})
    })
  }
    render () {
        const wellStyles = { maxWidth: 400, margin: '0 auto ' };
        return (
        <div className="form">
        <Well className="well">
        <form>
        <h1>Sign In Here</h1>
        <p>Only NDRF members can Sign In with their registered email ID</p>
        <input
          className="form-control"
          type="text"
          placeholder="Email Address"
          onChange={event => this.setState({email: event.target.value})}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          onChange={event => this.setState({password: event.target.value})}
        />
        <div>
          {this.state.error.message}
        </div>
        <div className="well" style={wellStyles}>
        <Link to="/">
            <Button bsStyle="primary" bsSize="large" block
            onClick={() => this.LogIn()} >
            Log In
            </Button>
            </Link>
            <Link to="/SignUp">
            <Button bsSize="large" block>
            Sign Up
            </Button>
            </Link>
        </div>
      </form>
      </Well>
      </div>
        );
    }
}

export default LogIn;



