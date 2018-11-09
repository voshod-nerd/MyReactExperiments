import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom'
import './style.css'


class RigthSideNavProductPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }




  changeNav = () => this.setState({
    active: !this.state.active
  }
  );
  
  render() {
    return (
      <div>
        <div id="mySidenav" className={this.state.active ? 'sidenav' : 'sidenavOpen'}  >
          <a href="{{javascript:void(0)}}" className="closebtn" onClick={this.changeNav}>&times;</a>
          <nav>
            <ul>
              <li><Link to='/'>Главная</Link></li>
              <li><Link to='/roster'>Врачи экперты</Link></li>
             
            </ul>
          </nav>
        </div>
        <span styles="{{font-size:30px;cursor:pointer}}" onClick={this.changeNav}>&#9776;Меню</span>
      </div>
    );
  }
}

export default RigthSideNavProductPanel;
