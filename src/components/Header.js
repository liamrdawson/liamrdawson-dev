import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom';

const Header = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(true)
    const toggleMenu = () => setMenuIsVisible(!menuIsVisible)
    return (
        <header>
            <MediaQuery query="(max-width: 639px)">
            {menuIsVisible === false &&
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
                        <li onClick={toggleMenu}>Close</li>
                        </Link>
                    </nav> 
                </div>)
            }
            {menuIsVisible === true && 
                (<div className="header-elements-container">
                    <Link to="/">
                        <li><span>Liam R. Dawson</span></li>
                    </Link>
                    <li  onClick={toggleMenu}>Menu</li>
                    
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

export default Header;