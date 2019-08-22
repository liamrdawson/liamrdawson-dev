import React, {Component} from 'react';

// Consider breaking this down into:
//     Front end 
//     Back end 
//     Tooling
//     Software

class Skills extends Component {

    state = {
        skillSet: [
            //front end
            {   
                nameOfTech: 'React',
                    class: 'react',
                    area: 'front end',
            },
            {   
                nameOfTech: 'JavaScript',
                    class: 'javascript',
                    area: 'front end'
            },
            { 
                nameOfTech: 'SCSS',
                    class: 'sass',
                    area: 'front end'
            },
            { 
                nameOfTech: 'CSS3',
                    class: 'css3',
                    area: 'front end'
            },
            { 
                nameOfTech: 'HTML5',
                    class: 'html5',
                    area: 'front end'
            },
            { 
                nameOfTech: 'Bootstrap',
                class: 'bootstrap',
                area: 'front end'
            },
            { 
                nameOfTech: 'Webpack',
                class: 'webpack',
                area: 'tooling'
            },
            { 
                nameOfTech: 'Babel',
                class: 'babel',
                area: 'tooling'
            },
            { 
                nameOfTech: 'Git',
                class: 'git',
                area: 'tooling'
            },
            { 
                nameOfTech: 'Node',
                class: 'node',
                area: 'back end'
            },
            { 
                nameOfTech: 'Express',
                class: 'express',
                area: 'back end'
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
            <section className="skills-section">
                <h2>Skills</h2>
                <span>I love developing and learning about the latest technologies. Here are the technologies I use most.</span>
                <h4>Front End</h4>
                <div className="skills front-end">
                    {this.state.skillSet.filter(skill => skill.area === 'front end').map( (skill) => 
                        <div className={`skill-${skill.class} skill`}>
                            <span>{skill.nameOfTech}</span>
                        </div>
                        
                    )}
                </div>
                <h4>Back End</h4>
                <div className="skills back-end">
                    {this.state.skillSet.filter(skill => skill.area === 'back end').map( (skill) => 
                        <div className={`skill-${skill.class} skill`}>
                            <span>{skill.nameOfTech}</span>
                        </div>
                        
                    )}
                </div>
                <h4>Tooling</h4>
                <div className="skills tooling">
                    {this.state.skillSet.filter(skill => skill.area === 'tooling').map( (skill) => 
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