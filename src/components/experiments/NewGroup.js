import React, { Component } from "react";

class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: problemGroup
    }
  }

  deleteProblem = (id, e) => {
    e.preventDefault();
    console.log('this is: ' + id);
    // newGroup.push(id);
    // console.log(newGroup)
  }

  render() {
    return (
      <div className="group-items">        
        Foo
    	</div>
    );
  }
}

export default Problems;