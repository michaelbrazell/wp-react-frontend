import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import FeaturedImage from "./FeaturedImage.js";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      url: this.props.baseUrl
    };
  }
  componentDidMount() {
    const url = `${this.state.url}wp/v2/posts/`;
    fetch(url)
      .then(response => response.json())
      .then(posts =>
        this.setState({
          posts: posts
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="post-list">
        <h2 className="mb-3">Posts</h2>
        <div className="row">
          {this.state.posts.map(post => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 post-item mb-5 d-flex align-items-stretch"
              key={post.id}
            >
              <div className="card">
                <FeaturedImage
                  mediaId={post.featured_media}
                  postTitle={post.title.rendered}
                  baseUrl={this.state.url}
                />
                <div className="card-body">
                  <div className="card-title">
                    <h4>{ReactHtmlParser(post.title.rendered)}</h4>
                  </div>
                  <div className="card-text">
                    {ReactHtmlParser(post.excerpt.rendered)}
                  </div>
                  <a href={post.link} className="btn btn-outline-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;