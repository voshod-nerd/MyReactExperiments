import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RigthSideNavProductPanel from './components/NavProductPanel/RightSideNavProductPanel'
import {Switch,Route } from 'react-router-dom'
import About from './components/About/About'
import DoctorAndSertificate from './components/DoctorAndSertificate/DoctorAndSertificate'
import NavBar from './components/Navbar/Navbar'

class App extends Component {

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="row">
          <div className="col-md-4">
            <RigthSideNavProductPanel />
          </div>
          <div className="col-md-8">
            <Switch>
              <Route exact path='/' component={About} />
              
              <Route path='/roster' component={ DoctorAndSertificate} />
            
            </Switch>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
