import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <Introduction />
                <Body />

                {/*SKILLS LIST*/}
                <Skills/>
                <Projects/>

            </div>
        );       
    }

}

export default App;
