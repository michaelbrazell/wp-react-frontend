import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteInfo: [],
      url: this.props.baseUrl
    };
  }
  componentDidMount() {
    const url = `${this.state.url}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          siteInfo: data
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {this.state.siteInfo.name}
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/posts" className="nav-link" activeClassName="active">
                  Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pages" className="nav-link" activeClassName="active">
                  Pages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/test1" className="nav-link" activeClassName="active">
                  Test Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/experiments" className="nav-link" activeClassName="active">
                  Experiments
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
