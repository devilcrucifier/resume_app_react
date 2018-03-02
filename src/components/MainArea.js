import React, { Component } from 'react';
import Intro from './Intro.js'
import WorkExperience from './WorkExperience.js'
import Skills from './Skills.js'
import Education from './Education.js'

class MainArea extends Component {
  render() {
      return (
        <div id="mainArea" className="quickFade delayFive">
          <Intro />
      		<WorkExperience />
      		<Skills />
          <Education />
      	</div>
      );
    }
}

export default MainArea;
