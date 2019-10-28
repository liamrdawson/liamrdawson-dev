import React, {Component} from 'react';
import SvgReact from '../icons/React';
import SvgJs from '../icons/Js';
import SvgSass from '../icons/Sass';
import SvgCss3 from '../icons/Css3';
import SvgHtml5 from '../icons/Html5';
import SvgBootstrap from '../icons/Bootstrap';
import SvgNode from '../icons/Node';
import SvgBabel from '../icons/Babel';
import SvgGit from '../icons/Git';
import SvgWebpack from '../icons/Webpack';
import SvgExpress from '../icons/Express';


class Skills extends Component {

    state = {
        skillSet: [
            {   
                    class: 'react',
                    area: 'front end',
                    iconModule: <SvgReact/>
            },
            {   
                    class: 'javascript',
                    area: 'front end',
                    iconModule: <SvgJs/>
            },
            { 
                    class: 'sass',
                    area: 'front end',
                    iconModule: <SvgSass/>
            },
            { 
                    class: 'css3',
                    area: 'front end',
                    iconModule: <SvgCss3/>
            },
            { 
                    class: 'html5',
                    area: 'front end',
                    iconModule: <SvgHtml5/>
            },
            { 
                class: 'bootstrap',
                area: 'front end',
                iconModule: <SvgBootstrap/>
            },
            { 
                class: 'webpack',
                area: 'tooling',
                iconModule: <SvgWebpack/>
            },
            { 
                class: 'babel',
                area: 'tooling',
                iconModule: <SvgBabel/>
            },
            { 
                class: 'git',
                area: 'tooling',
                iconModule: <SvgGit/>
            },
            { 
                class: 'node',
                area: 'back end',
                iconModule: <SvgNode />
            },
            { 
                class: 'express',
                area: 'back end',
                iconModule: <SvgExpress/>
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
                            {skill.iconModule}
                        </div>
                        
                    )}
                </div>
                <h4>Back End</h4>
                <div className="skills back-end">
                    {this.state.skillSet.filter(skill => skill.area === 'back end').map( (skill) => 
                        <div className={`skill-${skill.class} skill`}>
                            {skill.iconModule}
                        </div>
                        
                    )}
                </div>
                <h4>Tooling</h4>
                <div className="skills tooling">
                    {this.state.skillSet.filter(skill => skill.area === 'tooling').map( (skill) => 
                        <div className={`skill-${skill.class} skill`}>
                           {skill.iconModule}  
                        </div>
                        
                    )}
                </div>
            </section>
        );
    }
}

export default Skills;