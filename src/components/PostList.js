import React, { Component } from 'react';

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount () {
    const url = 'http://web-standards.mathworks.com/wp-json/wp/v2/posts'
    fetch(url)
    .then((response) => response.json())
    .then((posts) => this.setState({posts: posts}))
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
              <div className="card-body">
                <div className="card-title"><h4>{post.title.rendered}</h4></div>
                <p className="card-text">{post.excerpt.rendered}</p>
                <a href={post.link} className="btn btn-outline-primary">Read more</a>
              </div>
            </div>
          </div>
        )}
       </div>
    );
  }
}

export default Nav;
