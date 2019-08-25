import React, { Component} from 'react';

class Header extends Component {

    render( ) {
        console.log(this.props);
        return (
            <header>
                <div className="header-elements-container">
                    <a href="#"><span>Liam R. Dawson</span></a>
                    <span className="menu">Menu</span>
                    <nav>
                    <a href="#">About</a>
                    <a href="#projects">Projects</a>
                    <a onClick={this.props.changeInfo}>Contact</a>
                    {/* <a href="mailto:hello@liamrdawson.dev">hello@liamrdawson.dev </a> */}
                    </nav>
                </div>
            </header>
        );
    }
    
}

export default Header;