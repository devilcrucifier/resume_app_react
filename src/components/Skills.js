import React, { Component } from 'react';
import data from '../resume.json'

class Skills extends Component {
  render() {
      return (
        <div>
          <div className="sectionTitle">
            <h1>Key Skills</h1>
          </div>

          <div className="sectionContent">
            <ul className="keySkills">
              <li>A Key Skill</li>
              <li>A Key Skill</li>
              <li>A Key Skill</li>
              <li>A Key Skill</li>
              <li>A Key Skill</li>
              <li>A Key Skill</li>
              <li>A Key Skill</li>
              <li>A Key Skill</li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      );
    }
}

export default Skills;
