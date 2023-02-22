import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileGlance from "../profile/ProfileGlance";
import HomepageNotificationMessage from "./HomepageNotificationMessage";
import "./dashboard.css";

export class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div className="container">
        <h1>
          Welcome back <strong>{user.username}</strong>.
        </h1>
        <h3>Here's what you've missed.</h3>
        <div class="row">
          <div class="box shadow-sm rounded bg-gray mb-3 border border-gray">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <HomepageNotificationMessage />
                </div>
                {data.map((data) => (
                  <div class="carousel-item">
                    <HomepageNotificationMessage />
                  </div>
                ))}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
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
