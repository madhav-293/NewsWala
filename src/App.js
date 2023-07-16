import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={9} />
      </div>
    );
  }
}

//JSX WILL BE CHANGED TO HTML(BY RENDER METHOD) AND WILL BE RENDERED BY THE RENDER METHOD
