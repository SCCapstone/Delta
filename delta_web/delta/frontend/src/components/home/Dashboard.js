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
    const data = [
      {
        id: 1,
        title: "New post in your organization",
        description:
          "A new post has been created in your organization, Valafar Lab, go to the organization page to see what's there! The information containined in these notifications is manually input for the sake of showing the notification block under use. Later, notifications will actually be generated and displayed by the app",
        date: "2-24-23",
      },
      {
        id: 2,
        title: "A new update has come to the website",
        description:
          "There's been a new update that allows users to send each other messages now, find people in your organization to try this out with!",
        date: "2-20-23",
      },
      {
        id: 3,
        title: "You have unread messages",
        description:
          "You have 15 unread messages, make sure you go and check these so that you don't fall behind",
        date: "1-5-23",
      },
    ];
    return (
      <div className="container">
        <h1>
          Welcome back <strong>{user.username}</strong>.
        </h1>
        <h3>Here's what you've missed.</h3>

        <div
          className="box shadow-sm rounded bg-light mb-3 border border-gray"
          style={{ height: "40vh" }}
        >
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {data.map((data, index) => (
              <SwiperSlide>
                <HomepageNotificationMessage
                  notificationTitle={data.title}
                  notificationMessage={data.description}
                  date={data.date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
