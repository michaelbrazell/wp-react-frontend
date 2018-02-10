import React, { Component } from "react";
import { BeatLoader } from 'react-spinners';

class TestProp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div>
        <div className="loading-animation"><BeatLoader color={'#343a40'} /></div> 
        
          
        
      </div>
    );
  }
}

export default TestProp1;