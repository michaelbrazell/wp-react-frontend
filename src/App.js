import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './css/App.css';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>WordPress Post List</h2>
        <PostList />
      </div>
    );
  }
}

export default App;
