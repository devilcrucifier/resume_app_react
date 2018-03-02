import React, { Component } from 'react';
import MainDetails from './MainDetails.js';
import data from '../resume.json'

class Intro extends Component {
  render() {
      return (
        <div>
          <article>
            <div className="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div className="sectionContent">
              <p></p>
            </div>
          </article>
          <div className="clear"></div>
        </div>
      );
    }
}

export default Intro;
