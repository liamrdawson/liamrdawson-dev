import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Introduction from './components/Introduction';
import Skill from './components/Skill';
import './App.css';


class App extends Component {

    state = {
        skillSet: [
            {   
                nameOfTech: 'React',
                    class: 'react'
            },
            {   
                nameOfTech: 'JavaScript ES6',
                    class: 'javascript'
            },
            { 
                nameOfTech: 'HTML5 & CSS3',
                    class: 'html-css'
            },
            { 
                nameOfTech: 'SASS / SCSS',
                    class: 'sass'
            },
            { 
                nameOfTech: 'Babel',
                class: 'babel'
            },
            { 
                nameOfTech: 'Bootstrap 3 & 4',
                class: 'bootstrap'
            },
            { 
                nameOfTech: 'Git',
                class: 'git'
            },
            { 
                nameOfTech: 'Node',
                class: 'node'
            },
            { 
                nameOfTech: 'Express',
                class: 'express'
            },
            { 
                nameOfTech: 'MongoDB',
                class: 'mongodb'
            },
            { 
                nameOfTech: 'Webpack',
                class: 'webpack'
            },
        ]
    };

    render() {
        return (
            <div className="container">
                <Header />
                <Introduction />
                <Body />

                {/*SKILLS LIST*/}
                <section className="skills">
                    {this.state.skillSet.map( (skill, index) => 
                        <Skill
                            skill={skill.class}
                            index={index}
                        />
                    )}
                </section>

            </div>
        );       
    }

}

export default App;
