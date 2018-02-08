import React, { Component } from "react";

class Home extends Component {
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
      <div>
        <h2 className="mb-3">{this.state.siteInfo.description}</h2>
        <p>This is the home</p>
      </div>
    );
  }
}

export default Home;