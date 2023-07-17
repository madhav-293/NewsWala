import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News key={1} pageSize={9} country="in" category="general" />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News key={2} pageSize={9} country="in" category="business" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key={3}
                pageSize={9}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News key={4} pageSize={9} country="in" category="general" />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key={5} pageSize={9} country="in" category="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News key={6} pageSize={9} country="in" category="science" />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News key={7} pageSize={9} country="in" category="sports" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News key={8} pageSize={9} country="in" category="technology" />
            }
          />
        </Routes>
      </Router>
    );
  }
}

//JSX WILL BE CHANGED TO HTML(BY RENDER METHOD) AND WILL BE RENDERED BY THE RENDER METHOD
