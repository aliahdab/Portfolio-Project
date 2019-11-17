
import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <section className="experience-container">
        <div className="experience-section-title">Experience</div>
        <div>
          <div className="job">
            <div className="job-title-container">
              <div>
                <div className="job-company">Future Gate Soft CO</div>
                <div className="job-title">System Administrator</div>
              </div>
              <div className="job_year">
                Jan 2013 - Jan 2015
            </div>
            </div>
            <p className="job-p"> Future Gate Soft is a company located in Doha Qatar and between 2011-2015 I was working with their Damascus branch in a collaboration with the main head office in Doha, where I was responsible for administration and configuring Domain Controller, DNS, DHCP, File Server, E-mail server, Microsoft Forefront Threat Management Gateway Server, Hyper-V, and Microsoft team foundation server 2010.
					 </p>
          </div>

          <div className="job">
            <div className="job-title-container">
              <div>
                <div className="job-company">SyriaComm (Click)</div>
                <div className="job-title">Network Engineer</div>
              </div>
              <div className="job_year">
                Jan 2008 - Jan 2013
            </div>
            </div>
            <p className="job-p"> I joined Click that was based in Damascus Syria and was responsible of Establishing and developing full IT projects, networking and infrastructure from initial conception to completion, as well of planning LAN and WAN networking projects, installing and configuring network infrastructure.
										</p><ul>
              <li> Build and develop Oracle 10g Form and Reports.</li>
              <li> Windows Server 2008-2012 (Domain controller, DNS, DHCP).</li>
              <li> Microsoft Forefront Threat Management Gateway 2010.</li>
              <li> Microsoft Mail System (Exchange server (2003-2007-2010)).</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}



export default Home;




