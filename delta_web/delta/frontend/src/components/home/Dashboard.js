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
    const data = {
      labels: [0, 2, 4, 6, 8, 10, 12],
      datasets: [
        {
          label: user.username,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    return (
      <div>
        <h1>
          Welcome back <strong>{user.username}</strong>.
        </h1>
        <h3>Today is a great day.</h3>
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              <div>Today</div>
              <div classname="graph1">
                <Line data={data}></Line>
              </div>
            </div>
            <div class="col">This Week</div>
            <div class="col">This Month</div>
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
