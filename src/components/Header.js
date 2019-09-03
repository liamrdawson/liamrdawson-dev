import React, { Component} from 'react';
import MediaQuery from 'react-responsive';


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
                            <button onClick={this.props.clickAbout}>About</button>
                            <button>Projects</button>
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
                </ MediaQuery>
                <MediaQuery query="(min-width: 640px)">
                    <div className="header-elements-container">
                    <button onClick={this.props.clickHome}><span>Liam R. Dawson</span></button>
                        <nav >
                            <button onClick={this.props.clickAbout}>About</button>
                            <button >Projects</button>
                            <button onClick={this.props.clickContact}>Contact</button>
                        </nav> 
                    </div>
                </MediaQuery>
            </header>


        );
    }
    
}

export default Header;