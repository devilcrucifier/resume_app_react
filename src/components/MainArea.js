import React, { Component } from 'react';
import Intro from './Intro.js'
import WorkExperience from './WorkExperience.js'
import Skills from './Skills.js'
import Education from './Education.js'
import data from '../resume.json'

class MainArea extends Component {
  render() {
      return (
        <div id="mainArea" className="quickFade delayFive">
          <Intro dataProp = {data} />
      		<WorkExperience dataProp = {data} />
      		<Skills dataProp = {data} />
          <Education dataProp = {data} />
      	</div>
      );
    }
}

export default MainArea;
