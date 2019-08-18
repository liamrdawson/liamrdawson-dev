import React, {Component} from 'react';

class Projects extends Component {

    state = {
        projects: [
            {
                name: 'LiamRDawson Photography',
                techUsed: ['JavaScript ES6', 'SASS / SCSS'],
                description: 'Portfolio website to showcase work in photography'
            },
            {
                name: 'Riff Login UI',
                techUsed: ['HTML', 'SASS / SCSS', 'JavaScript ES6'],
                description: 'Application prototype interface'
            },
            {
                name: 'To Do List',
                techUsed: ['Bootstrap', 'JavaScript ES6'],
                description: 'Simple to-do list application'
            },
            {
                name: 'Command Line Weather App',
                techUsed: ['Node', 'Express'],
                description: 'A command line application that returns current weather from user input location'
            },
            {
                name: 'Board Game Score Counter',
                techUsed: ['React', 'Webpack', 'Babel'],
                description: 'React application built to help friends keep track of leaderbord on game nights'
            },
        ]
    };

    render () {
        return (
            <section className={`Projects`}>
                <h2>
                    Projects
                </h2>
                <span>
                    I work on personal projects and freelance work in my free time. Here are some that I've developed/created.
                </span>
                <div className="project-container">
                    {this.state.projects.map( (project) => 
                        <div className="project">
                            <h3>{project.name}</h3>
                            <span>Built with: {project.techUsed.join(', ')}</span>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Projects;