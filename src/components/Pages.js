import React, { Component } from "react";
import { BeatLoader } from 'react-spinners';
import ReactHtmlParser from "react-html-parser";
import FeaturedImage from "./FeaturedImage.js";

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      url: this.props.baseUrl,
      loading: true
    };
  }
  componentDidMount() {
    const url = `${this.state.url}wp/v2/pages/`;
    fetch(url)
      .then(response => response.json())
      .then(pages =>
        this.setState({
          pages: pages,
          loading: false
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="pages-list">
        <h2 className="mb-3">Pages</h2>
        {
          (this.state.loading === true)
            ? <div className="loading-animation"><BeatLoader color={'#343a40'} /></div> 
            : undefined
        }
        <div className="card-columns">
          {this.state.pages.map(page => (
            <div
              className="page-item"
              key={page.id}
            >
              <div className="card">
                <FeaturedImage
                  mediaId={page.featured_media}
                  pageTitle={page.title.rendered}
                  baseUrl={this.state.url}
                />
                <div className="card-body">
                  <div className="card-title">
                    <h4>{ReactHtmlParser(page.title.rendered)}</h4>
                  </div>
                  <div className="card-text">
                    {ReactHtmlParser(page.excerpt.rendered)}
                  </div>
                  <a href={'/pages/' + page.id} className="btn btn-outline-primary">
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

export default Pages;
