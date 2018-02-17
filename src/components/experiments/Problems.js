import React, { Component } from "react";

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
              <button className="float-right" onClick={() => this.props.addProblem(problem.id, problem.title)}>Add</button>
            </div>
          </div>  	
        ))}
    	</div>
    );
  }
}

export default Problems;