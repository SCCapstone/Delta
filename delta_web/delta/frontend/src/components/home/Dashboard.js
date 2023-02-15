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
        <div class="row">
          <div class="box shadow-sm rounded bg-gray mb-3 border border-gray">
            <div class="box-body p-1">
              <div class="p-3 d-flex align-items-center bg-light border-bottom">
                <div class="col mr-3">
                  <div class="text-truncate">Organization Update</div>
                  <div class="small">
                    Jacob Johnson has joined your organization "Valafar Lab"
                  </div>
                </div>
                <div class="text-right text-muted pt-1">3d</div>
              </div>
              <div class="p-3 d-flex align-items-center">
                <div class="col text-left mr-3">
                  <div class="text-truncate">Review on File</div>
                  <div class="small">
                    User test1234 has added a review to your file "upload544"
                  </div>
                </div>
                <div class="text-right text-muted pt-1">4d</div>
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
