/**
 * Delta Projct
 * 
 * Authors:
 * Lexington Whalen (@lxaw)
 * Carter Marlowe (@Cmarlowe123)
 * Vince Kolb-Lugo (@vancevince)
 * Blake Seekings (@j-blake-s)
 * Naveen Chithan (@nchithan)
 * 
 * AboutUsCarousel.js
 * 
 * A simple carousel component to display actions of the Delta app in use.
 */
import Reach, { Component } from 'react'

export class AboutUsCarousel extends Component {
  render() {
    return (
      <div id='carouselExampleSlidesOnly' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUsCarousel