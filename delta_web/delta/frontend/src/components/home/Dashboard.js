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
          <div class="box shadow-sm rounded bg-gray mb-3">
            <div class="box-body p-0">
              <div class="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                <div class="font-weight-bold mr-3">
                  <div class="text-truncate">DAILY RUNDOWN: WEDNESDAY</div>
                  <div class="small">
                    Income tax sops on the cards, The bias in VC funding, and
                    other top news for you
                  </div>
                </div>
                <span class="ml-auto mb-auto">
                  <div class="btn-group">
                    <div class="dropdown-menu dropdown-menu-right"></div>
                  </div>
                  <br />
                  <div class="text-right text-muted pt-1">3d</div>
                </span>
              </div>
              <div class="p-3 d-flex align-items-center osahan-post-header">
                <div class="font-weight-bold mr-3">
                  <div class="mb-2">
                    We found a job at askbootstrap Ltd that you may be
                    interested in Vivamus imperdiet venenatis est...
                  </div>
                </div>
                <span class="ml-auto mb-auto">
                  <div class="btn-group">
                    <div class="dropdown-menu dropdown-menu-right"></div>
                  </div>
                  <br />
                  <div class="text-right text-muted pt-1">4d</div>
                </span>
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
