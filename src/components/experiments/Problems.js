import React, { Component } from "react";

// let newGroup = []

class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: this.props.data
    }
  }
  
  render() {
    return (
      <div className="group-items">        
        {this.state.problems.map(problem => ( 
        	<div className="row" id={problem.id} key={problem.id}>
            <div className="col">
              {problem.id}. {problem.title}
            </div>
            <div className="col">
              <button onClick={() => this.props.addProblem(problem.id)}>Add</button>
            </div>
            <div className="col">
              <button onClick={() => this.props.removeProblem(problem.id)}>Remove</button>
            </div>
          </div>  	
        ))}
    	</div>
    );
  }
}

export default Problems;