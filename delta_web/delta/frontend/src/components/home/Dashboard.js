import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileGlance from "../profile/ProfileGlance";

export class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    //Defines the values that will be held within the daily graph
    const daily_graph = {
      labels: [0, 2, 4, 6, 8, 10, 12], //X values of daily graph, hours in this case
      datasets: [
        {
          label: user.username,
          backgroundColor: "rgb(6, 132, 164)",
          borderColor: "rgb(6, 132, 164)",
          data: [0, 10, 5, 2, 20, 30, 45], //User data for daily graph
          lineTension: 0.5,
        },
        {
          label: "Average",
          backgroundColor: "rgb(51, 204, 242)",
          borderColor: "rgb(51, 204, 242)",
          data: [0, 4, 6, 7, 3, 16, 10], // General data for daily graph
          lineTension: 0.5,
        },
      ],
    };
    //Defines the details that will be in the weekly graph
    const weekly_graph = {
      labels: [1, 2, 3, 4, 5, 6, 7], //X values of the graph, days of the week in this case
      datasets: [
        {
          label: user.username,
          backgroundColor: "rgb(6, 132, 164)",
          borderColor: "rgb(6, 132, 164)",
          data: [0, 5, 13, 16, 20, 25, 15], // User Data for daily graph
          lineTension: 0.5,
        },
        {
          label: "Average",
          backgroundColor: "rgb(100, 204, 242)",
          borderColor: "rgb(51, 204, 242)",
          data: [0, 4, 6, 7, 3, 16, 10], // General Data for weekly graph
          lineTension: 0.5,
        },
      ],
    };
    // Monthly grpah values
    const monthly_graph = {
      labels: [1, 5, 10, 15, 20, 25, 30], //monthly graph x values
      datasets: [
        {
          label: user.username,
          backgroundColor: "rgb(6, 132, 164)",
          borderColor: "rgb(6, 132, 164)",
          data: [0, 5, 10, 9, 17, 28, 20], //User Data for monthly graph
          lineTension: 0.5,
        },
        {
          label: "Average",
          backgroundColor: "rgb(51, 204, 242)",
          borderColor: "rgb(51, 204, 242)",
          data: [0, 4, 3, 9, 4, 15, 13], //General Data for monthly graph
          lineTension: 0.5,
        },
      ],
    };

    return (
      /*
      Breaks the screen into three separate columns
      Each column will be filled with a graph going from left to right
      being the daily, weekly, and monthly user graph,
      */
      <div className="container">
        <h1>
          Welcome back <strong>{user.username}</strong>.
        </h1>
        <h3>Let's get you caught up</h3>

        <div className = "row">
          <div className = "col-4">
            <Line data={daily_graph}></Line>
          </div>
          <div className = "col-4">
            <Line data={weekly_graph}></Line>
          </div>
          <div className = "col-4">
            <Line data={monthly_graph}></Line>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
