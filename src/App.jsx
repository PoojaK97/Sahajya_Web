import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DistressLocations from './components/DistressLocations';
import Volunteers from './components/Volunteers';
import Navbar from './components/CustomNavbar';
import Doctors from './components/Doctors';
import ReliefCamps from './components/ReliefCamps';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/DistressLocations" component={DistressLocations} />
          <Route path="/Volunteers" component={Volunteers} />
          <Route path="/Doctors" component={Doctors} />
          <Route path="/ReliefCamps" component={ReliefCamps} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
