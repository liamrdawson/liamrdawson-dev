import React, { Component} from 'react';

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

                    {this.state.showMenuIcon === false &&
                        (<div className="menu-active">
                            <nav >
                            <a href="#">About</a>
                            <a href="#projects">Projects</a>
                            <button onClick={this.props.clickContact}>Contact</button>
                            <button onClick={this.toggleMenu}>Close</button>
                        </nav> 
                        </div>)
                    }

                    {this.state.showMenuIcon === true && 
                        (<div className="header-elements-container">
                            <button onClick={this.props.clickHome}><span>Liam R. Dawson</span></button>
                            <button  onClick={this.toggleMenu}>Menu</button>
                            
                        </div>)
                    }

            </header>
        );
    }
    
}

export default Header;