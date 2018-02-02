import React, { Component } from 'react';

class FeaturedImage extends Component {
  constructor () {
    super()
    this.state = {
      featuredItemUrl: []
    }
  }
  componentDidMount () {
    const mediaUrl = `http://wordpress-api.local/wp-json/wp/v2/media/${this.props.mediaId}`;
    if (this.props.mediaId !== 0) {
      fetch(mediaUrl)
        .then((resp) => resp.json())
        .then((mediaObject) => this.setState({featuredItemUrl: mediaObject.guid.rendered}))
        .catch(function(error) {
          console.log(error);
        });
      } else {
        this.setState({featuredItemUrl: 'http://via.placeholder.com/350x150'})
      }
  }
  render() {
     return (
      <img className="card-img-top" src={this.state.featuredItemUrl} alt={this.props.postTitle} />
     ) 
  }
}

export default FeaturedImage;