import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  // handleSearchClick = (val) => {
  //   console.log(val);
  //   // Navigate("/");
  //   this.setState({ sValue: val });
  // };
  // constructor() {
  //   super();
  //   this.state = {
  //     sValue: "",
  //   };
  // }
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="Home"
                home="Home"
                pageSize={9}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                key="Business"
                pageSize={9}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                key="Entertainment"
                pageSize={9}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                key="General"
                pageSize={9}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News key="Health" pageSize={9} country="in" category="health" />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                key="Science"
                pageSize={9}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News key="Sports" pageSize={9} country="in" category="sports" />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                key="Technology"
                pageSize={9}
                country="in"
                category="technology"
              />
            }
          />
          {/* forced remount by giving unique key so that it will understand that it has to  remount the component*/}
        </Routes>
      </Router>
    );
  }
}

//JSX WILL BE CHANGED TO HTML(BY RENDER METHOD) AND WILL BE RENDERED BY THE RENDER METHOD
