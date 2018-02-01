import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './css/App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Nav />
      </div>
    );
  }
}

export default App;