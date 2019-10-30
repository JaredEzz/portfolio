import React, {Component} from 'react';
import pluralsightImage from '../Assets/PS_logo_F-04.png';
import android from '../Assets/skill_iqs/android.png';
import java from '../Assets/skill_iqs/java.png';
import angular from '../Assets/skill_iqs/angular.png';
import cpp from '../Assets/skill_iqs/cpp.png';
// import css from '../Assets/skill_iqs/css.png';
// import es6 from '../Assets/skill_iqs/es6.png';
// import html5 from '../Assets/skill_iqs/html5.png';
import java_programming_paradigms from '../Assets/skill_iqs/java_programming_paradigms.png';
import js from '../Assets/skill_iqs/js.png';
import npm from '../Assets/skill_iqs/npm.png';
import rxjs from '../Assets/skill_iqs/rxjs.png';
import typescript from '../Assets/skill_iqs/typescript.png';
import git from '../Assets/skill_iqs/git.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.projects = props.projects
    }
    render() {
        return(
            <section className="projects-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>
            {/*        /!*{*!/*/}
            {/*        /!*    this.experience.map((exp, index) => (*!/*/}
            {/*        /!*        <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">*!/*/}
            {/*        /!*            <div className="resume-content">*!/*/}
            {/*        /!*                <h3 className="mb-0">{exp.position}</h3>*!/*/}
            {/*        /!*                <div className="subheading mb-3">{exp.organization}</div>*!/*/}
            {/*        /!*                <p>{exp.aboutWork}</p>*!/*/}
            {/*        /!*            </div>*!/*/}
            {/*        /!*            <div className="resume-date text-md-right">*!/*/}
            {/*        /!*                <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>*!/*/}
            {/*        /!*            </div>*!/*/}
            {/*        /!*        </div>*!/*/}
            {/*        /!*    ))*!/*/}
                    {/*}*/}
                </div>
            </section>

        );
    }
}

export default Projects;