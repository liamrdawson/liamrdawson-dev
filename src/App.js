import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Introduction from './components/Introduction';
import Skill from './components/Skill';
import './App.css';


class App extends Component {

    state = {
        skillSet: [
            { nameOfTech: 'React'},
            { nameOfTech: 'JavaScript ES6'},
            { nameOfTech: 'HTML5 & CSS3'},
            { nameOfTech: 'SASS / SCSS'},
            { nameOfTech: 'Babel'},
            { nameOfTech: 'Bootstrap 3 & 4'},
            { nameOfTech: 'Git'},
            { nameOfTech: 'Node'},
            { nameOfTech: 'Express'},
            { nameOfTech: 'MongoDB'},
            { nameOfTech: 'Webpack'},
        ]
    };

    render() {
        return (
            <div className="container">
                <Header />
                <Introduction />
                <Body />

                {/*SKILLS LIST*/}
                <section className="skills">
                    {this.state.skillSet.map( (skill, index) => 
                        <Skill
                            skill={skill.nameOfTech}
                            index={index}
                        />
                    )}
                </section>

            </div>
        );       
    }

}

export default App;
