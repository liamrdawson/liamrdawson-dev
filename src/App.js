import React from 'react';
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


const App = () => {
    return (
        <div className="container">
        <Router key={99}>
            <SvgHeader className="svg-header"/>
                <Header /> 
                    <Switch key={100}>
                        <Route key={101} path="/" exact component={Main} />
                        <Route key={102} path="/about" component={About} />
                        <Route key={103} path="/projects" component={Projects} />
                        <Route key={104} path="/contact" component={Contact} />
                    </Switch>
                <Footer className="footer-bar"/>
        </Router>
        </div>
    );       
}

export default App;
