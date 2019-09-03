import React, { Component } from 'react';

class About extends Component {

    state = {
       jobs:  [
           {
            jobTitle: "IT Service Analyst",
            jobEmployer: "University of Sussex",
            jobLocation: "Brighton, East Sussex",
            jobDuties: [
                "With an analytical approach and excellent interpersonal communication skills, I provide technical support to clients covering a range of technical issues either in person, over the phone or via email.",
                "In order to provide an in depth understanding of new and changing complex issues, I'm required to keep up to date with, and learn, new technologies while on the job.",
                "Resolving hardware, software and connectivity issues on Windows, Apple and Android devices, tablets and computers.",
                "Use web based technologies to provide support to users for higher education online learning platforms.",
                "Liaise between teams and departments in the University to arrange and manage support for users facing complex problems involving multiple technical factors.",
                "Writing and updating support documentation for University systems and learning platforms."
            ]
            },

        ]
    };

    render () {
        return (
            <section className="about">
                <section className="about-elements-container">
                    <h1>Hi, I'm Liam R. Dawson, a front-end developer living in Brighton.</h1>
                    <p className="about-text">
                        I also do freelance web design for projects which I find interesting, challenging or exciting and am often busy working on my own own side projects to develop my own skillset or to simply solve problems.
                    </p>
                    <p className="about-text">
                        I primarily work in React and have experience using Webpack, ES6, Babel and Node, among other technologies. I’m a self starter, enjoy working in teams and love jumping into the latest and greatest technologies.
                    </p>
                    <p className="about-text">
                        I also enjoy <a href="https://liamrdawson.com">street photography</a>, and you can sometimes find me wandering around Brighton with my camera looking for a nice shot to take.
                    </p>
                    <p className="about-text">
                        Please contact me if you would like to work on a project together, or just want to chat about dev stuff.
                    </p>
                </section>
                <section className="resume">
                <h2>Resume</h2>
                    <div className="job">
                        <h4 className="job-title">
                            IT Service Analyst
                        </h4>
                        <span className="job-employer">
                            University of Sussex
                        </span>
                        <span className="job-location">
                            Brighton, Sussex
                        </span>
                        <span className="job-time">
                            10/2016 to present
                        </span>
                        <ul>
                            <li>
                            With an analytical approach and excellent interpersonal communication skills, I provide technical support to clients covering a range of technical issues either in person, over the phone or via email.
                            </li>
                            <li>
                            In order to provide an in depth understanding of new and changing complex issues, I'm required to keep up to date with, and learn, new technologies while on the job.
                            </li>
                            <li>
                            Resolving hardware, software and connectivity issues on Windows, Apple and Android devices, tablets and computers.
                            </li>
                            <li>
                            Use web based technologies to provide support to users for higher education online learning platforms.
                            </li>
                            <li>
                            Liaise between teams and departments in the University to arrange and manage support for users facing complex problems involving multiple technical factors.
                            </li>
                            <li>
                            Writing and updating support documentation for University systems and learning platforms.
                            </li>
                        </ul>
                    </div>

                    <div className="job">
                        <h4 className="job-title">
                            IT Support Technician
                        </h4>
                        <span className="job-employer">
                            Learning Possibilities Ltd.
                        </span>
                        <span className="job-location">
                            London
                        </span>
                        <span className="job-time">
                            03/2015 to 10/2016
                        </span>
                        <ul>
                            <li>
                            Develop and review support documentation for internal/external users (knowledge base articles, case studies,features and news articles etc).
                            </li>
                            <li>
                            Communicating effectively and professionally both internally and with clients from varied professional levels (Ranging from Central Government officials to Teaching staff to potential new partners and clients at international marketing events).
                            </li>
                            <li>
                            To encourage the use of technology in education and support schools in adopting learning technologies in a way that complements and supports their individual working culture and ethos.
                            </li>
                            <li>
                            To assist with website maintenance, content editing and general SharePoint site development.
                            </li>
                            <li>
                            Provide bilingual technical and educational support across schools in Wales, dealing with individuals from a vast range of backgrounds and levels of technical competency.
                            </li>
                        </ul>
                    </div>

                </section>
            </section>
        );
    }
    
}

export default About;