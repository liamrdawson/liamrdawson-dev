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
               // nameOfTech: 'React',
                    class: 'react',
                    area: 'front end',
                    iconModule: <SvgReact/>
            },
            {   
               // nameOfTech: 'JavaScript',
                    class: 'javascript',
                    area: 'front end',
                    iconModule: <SvgJs/>
            },
            { 
                //nameOfTech: 'SCSS',
                    class: 'sass',
                    area: 'front end',
                    iconModule: <SvgSass/>
            },
            { 
                //nameOfTech: 'CSS3',
                    class: 'css3',
                    area: 'front end',
                    iconModule: <SvgCss3/>
            },
            { 
                //nameOfTech: 'HTML5',
                    class: 'html5',
                    area: 'front end',
                    iconModule: <SvgHtml5/>
            },
            { 
               // nameOfTech: 'Bootstrap',
                class: 'bootstrap',
                area: 'front end',
                iconModule: <SvgBootstrap/>
            },
            { 
             //   nameOfTech: 'Webpack',
                class: 'webpack',
                area: 'tooling',
                iconModule: <SvgWebpack/>
            },
            { 
              //  nameOfTech: 'Babel',
                class: 'babel',
                area: 'tooling',
                iconModule: <SvgBabel/>
            },
            { 
             //   nameOfTech: 'Git',
                class: 'git',
                area: 'tooling',
                iconModule: <SvgGit/>
            },
            { 
              //  nameOfTech: 'Node',
                class: 'node',
                area: 'back end',
                iconModule: <SvgNode />
            },
            { 
               // nameOfTech: 'Express',
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
                            <span>{skill.nameOfTech}</span>
                        </div>
                        
                    )}
                </div>
                <h4>Back End</h4>
                <div className="skills back-end">
                    {this.state.skillSet.filter(skill => skill.area === 'back end').map( (skill) => 
                        <div className={`skill-${skill.class} skill`}>
                            {skill.iconModule}
                            <span>{skill.nameOfTech}</span>
                        </div>
                        
                    )}
                </div>
                <h4>Tooling</h4>
                <div className="skills tooling">
                    {this.state.skillSet.filter(skill => skill.area === 'tooling').map( (skill) => 
                        <div className={`skill-${skill.class} skill`}>
                           {skill.iconModule}  
                            <span>{skill.nameOfTech}</span>
                        </div>
                        
                    )}
                </div>
            </section>
        );
    }
}

export default Skills;