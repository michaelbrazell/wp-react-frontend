import React, { Component } from 'react';

class FeaturedImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      featuredItemUrl: [],
      url: this.props.baseUrl
    }
  }
  componentDidMount () {
    const mediaUrl = `${this.state.url}wp/v2/media/${this.props.mediaId}`;
    if (this.props.mediaId !== 0) {
      fetch(mediaUrl)
        .then((resp) => resp.json())
        .then((mediaObject) => this.setState({featuredItemUrl: mediaObject.guid.rendered}))
        .catch(function(error) {
          console.log(error);
        });
      } else {
        this.setState({featuredItemUrl: 'http://via.placeholder.com/348x232'})
      }
  }
  render() {
     return (
      <img className="card-img-top" src={this.state.featuredItemUrl} alt={this.props.postTitle} />
     ) 
  }
}

export default FeaturedImage;