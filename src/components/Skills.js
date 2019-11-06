import React from 'react';
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


const Skills = () =>  {
    const skills = [
        {   
            class: 'react',
            area: 'front end',
            iconModule: <SvgReact/>,
            id: 1
        },
        {   
            class: 'javascript',
            area: 'front end',
            iconModule: <SvgJs/>,
            id: 2
        },
        { 
            class: 'sass',
            area: 'front end',
            iconModule: <SvgSass/>,
            id: 3
        },
        { 
            class: 'css3',
            area: 'front end',
            iconModule: <SvgCss3/>,
            id: 4
        },
        { 
            class: 'html5',
            area: 'front end',
            iconModule: <SvgHtml5/>,
            id: 6
        },
        { 
            class: 'bootstrap',
            area: 'front end',
            iconModule: <SvgBootstrap/>,
            id: 7
        },
        { 
            class: 'webpack',
            area: 'tooling',
            iconModule: <SvgWebpack/>,
            id: 8
        },
        { 
            class: 'babel',
            area: 'tooling',
            iconModule: <SvgBabel/>,
            id: 9
        },
        { 
            class: 'git',
            area: 'tooling',
            iconModule: <SvgGit/>,
            id: 10
        },
        { 
            class: 'node',
            area: 'back end',
            iconModule: <SvgNode />,
            id: 11
        },
        { 
            class: 'express',
            area: 'back end',
            iconModule: <SvgExpress/>,
            id: 12
        },
    ];

    return (
        <section className="skills-section" key={1}>
            <h2>Skills</h2>
            <span>I love developing and learning about the latest technologies. Here are the technologies I use most.</span>
            <h4>Front End</h4>
            <div className="skills front-end">
                {skills.filter(skill => skill.area === 'front end').map( (skill) => 
                    <div className={`skill-${skill.class} skill`} skill={skill.class} key={skill.id}>
                        {skill.iconModule}
                    </div>
                )}
            </div>
            <h4>Back End</h4>
            <div className="skills back-end">
                {skills.filter(skill => skill.area === 'back end').map( (skill) => 
                    <div className={`skill-${skill.class} skill`} key={skill.id}>
                        {skill.iconModule}
                    </div>
                )}
            </div>
            <h4>Tooling</h4>
            <div className="skills tooling">
                {skills.filter(skill => skill.area === 'tooling').map( (skill) => 
                    <div className={`skill-${skill.class} skill`} key={skill.id}>
                        {skill.iconModule}  
                    </div>
                    
                )}
            </div>
        </section>
    );
}

export default Skills;