import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//  COMPONENTS
import Main from './components/Main';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

//  ICONS & IMAGES
import SvgHeader from './icons/Header';

//  STYLES
import './scss/App.scss';


class App extends Component {
    render() {
        return (
                <div className="container">
                <Router>
                    <SvgHeader className="svg-header"/>
                        <Header /> 
                            <Switch>
                            <Route path="/" exact component={Main} />
                            <Route path="/about" component={About} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/contact" component={Contact} />
                            </Switch>
                        <Footer className="footer-bar"/>
                </Router>
                </div>
        );       
    }
}

export default App;
