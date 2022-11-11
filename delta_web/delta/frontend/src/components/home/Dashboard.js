import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import Form from "./Form";
import DataAccel from "./DataAccel";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileGlance from "../profile/ProfileGlance";

export class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const daily_graph = {
      labels: [0, 2, 4, 6, 8, 10, 12],
      datasets: [
        {
          label: user.username,
          backgroundColor: "rgb(6, 132, 164)",
          borderColor: "rgb(6, 132, 164)",
          data: [0, 10, 5, 2, 20, 30, 45],
          lineTension: 0.5,
        },
        {
          label: "Average",
          backgroundColor: "rgb(51, 204, 242)",
          borderColor: "rgb(51, 204, 242)",
          data: [0, 4, 6, 7, 3, 16, 10],
          lineTension: 0.5,
        },
      ],
    };

    const weekly_graph = {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
        {
          label: user.username,
          backgroundColor: "rgb(6, 132, 164)",
          borderColor: "rgb(6, 132, 164)",
          data: [0, 5, 13, 16, 20, 25, 15],
          lineTension: 0.5,
        },
        {
          label: "Average",
          backgroundColor: "rgb(51, 204, 242)",
          borderColor: "rgb(51, 204, 242)",
          data: [0, 4, 6, 7, 3, 16, 10],
          lineTension: 0.5,
        },
      ],
    };

    const monthly_graph = {
      labels: [1, 5, 10, 15, 20, 25, 30],
      datasets: [
        {
          label: user.username,
          backgroundColor: "rgb(6, 132, 164)",
          borderColor: "rgb(6, 132, 164)",
          data: [0, 5, 13, 16, 20, 25, 15],
          lineTension: 0.5,
        },
        {
          label: "Average",
          backgroundColor: "rgb(51, 204, 242)",
          borderColor: "rgb(51, 204, 242)",
          data: [0, 4, 6, 7, 3, 16, 10],
          lineTension: 0.5,
        },
      ],
    };

    return (
      <div>
        <h1>
          Welcome back <strong>{user.username}</strong>.
        </h1>
        <h3>Let's get you caught up</h3>

        <div class="container">
          <div class="pt-5">
            <div class="row align-items-center">
              <div class="col centered">
                <center>
                  <h2>Today</h2>
                </center>
                <div classname="graph1">
                  <Line data={daily_graph}></Line>
                </div>
              </div>
              <div class="col centered">
                <center>
                  <h2>This Week</h2>
                </center>
                <div classname="graph2">
                  <Line data={weekly_graph}></Line>
                </div>
              </div>
              <div class="col centered">
                <center>
                  <h2>This Month</h2>
                </center>
                <div classname="graph3">
                  <Line data={monthly_graph}></Line>
                </div>
              </div>
            </div>
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
