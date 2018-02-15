import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./css/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Pages from "./components/Pages";
import Page from "./components/Page";
import TestProp1 from "./components/TestProp1";
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
        <Route
        render={({ location, props }) => (
          <div className="app-wrapper">
            <Nav baseUrl={this.state.url}/>
            <div className="container-fluid">
              <div>
              <TransitionGroup>
                <CSSTransition key={location.key} {...props}
                classNames="fadeTranslate"
                timeout={750}
                mountOnEnter={true}
                unmountOnExit={true}>
                  <section className="fix-container">
                    <Switch location={location}>
                      <Route exact path="/" render={routeProps => <Home baseUrl={this.state.url}/>} />
                      <Route exact path='/posts' render={routeProps => <Posts baseUrl={this.state.url}/>} />
                      <Route path={`/posts/:id`} render={(props) => (<Post baseUrl={this.state.url} {...props} /> )} />
                      <Route exact path='/pages' render={routeProps => <Pages baseUrl={this.state.url}/>} />
                      <Route path={`/pages/:id`} render={(props) => (<Page baseUrl={this.state.url} {...props} /> )} />
                      <Route path='/test1' render={routeProps => <TestProp1 baseUrl={this.state.url}/>} />
                      <Route component={NoMatch}/>
                    </Switch>
                  </section>
                </CSSTransition>
              </TransitionGroup>
              </div>
            </div>
          </div>
        )}
        />
      </Router>
    );
  }
}

export default App;
