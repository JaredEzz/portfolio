import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faAngleDown, faFileDownload} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

class Landing extends Component {
    constructor(props){
        super(props);
        this.landingData = props.landingData;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">{this.landingData.firstName}
                        <span className="text-primary">{this.landingData.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">{this.landingData.phoneNumber} ·
                        <a href={"mailto:" + this.landingData.email}>{"  " + this.landingData.email}</a>
                    </div>
                    <p className="lead mb-5">{this.landingData.bio1}</p>
                    <div className="social-icons">
                        <a href={this.landingData.linkedin} target={"_blank"}>
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href={this.landingData.github} target={"_blank"}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href={this.landingData.twitter} target={"_blank"}>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href={this.landingData.instagram} target={"_blank"}>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href={this.landingData.download_resume} target={"_blank"}>
                            <FontAwesomeIcon icon={faFileDownload}/>
                        </a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    {/*<br/>*/}
                    <br/>
                    {/*<br/>*/}
                    <div className="scroll-button">
                        <Link
                            to="experience"
                            smooth={true}
                        >
                            {/*<a href="#experience">*/}
                            <FontAwesomeIcon icon={faAngleDown}/>
                            {/*</a>*/}
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;
