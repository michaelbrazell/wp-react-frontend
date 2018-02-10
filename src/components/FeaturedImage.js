import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';

class FeaturedImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      featuredItemUrl: [],
      url: this.props.baseUrl,
      loading: true
    }
  }
  componentDidMount () {
    const mediaUrl = `${this.state.url}wp/v2/media/${this.props.mediaId}`;
    if (this.props.mediaId !== 0) {
      fetch(mediaUrl)
        .then((resp) => resp.json())
        .then((mediaObject) => this.setState({
          featuredItemUrl: mediaObject.guid.rendered,
          loading: false
        }))
        .catch(function(error) {
          console.log(error);
        });
      } else {
        this.setState({featuredItemUrl: 'http://via.placeholder.com/348x232'})
      }
  }
  render() {
     return (
      
      (this.state.loading === true)
        ? <div className="loading-animation card-image"><BeatLoader color={'#343a40'} /></div>
        : <img className="card-img-top" src={this.state.featuredItemUrl} alt={this.props.postTitle} />
     ) 
  }
}

export default FeaturedImage;