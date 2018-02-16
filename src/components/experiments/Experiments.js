import React, { Component } from "react";
import Problems from "./Problems";
import NewGroup from "./NewGroup";

const problemGroup = [
	{
  	"title":"Problem Title 1",
    "id":1
  },
  {
  	"title":"Problem Title 2",
    "id":2
  },
  {
  	"title":"Problem Title 3",
    "id":3
  },
  {
  	"title":"Problem Title 4",
    "id":4
  },
  {
  	"title":"Problem Title 5",
    "id":5
  },
]

class Experiments extends Component {
  constructor() {
    super();
    this.state = {
      newGroupProblems: []
    }
  }

  addProblem = (id, title) => {
    this.state.newGroupProblems.push({id, title});
    console.log(this.state.newGroupProblems)
  }

  removeProblem = (id, title) => {
    let index = this.state.newGroupProblems.indexOf({id, title});
    if (index > -1) {
      this.state.newGroupProblems.splice(index, 1);
    }
    console.log(this.state.newGroupProblems)
  }

  render() {
    return (
      <div className="experiments">
        <h2>Experiments</h2>
        <p>This is for building a groups component where selecting an item in the left builds up an array of items</p>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3>Current Problems</h3>
            <Problems 
              data={problemGroup}
              addProblem={(id, title) => this.addProblem(id, title)}
              removeProblem={(id, title) => this.removeProblem(id, title)}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <h3>New Group Problems</h3>
            <NewGroup problems={this.state.newGroupProblems} />
          </div>
        </div>
    	</div>
    );
  }
}

export default Experiments;