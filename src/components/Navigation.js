import React, { Component } from 'react';


class Navigation extends Component {

  render() {
    return (
      <div >
        <header className="header_area">
          <div className="main_menu">
            <nav className="navbar">
              <div className="navigation-container">
                <h2 className="navbar-brand logo_h"><img alt="" src="img/logo.png" /></h2>
                <div className="buttons-list">
                  <div className="buttons" onClick={this.props.scrollToHome}>Home</div>
                  <div className="buttons">About</div>
                  <div className="buttons" onClick={this.props.scrollToExperience}>Experience</div>
                  <div className="buttons" onClick={this.props.scrollToSkills}>Skills</div>
                  <div className="buttons" onClick={this.props.scrollToProjects}>Projects</div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

export default Navigation;
