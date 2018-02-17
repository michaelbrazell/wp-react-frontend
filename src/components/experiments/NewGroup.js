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
        	<div className="row" id={problem.id} key={problem.id + '-' + index}>
            <div className="col">
              {problem.id}. {problem.title}
            </div>
            <div className="col">
              <button className="float-right" onClick={() => this.props.removeProblem(problem.id, problem.title)}>Remove</button>
            </div>
          </div>  	
        ))}
    	</div>
    );
  }
}

export default NewGroup;