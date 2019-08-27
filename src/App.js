import React, {Component} from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SvgHeader from './icons/Header';
import './scss/App.scss';


class App extends Component {

    state = {
        showIntro: false,
        showContact: false,
        on: false
    }


    // change the state base on target 

    clickHome = () => {
        this.setState({
            showIntro: true,
            showContact: false
        })
    }

    clickContact = () => {
        this.setState({
                showIntro: false,
                showContact: !this.state.showContact
            }) 
    }



    render() {
        return (
            <div className="container">
                <SvgHeader className="svg-header"/>
                <Header 
                    showContact={this.state.showContact}
                    clickHome={this.clickHome}
                    clickContact={this.clickContact}
                />
                {this.state.showContact ? <Contact/> : <Introduction/>}
                <div className="sections-container">
                    {/*SKILLS LIST*/}
                    <Skills/>
                    {/*PROJECTS LIST*/}
                    <Projects/>
                </div>
                <Footer />
            </div>
        );       
    }

}

export default App;
