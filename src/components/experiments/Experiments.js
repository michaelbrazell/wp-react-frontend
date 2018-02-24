import React, { Component } from "react";
import Problems from "./Problems";
import NewGroup from "./NewGroup";
// import styles from "./experiments.css";

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
      problems: problemGroup,
      newGroupProblems: []
    }
  }

  addProblem = (id, title) => {
    let newGroupProblemArray = this.state.newGroupProblems.push({id, title});
    this.setState = ({
      newGroupProblems: newGroupProblemArray
    })
    this.forceUpdate()
  }

  removeProblem = (id, title) => {
    /*
      This makes an array from our newGroupProblems in state
      The index variable maps through newGroupProblems, and funds the id of the item that was clicked
      The array is then spliced by that index
      State is set of the new array without that item.
      Improve: Probably don't need to pass title anymore
    */
    let array = this.state.newGroupProblems;
    let index = this.state.newGroupProblems.map(function(e) { return e.id; }).indexOf(id);
    array.splice(index, 1);
    this.setState = ({
      newGroupProblems: array 
    })
    this.forceUpdate()
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
              data={this.state.problems}
              addProblem={(id, title) => this.addProblem(id, title)}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <h3>New Group Problems</h3>
            <NewGroup 
              problems={this.state.newGroupProblems} 
              removeProblem={(id, title) => this.removeProblem(id, title)} 
            />
          </div>
        </div>
        <hr />
    	</div>
    );
  }
}

export default Experiments;