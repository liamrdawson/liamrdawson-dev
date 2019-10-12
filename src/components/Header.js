import React, { Component} from 'react';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom';



class Header extends Component {

    state = {
        showMenuIcon: true
    }

    toggleMenu = () => {
        this.setState({
            showMenuIcon: !this.state.showMenuIcon
        })
    }

    render( ) {
        console.log(this.props);
        return (
            <header>

                    {/* <span className="menu" onClick={this.toggleMenu}>Menu</span> */}

                <MediaQuery query="(max-width: 639px)">
                {this.state.showMenuIcon === false &&
                        (<div className="menu-active">
                            <nav >
                                <Link to="/about">
                                    <li >About</li>
                                </Link>
                                <Link to="/projects">
                                    <li >Projects</li>
                                </Link>
                                <Link to="/contact">
                                    <li >Contact</li>
                                </Link>
                                <Link to="/">
                                <li onClick={this.toggleMenu}>Close</li>
                                </Link>
                            </nav> 
                        </div>)
                    }

                    {this.state.showMenuIcon === true && 
                        (<div className="header-elements-container">
                            <Link to="/">
                                <li><span>Liam R. Dawson</span></li>
                            </Link>
                            <li  onClick={this.toggleMenu}>Menu</li>
                            
                        </div>)
                    }
                </ MediaQuery>
                <MediaQuery query="(min-width: 640px)">
                    <div className="header-elements-container">
                            <Link to="/">
                                <li><span>Liam R. Dawson</span></li>
                            </Link>
                        <nav >
                            <Link to="/about">
                                <li >About</li>
                            </Link>
                            <Link to="/projects">
                                <li >Projects</li>
                            </Link>
                            <Link to="/contact">
                                <li >Contact</li>
                            </Link>
                        </nav> 
                    </div>
                </MediaQuery>
            </header>


        );
    }
    
}

export default Header;