import React, { Component } from "react";
import "./css/App.css";
import PostList from "./components/PostList";
import Post from "./components/Post.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>WordPress Post List</h2>
        <PostList />
        <Post />
      </div>
    );
  }
}

export default App;
