import React, { Component } from 'react';
import ReactHtmlParser from "react-html-parser";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'This is the Default Title',
      content: 'Bar',
      id: this.props.match.params.id,
      url: this.props.baseUrl
    };
    console.log(this.state.newId);
  }
  componentDidMount() {
    const url = `${this.state.url}wp/v2/posts/${this.state.id}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title.rendered,
          content: data.content.rendered,
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h2 className="mb-3">{ReactHtmlParser(this.state.title)}</h2>
        {ReactHtmlParser(this.state.content)}
      </div>
    );
  }
}

export default Post;