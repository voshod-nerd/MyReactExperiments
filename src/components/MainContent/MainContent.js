import React, { Component } from 'react';



class MainContent extends Component {

    constructor(props) {
      super(props);
      this.state = {
          active: true,
      };
  }

    changeNav = () =>this.setState( {
      active: !this.state.active
    }
    );
  
   
  
    render() {
      return (
        <div>
          <div id="mySidenav" className={this.state.active ? 'sidenav' : 'sidenavOpen'}  >
            <a href="{{javascript:void(0)}}" className="closebtn" onClick={this.changeNav}>&times;</a>
            <a href="{{javascript:void(0)}}" >Врачи эксперты</a>
            <a href="{{javascript:void(0)}}">Отчеты</a>
          </div>
          <span styles="{{font-size:30px;cursor:pointer}}" onClick={this.changeNav}>&#9776;Меню</span>
        </div>
      );
    }
  }
  
  export default MainContent;
  