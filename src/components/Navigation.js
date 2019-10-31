import React, { Component } from 'react';


class Navigation extends Component {

    render() {
        return (
            <div >
                <header className="header_area">
                    <div className="main_menu">
                        <nav className="navbar">
                            <div className="container">
                                <h2 className="navbar-brand logo_h"><img alt="" src="img/logo.png" />Name</h2>
                                <div className="buttons-list">
                                    <div className="buttons">Home</div>
                                    <div className="buttons">About</div>
                                    <div className="buttons">Experience</div>
                                    <div className="buttons">Skills</div>
                                    <div className="buttons">Projects</div>
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
