import React, {Component} from 'react';

class Projects extends Component {

    state = {
        projects: [
            {
                name: 'Board Game Scoreboard App',
                techUsed: ['React', 'Webpack', 'Babel'],
                description: 'React application built to help friends keep track of leaderbord on game nights.',
                github:  'https://github.com/liamrdawson/Scoreboard-App'
            },
            {
                name: 'Portfolio Website',
                techUsed: ['React', 'Webpack', 'Babel', 'SASS/SCSS'],
                description: 'React website built to demonstrate skills and abilities in front end development.',
                github:  'https://github.com/liamrdawson/liamrdawson-frontend-dev'
            },
            {
                name: 'LiamRDawson.com',
                techUsed: ['JavaScript ES6', 'SASS/SCSS'],
                description: 'Portfolio website to showcase work in photography.',
                github: 'https://github.com/liamrdawson/Liam-Dawson-Photography'
            },
            {
                name: 'Command Line Weather App',
                techUsed: ['Node', 'Express'],
                description: 'A command line application that returns current weather from user input location.',
                github: 'https://github.com/liamrdawson/node-exercises/blob/master/Weather%20App/app.js'
            },
            {
                name: 'Riff Login UI',
                techUsed: ['HTML', 'SASS/SCSS', 'JavaScript ES6'],
                description: 'Application prototype interface.',
                github: 'https://github.com/liamrdawson/Riff-Login-UI'
            },
            {
                name: 'To Do List',
                techUsed: ['Bootstrap', 'JavaScript ES6'],
                description: 'Simple to-do list application.',
                github: 'https://github.com/liamrdawson/to-do-app'
            }
        ]
    };

    render () {
        return (
            <section className={`projects`}>
                <h2>
                    Projects
                </h2>
                <span>
                    I work on personal projects and freelance work in my free time. Here are some that I've developed/created.
                </span>
                <div className="project-container">
                    {this.state.projects.map( (project) => 
                        <a href={project.github}>
                            <div className="project">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <span>Built with: {project.techUsed.join(', ')}</span>
                            </div>
                        </a>
                    )}
                </div>
            </section>
        );
    }
}

export default Projects;