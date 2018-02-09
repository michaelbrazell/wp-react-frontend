import React, { Component } from 'react';
import ReactHtmlParser from "react-html-parser";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Foo',
      content: 'Bar',
      id: this.props.id,
      url: this.props.baseUrl
    };
  }
  componentDidMount() {
    const url = `${this.state.url}wp/v2/posts/${this.state.id}`;
    console.log(url)
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