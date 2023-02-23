import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileGlance from "../profile/ProfileGlance";
import HomepageNotificationMessage from "./HomepageNotificationMessage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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
        <div className="row">
          <div className="box shadow-sm rounded bg-light mb-3 border border-gray">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data.map((data, index) => (
                <SwiperSlide>
                  <HomepageNotificationMessage
                    notificationTitle={data}
                    notificationMessage={data}
                    date={data}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
