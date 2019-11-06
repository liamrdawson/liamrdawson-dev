import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Introduction from './Introduction';


const Main = () => {
    return (
       
        <div className="container">
            <Introduction className="fade"/> 
            <div className="sections-container">
                {/*SKILLS LIST*/}
                <Skills />
                {/*PROJECTS LIST*/}
                <Projects/>
            </div>
        </div>

    );
}

export default Main;