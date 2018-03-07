import React, { Component } from 'react';
import data from '../resume.json'

class WorkExperience extends Component {
  render() {
      return (
        <div>
          <div className="sectionTitle">
            <h1>Education</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2>Bharati Vidyapeeth College of Engineering</h2>
              <p className="subDetails">B.Tech</p>
              <p></p>
            </article>

            <article>
              <h2>College/University</h2>
              <p className="subDetails">Qualification</p>
              <p></p>
            </article>
          </div>
          <div className="clear"></div>
        </div>
      );
    }
}

export default WorkExperience;
