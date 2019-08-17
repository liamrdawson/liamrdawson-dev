import React, {Component} from 'react';

class Skill extends Component {
    render () {

        const {
            skill,
            index
        } = this.props;
        console.log(`${skill} rendered. Index is ${index}`);

        return (
                <div className="skill">
                    <span>{skill}</span>
                </div>
        );
    }
}

export default Skill;