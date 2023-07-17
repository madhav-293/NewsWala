import React, { Component } from "react";
import loading from "./Loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div style={{ position: "absolute", top: "50%", left: "47%" }}>
        <img src={loading} alt="Loading" />
      </div>
    );
  }
}
export default Spinner;
