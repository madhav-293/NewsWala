import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          s
          progress={this.state.progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
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
                setProgress={this.setProgress}
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
                setProgress={this.setProgress}
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
                setProgress={this.setProgress}
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
              <News
                setProgress={this.setProgress}
                key="Health"
                pageSize={9}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={this.setProgress}
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
              <News
                setProgress={this.setProgress}
                key="Sports"
                pageSize={9}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={this.setProgress}
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
