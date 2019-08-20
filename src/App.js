import React, {Component} from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './scss/App.scss';


class App extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <Introduction />

                {/*SKILLS LIST*/}
                <Skills/>

                {/*PROJECTS LIST*/}
                <Projects/>
                <Footer />
            </div>
        );       
    }

}

export default App;
