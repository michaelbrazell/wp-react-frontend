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
        <div className="row">
          <div className="col">
            <h3>Testing CSS Modules</h3>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h4>Panel with basic styling</h4>
                <div className="panel panel-defaul">
                  <div className="panel-body">
                    <h4>Default Panel</h4>
                    <p>Some panel content.  This did not work as expected but I still think it's local to this componnent.</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <h4>Panel with styling using CSS modules</h4>
                <div className="panel">
                  <div className="panel-body">
                    <h4>Custom Panel</h4>
                    <p>Some panel content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        
      </div>
    );
  }
}

export default TestProp1;