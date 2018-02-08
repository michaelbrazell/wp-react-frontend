import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
     return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Read Post
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Post;