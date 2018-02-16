import React, { Component } from "react";

class NewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: this.props.problems
    }
  }

  render() {
    console.log(this.state.problems)
    return (
      <div className="group-items">        
        {this.state.problems.map(problem => ( 
        	<div className="row" id={problem.id} key={problem.id}>
            <div className="col">
              {problem.id}
            </div>
          </div>  	
        ))}
    	</div>
    );
  }
}

export default NewGroup;