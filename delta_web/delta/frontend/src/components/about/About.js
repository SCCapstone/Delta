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
          The Delta application is the simple platform for researchers to share data sets,
          communicate wiht fellow scholars, and rate and provide valuable feedback.

          Register as an individual or an organization and get started immediatly. Delta
          is designed to make sharing easy so that researchers can focus on what really
          matters: pushing innovation and knowlege further.
        </p>
      </div>
      <div>
        <h1>Why use Delta?</h1>
        <p>
          Get instant access to raw data. The data sets uploaded on Delta can be used to train
          artificial intelligence models for a variety of applications. The sets are uploaded
          in widely used formats, making or ML program to ingest.
        </p>
      </div>
      <div>
        <h1>The Team</h1>
        <p>
          Delta is brought to you by a motely crew of aspiring software engineers, researchers,
          entrepreneurs, and hopeless romantics. The leader <a href="https://www.linkedin.com/in/lxaw/">Lexington Whalen</a>,
          a.k.a. the Full Stack; the Front-Endgamers <a href="https://www.linkedin.com/in/cartermarlowe/">Carter Marlowe</a>,
          <a href="https://www.linkedin.com/in/naveenchithan/"> Naveen Chithan</a>,
          and <a href="https://www.linkedin.com/in/vincent-kolb-lugo-944222175/"> Vince Kolb-Lugo</a>; and the Backend Bully
          <a href="https://www.linkedin.com/in/blake-seekings-8051631b4/"> Blake Seekings</a>.
        </p>
      </div>
      <div>
        <h1>User Stories</h1>
        <div>
          <h5>Register for the first time</h5>
          <p>REGISTER PAGE IMAGE HERE</p>
        </div>
        <div>
          <h5>Upload a file</h5>
          <p>UPLOAD PAGE IMAGE HERE</p>
        </div>
        <div>
          <h5>Dowload a file</h5>
          <p>DOWNLOAD PAGE IMAGE HERE</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(About);
