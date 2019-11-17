import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { auth, provider } from './Firebase';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null,
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  };

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const navWordsAdmin = document.getElementsByClassName('nav-words-admin');
        navWordsAdmin[0].style.display = 'block';
        const user = result.user;
        this.setState({
          user
        });;
      });
  }

  logout() {
    auth.signOut()
      .then(() => {
        const navWordsAdmin = document.getElementsByClassName('nav-words-admin');
        navWordsAdmin[0].style.display = 'none';
        this.setState({
          user: null
        });
      });
  }

  render() {
    return (
      <div>
        <header className="header_area" >
          <div className="main_menu">
            <nav className="navbar">
              <ul className="navigation-container">
                <Link to="/Home" >
                  <li className='nav-words'>Home</li>
                </Link>
                <Link to="/Skills" >
                  <li className='nav-words'>Skills</li>
                </Link>
                <Link to="/Experience" >
                  <li className='nav-words'>Experience</li>
                </Link>
                <Link to="/Projects" >
                  <li className='nav-words'>Projects</li>
                </Link>
                <Link to="/Admin" >
                  <li className='nav-words-admin'>Admin</li>
                </Link>
                <div className="log-section" >
                  {this.state.user ?
                    <button onClick={this.logout} className="log-button">Sign Out</button>
                    :
                    <button onClick={this.login} className="log-button">Sign In</button>
                  }
                </div>
              </ul>
            </nav>
          </div>
        </header>
      </div >
    )
  }
}
export default Navigation;
