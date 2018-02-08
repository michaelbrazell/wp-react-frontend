import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import PostList from "./components/PostList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Nav />
          <div className="container">
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={PostList} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
