import React, { Component } from 'react';

class Projects extends Component {

  render() {
    return (
      <section className="projects-container">
        <div className="project-section-title">Projects</div>
        <div>
          <div className="project">
            <div className="project-title-container">
              <div>
                <div className="project-title">Future Gate Soft CO</div>
              </div>
              <div className="project_date">
                Jan 2013 - Jan 2015
          </div>
            </div>
            <p className="project-description"> Future Gate Soft is a company located in Doha Qatar and between 2011-2015 I was working with their Damascus branch in a collaboration with the main head office in Doha, where I was responsible for administration and configuring Domain Controller, DNS, DHCP, File Server, E-mail server, Microsoft Forefront Threat Management Gateway Server, Hyper-V, and Microsoft team foundation server 2010.
         </p>
          </div>
        </div>
      </section>

    )
  }
}
export default Projects;
