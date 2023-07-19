import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     sValue: "",
  //   };
  // }
  // handleChange = (e) => {
  //   this.setState({ sValue: e.target.value });
  // };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark bg-body-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              NewsWala
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/General">
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Business">
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Entertainment">
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Science">
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Sports">
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Technology">
                    Technology
                  </NavLink>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.sValue}
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    this.props.handleSearchClick(this.state.sValue)
                  }
                >
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
