import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Pages from "./components/Pages";
import NoMatch from "./components/NoMatch";

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
              <Switch>
                <Route exact path="/" render={routeProps => <Home baseUrl={this.state.url}/>} />
                <Route exact path='/posts' render={routeProps => <Posts baseUrl={this.state.url}/>} />
                <Route path={`/posts/:id`} render={(props) => (<Post baseUrl={this.state.url} {...props} /> )} />
                <Route path='/pages' render={routeProps => <Pages baseUrl={this.state.url}/>} />
                <Route component={NoMatch}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
