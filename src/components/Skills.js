import React, {Component} from 'react';

class Skills extends Component {

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
                nameOfTech: 'Webpack',
                class: 'webpack'
            },
        ]
    };


    render () {

        const {
            skill,
            index
        } = this.props;
        console.log(`${skill} rendered. Index is ${index}`);

        return (
            <section>
                <h2>Skills</h2>
                <span>I love developing and learning about the latest technologies. Here are the technologies I use most.</span>
                <div className="skills">
                    {this.state.skillSet.map( (skill) => 
                        <div className={`skill-${skill.class} skill`}>
                            <span>{skill.nameOfTech}</span>
                        </div>
                        
                    )}
                </div>
            </section>
        );
    }
}

export default Skills;