import React, {Component} from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import SvgHeader from './icons/Header';
import './scss/App.scss';


class App extends Component {

    state = {
        showIntro: false,
        showContact: false,
        showAbout:false,
        on: false
    }

    // change the state based on target 

    clickHome = () => {
        this.setState({
            showIntro: true,
            showAbout: false,
            showContact: false
        })
    }


    // refactor into single function

    clickContact = () => {
        this.setState({
                showIntro: false,
                showAbout: false,
                showContact: !this.state.showContact
            }) 
    }

    clickAbout = () => {
        this.setState({
                showIntro: false,
                showContact: false,
                showAbout: !this.state.showAbout
            }) 
    }

    render() {
        return (
            <div className="container">
            <SvgHeader className="svg-header"/>
                <Header 
                    clickAbout={this.clickAbout}
                    showAbout={this.state.showAbout}
                    clickContact={this.clickContact}
                    showContact={this.state.showContact}
                    clickHome={this.clickHome}
                /> 
                {   this.state.showContact ? 
                    <Contact className="fade"/> : this.state.showAbout ? 
                    <About className="fade"/> : 
                    <Main/>
                }                
                <Footer className="footer-bar"/>
            </div>
        );       
    }

}

export default App;
