/**
 * Delta Project
 *
 * Authors:
 * Lexington Whalen (@lxaw)
 * Carter Marlowe (@Cmarlowe123)
 * Vince Kolb-Lugo (@vancevince)
 * Blake Seekings (@j-blake-s)
 * Naveen Chithan (@nchithan)
 *
 * About.js
 *
 * Defines the home page that a user is brought to after logging in.
 * Contains the notification scrollers that display any notifications that a user has built up.
 */
import React from "react";
import { connect } from "react-redux";

const About = (props) => {

  return (
    <div className="container">
      <div>
        <h1>About Delta</h1>
        <p>
          ENTER TEXT HERE
        </p>
      </div>
      <div>
        <h1>Why use Delta?</h1>
        <p>ENTER TEXT HERE</p>
      </div>
      <div>
        <h1>User Stories</h1>
        <div>
          <p>PUT IMAGES AND USERS HERE</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(About);
