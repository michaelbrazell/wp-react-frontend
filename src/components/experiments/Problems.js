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
        	<div className="card mb-2" id={problem.id} key={problem.id}>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="mb-0">{problem.id}. {problem.title}</p>
                </div>
                <div className="col">
                  <button className="float-right btn btn-sm btn-outline-primary" onClick={() => this.props.addProblem(problem.id, problem.title)}>Add</button>
                </div>
              </div>
            </div>
          </div>  	
        ))}
    	</div>
    );
  }
}

export default Problems;