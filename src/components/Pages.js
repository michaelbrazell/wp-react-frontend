import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import FeaturedImage from "./FeaturedImage.js";

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      url: this.props.baseUrl
    };
  }
  componentDidMount() {
    const url = `${this.state.url}wp/v2/pages/`;
    fetch(url)
      .then(response => response.json())
      .then(pages =>
        this.setState({
          pages: pages
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
        <div className="row">
          {this.state.pages.map(page => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 page-item mb-5 d-flex align-items-stretch"
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
                  <a href={page.link} className="btn btn-outline-primary">
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
