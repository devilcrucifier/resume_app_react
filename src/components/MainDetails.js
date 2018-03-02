import React, { Component } from 'react';
import data from '../resume.json';

class MainDetails extends Component {
  render() {
      return (
        <div className="mainDetails">
          {/* <div id="headshot" className="quickFade">
            <img src="headshot.jpg" alt="Alan Smith" />
          </div> */}

          <div id="name">
            <h1 className="quickFade delayTwo">{data.basics.name}</h1>
            {/*<h2 className="quickFade delayThree">UI developer</h2>
            */}
          </div>

          <div id="contactDetails" className="quickFade delayFour">
            <ul>
              <li><a href={`mailto:${data.basics.email}`} target="_blank">Email</a></li>
              <li><a href={data.basics.github} target="_blank">GitHub</a></li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      );
    }
}

export default MainDetails;
