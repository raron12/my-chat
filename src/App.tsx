import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { proxy } from './Proxy';
import {Login} from './Login';
import { Main } from './Main';

export default class App extends Component
{
  state = {showLogin: true};
  componentDidMount()
  {
    //this.checkWidth();
    proxy.addEventListener( "login", () => {this.setState({showLogin:false}); this.forceUpdate();}, this );
    //window.addEventListener("resize", this.checkWidth.bind(this));
  }
  componentWillUnmount()
  {
    proxy.removeAllEventListener( this );
    //window.removeEventListener("resize",this.checkWidth);
  }
  render()
  {
    return(
      <div className="app">
        {this.state.showLogin?<Login/>:<Main/>}
      </div>
    );
    
  }


}