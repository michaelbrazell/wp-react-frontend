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
    let newGroupProblemArray = this.state.newGroupProblems.push({id, title});
    this.setState = {
      newGroupProblems: newGroupProblemArray
    }
    console.log(this.state.newGroupProblems)
    this.forceUpdate() // Shouldn't need to run force update... setState should auto render...
  }

  removeProblem = (id, title) => {
    /*
      NewGroupProblemArray is working... but I'm not able to set the state... it's just ignoring it.
      HAs something to do with setState being asychronous, but seems weird.  Works fine with addProblem()
      Some suggestions included adding a callback, but then it returns _setState() is not a function
      so it seems like `this` is not bound to it correctly... Might need to investigate adding a .bind somewhere
      Have no ides why this would work up above but not work here... Makes no sense
    */
    let newGroupProblemArray = this.state.newGroupProblems.filter(function(el) {
      return el.id !== id;
    });
    console.log(newGroupProblemArray)
    // this.setState({ newGroupProblems: newGroupProblemArray })

    this.setState({ newGroupProblems: newGroupProblemArray }, () => {
      console.log('updated state value', this.state.newGroupProblems)
    })

    // console.log(this.state.newGroupProblems)
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
    	</div>
    );
  }
}

export default Experiments;