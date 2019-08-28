import React from 'react';

function About() {
    return (
        <section className="about">
            <div className="about-elements-container">
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
            </div>
        </section>
    );
}

export default About;