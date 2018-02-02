import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import FeaturedImage from './FeaturedImage.js'

class PostList extends Component {
  constructor () {
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount () {
    const url = 'http://wordpress-api.local/wp-json/wp/v2/posts/'
    fetch(url)
    .then((response) => response.json())
    .then((posts) => this.setState({
      posts: posts
    }))
    .catch(function(error) {
      console.log(error);
    });
  }
  render() {
     return (
       <div className="row post-item">
        {this.state.posts.map((post) => 
          <div className="col-xs-12 col-sm-6 col-md-4 post-item mb-5 d-flex align-items-stretch">
            <div className="card" key={post.id}>
              <FeaturedImage mediaId={post.featured_media} postTitle={post.title.rendered}/>
              <div className="card-body">
                <div className="card-title"><h4>{ReactHtmlParser(post.title.rendered)}</h4></div>
                <p className="card-text">{ReactHtmlParser(post.excerpt.rendered)}</p>
                <a href={post.link} className="btn btn-outline-primary">Read more</a>
              </div>
            </div>
          </div>
        )}
       </div>
    );
  }
}

export default PostList;
