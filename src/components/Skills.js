import React, { Component } from 'react';
import Chart from './Chart.js';

class Skills extends Component {

  render() {
    return (
      <div >
        <section className="skills-container">
          <div className="skills-section-title">Skills</div>
          <div className="skills-continent">
            <ul>
              <li> Having skill sets in backend development with Java.</li>
              <li> Familiar with object-oriented design methodologies and design patterns.</li>
              <li> Having the skill to work as one of a team developing and distributing tasks using GIT and GitHub version control.</li>
              <li> Experience with SQL query generation and data modelling experience in Oracle, MYSQL and SQL Server.</li>
              <li> Competent in OS Administration, Windows Servers, Linux Redhat, VMware Virtualization.</li>

            </ul>
            <div>
              <Chart />
            </div>
          </div></section>
      </div>
    )
  }
}

export default Skills;
