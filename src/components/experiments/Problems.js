import React, { Component } from "react";

let newGroup = []

class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: this.props.data
    }
  }

  addProblem = (id, e) => {
    e.preventDefault();
    console.log('this is: ' + id);
    newGroup.push(id);
    console.log(newGroup)
  }

  removeProblem = (id, e) => {
    e.preventDefault();
    let index = newGroup.indexOf(id);
    if (index > -1) {
      newGroup.splice(index, 1);
    }
    console.log(newGroup)
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
              <a href={'/path/to/' + problem.id} onClick={(e) => this.addProblem(problem.id, e)}>Add</a>
            </div>
            <div className="col">
              <a className="float-right" href={'/path/to/' + problem.id} onClick={(e) => this.removeProblem(problem.id, e)}>Remove</a>
            </div>
          </div>  	
        ))}
    	</div>
    );
  }
}

export default Problems;