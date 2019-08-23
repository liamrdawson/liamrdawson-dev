import React from 'react';

function Header() {
    return (
        <header>
            <div className="header-elements-container">
                <a href="#"><span>Liam R. Dawson</span></a>
                <span className="menu">Menu</span>
                <nav>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;