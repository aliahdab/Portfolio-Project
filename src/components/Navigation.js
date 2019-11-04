import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {

  return (
    <div >
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar">
            <ul className="navigation-container">

              <Link to="/Home" >
                <li>Home</li>
              </Link>
              <Link to="/Admin" >
                <li>About</li>
              </Link>
              <Link to="/Skills" >
                <li>Skills</li>
              </Link>
              <Link to="/Experience" >
                <li>Experience</li>
              </Link>
              <Link to="/Projects" >
                <li>Projects</li>
              </Link>

            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navigation;
