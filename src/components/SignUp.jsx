import React, { Component } from 'react';
import {Well, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './SignUp.css';
import {firebaseApp} from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      id: '',
      error: {
      message: ''
      }
    }
  }

  signUp() {
    console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch (error => {
        this.setState({error})
    })
  }
    render () {
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        return (
        <div className="form">
        <Well className="well">
        <form>
        <h1>Register Here</h1>
        <p>NDRF ID will be used to verify your details.</p>
        <input
          className="form-control"
          name="name"
          type="text"
          placeholder="Name"
          onChange={event => this.setState({name: event.target.value})}
        />
        <input
          className="form-control"
          name="email"
          type="text"
          placeholder="Email Address"
          onChange={event => this.setState({email: event.target.value})}
        />
        <input
          className="form-control"
          name="password"
          type="password"
          placeholder="Password"
          onChange={event => this.setState({password: event.target.value})}
        />
        <input
          className="form-control"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={event => this.setState({confirmPassword: event.target.value})}
        />
        <input
          className="form-control"
          name="id"
          type="text"
          placeholder="NDRF ID"
          onChange={event => this.setState({id: event.target.value})}
        />
        <div>
          {this.state.error.message}
        </div>
        <div className="well" style={wellStyles}>
            <Button bsStyle="primary" bsSize="large" block
             onClick={() => this.signUp()} 
            >
            Register
            </Button>
            <Link to="/LogIn">
            <Button bsSize="large" block>
            Log In
            </Button>
            </Link>
        </div>
      </form>
      </Well>
      </div>
        );
    }
}

export default SignUp;



