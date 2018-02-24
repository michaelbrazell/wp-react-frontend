import React, { Component } from "react";

class NewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: []
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({problems: newProps.problems});
  }

  render() {
    return (
      <div className="group-items">        
        {this.state.problems.map((problem, index) => ( 
        	<div className="card mb-2" id={problem.id} key={problem.id + '-' + index}>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="mb-0"> {problem.id}. {problem.title}</p>
                </div>
                <div className="col">
                  <button className="float-right btn btn-sm btn-outline-primary" onClick={() => this.props.removeProblem(problem.id, problem.title)}>Remove</button>
                </div>
              </div>
            </div>
          </div>  	
        ))}
    	</div>
    );
  }
}

export default NewGroup;