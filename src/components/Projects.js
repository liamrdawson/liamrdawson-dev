import React from 'react';

const Projects = () => {

       const projects = [
            {
                name: 'Board Game Scoreboard App',
                class: 'scoreboard',
                techUsed: ['React', 'JavaScript ES6'],
                description: 'React application built to help friends keep track of leaderbord on game nights.',
                github:  'https://github.com/liamrdawson/Scoreboard-App',
            },
            {
                name: 'LiamRDawson.com',
                class: 'photography',
                techUsed: ['JavaScript ES6', 'Webpack','SASS/SCSS'],
                description: 'Portfolio website to showcase work in photography.',
                github: 'https://github.com/liamrdawson/Liam-Dawson-Photography',
            },
            {
                name: 'Command Line Weather App',
                class: 'weather-app',
                techUsed: ['Node', 'Express'],
                description: 'A command line application that returns current weather from user input location.',
                github: 'https://github.com/liamrdawson/node-exercises/blob/master/Weather%20App/app.js'
            },
            {
                name: 'Riff Login UI',
                class: 'riff',
                techUsed: ['HTML', 'SASS/SCSS', 'JavaScript ES6'],
                description: 'Application prototype interface.',
                github: 'https://github.com/liamrdawson/Riff-Login-UI'
            },
            {
                name: 'To Do List',
                class: 'to-do',
                techUsed: ['Bootstrap', 'JavaScript ES6'],
                description: 'Simple to-do list application.',
                github: 'https://github.com/liamrdawson/to-do-app'
            }
        ];


        return (
            <section id="projects" className={`projects projects-elements-container`}>
                <h2>
                    Projects
                </h2>
                <span>
                    I work on personal projects and freelance work in my free time. Here are some that I've developed/created.
                </span>
                <div className="project-grid">

                    <div className="project-container">
                        {projects.map( (project) => 
                            <a href={project.github} key={project.class}>
                                <div className={`project project-${project.class}`}>
                                    <div className="project-bg">
                                        <h3>{project.name}</h3>
                                        <span>Built with: {project.techUsed.join(', ')}</span>
                                    </div>
                                </div>
                            </a>
                        )}
                    </div>

                </div>
                
            </section>
        );

}

export default Projects;