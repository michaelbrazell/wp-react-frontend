import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Pages from "./components/Pages";

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://headless-wp.worcesterwebgroup.com/wp-json/'
    };
  }
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Nav baseUrl={this.state.url}/>
          <div className="container">
            <div>
              <Route exact path="/" render={routeProps => <Home baseUrl={this.state.url}/>} />
              <Route exact path='/posts' render={routeProps => <Posts baseUrl={this.state.url}/>} />
              <Route exact path='/posts/60' render={routeProps => <Post baseUrl={this.state.url} id={60} />} />
              <Route path='/pages' render={routeProps => <Pages baseUrl={this.state.url}/>} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
