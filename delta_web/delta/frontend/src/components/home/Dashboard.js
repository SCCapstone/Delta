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
        <h3>Here's what you've missed.</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
