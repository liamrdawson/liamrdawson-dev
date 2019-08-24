import React, {Component} from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SvgHeader from './icons/Header';
import './scss/App.scss';


class App extends Component {

    render() {
        return (
            <div className="container">
                <SvgHeader className="svg-header"/>
                <Header/>
                <Introduction />

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
