/**
 * Vince Kolb-Lugo
 * Copyright 2022
 * 
 * A simple carousel for the Login and Registration pages.
 * Displays a variety of freely licensed images depicting smiling, warm, inviting people,
 * cozy locations, and active behaviors.
 */

import React, { Component } from "react";

export class ImageCarousel extends Component {
  render() {
    return (
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/media/group_running.jpg"
              className="d-block w-100"
              alt="Group running outside"
              width='400'
              height='400'
            />
          </div>
          <div className="carousel-item">
            <img
              src="/media/closeup_african_american_woman.jpg"
              className="d-block w-100"
              alt="Close up of smiling African American woman"
              width='400'
              height='400'
            />
          </div>
          <div className="carousel-item">
            <img
              src="/media/closeup_young_asian_woman.jpeg"
              className="d-block w-100"
              alt="smiling asian woman"
              width='400'
              height='400'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ImageCarousel