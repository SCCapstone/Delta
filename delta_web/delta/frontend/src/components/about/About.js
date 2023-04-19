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
import AboutUsCarousel from "../carousel/AboutUsCarousel";

const About = (props) => {

  return (
    <div className="container">
      <div>
        <h1>About Delta</h1>
        <p>
          The <a href="https://github.com/SCCapstone/Delta">Delta</a> application is a platform for researchers to share data sets,
          communicate with fellow scholars, rate and provide valuable feedback, and more.

          Delta was created under the guidance of <a href="https://ifestos.cse.sc.edu/members.php">Dr. Valafar</a>, who noticed that while there are many of
          file sharing services, these are often not right for the needs of researchers. Most services only allow for transfer of data, not evaluation of it.
          With Delta, you can do both.

          Register as an individual or under an organization and get started immediatly. Delta
          is designed to make sharing files and connecting with others easy so that researchers can focus on what really
          matters: pushing innovation and knowlege further.
        </p>
      </div>
      <div>
        <h1>Why use Delta?</h1>
        <p>
          Delta fills the gap between modern file transfer services and what researchers need by taking ideas from social media platforms and integrating them into 
          the file transfer system. Whereas in the past researchers would only share files, now researchers can share their opinions on the files, allowing for more efficient evaulation of data in a research lab.
        </p>
      </div>
      <div>
        <h1>The Team</h1>
        <p>
          Delta was designed by a team of aspiring software engineers, researchers, and
          entrepreneurs. Their names and LinkedIn pages are as follows: <a href="https://www.linkedin.com/in/lxaw/">Lexington Whalen</a>,
          <a href="https://www.linkedin.com/in/cartermarlowe/">Carter Marlowe</a>,
          <a href="https://www.linkedin.com/in/naveenchithan/"> Naveen Chithan</a>,
          <a href="https://www.linkedin.com/in/vincent-kolb-lugo-944222175/">Vince Kolb-Lugo</a>
          <a href="https://www.linkedin.com/in/blake-seekings-8051631b4/"> Blake Seekings</a>.
        </p>
      </div>
      <div>
        <h1>Embedded Video Here</h1>
        HERE IS WHERE THE EMBEDDED VIDEO WILL GO. WILL NEED TO INSTALL
        REACT-PLAYER AND CREATE A PLAYER COMPONENT. FOR NOW HERE IS A TEMPORARY VIDEO TO ENJOY.
        <div className="row">
          <iframe src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
        </div>
      </div>
      <div>
        <h1>Delta in Action</h1>
        <p>The following is a carousel of images from the app.</p>
        <AboutUsCarousel />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(About);
