import React, { Component } from "react";
import { BeatLoader } from 'react-spinners';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteInfo: [],
      url: this.props.baseUrl,
      loading: true
    };
  }
  componentDidMount() {
    const url = `${this.state.url}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          siteInfo: data,
          loading: false
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {
          (this.state.loading === true)
            ? <div className="loading-animation"><BeatLoader color={'#343a40'} /></div> 
            : undefined
        }
        <h2 className="mb-3">{this.state.siteInfo.description}</h2>
        <p>This is the home</p>
      </div>
    );
  }
}

export default Home;