import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import {Button} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            SAHAJYA
          </p>
          <Link to = "/LogIn">
            <Button bsStyle="primary" className="Button">
              Log In
            </Button>
          </Link>
          <a
            className="App-link"
            href="/SignUp"
            rel="noopener noreferrer"
          >
            Sign Up
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
