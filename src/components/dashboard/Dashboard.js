import React, { Component } from "react";
// import { className } from "postcss-selector-parser";
import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications></Notifications>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
