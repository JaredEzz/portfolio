import React, { Component } from 'react';
import profileData from './profileData.json';
import Sidebar from "./Components/Sidebar";
import Landing from "./Components/Landing";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Interests from "./Components/Interests";
import Awards from "./Components/Awards";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      awards : profileData.awards
    }
  }
  render() {
    return (
        <div className="App">
          <Sidebar sidebarData={this.state.landingData}/>
          <div className="container-fluid p-0">
            <Landing landingData={this.state.landingData}/>
            <hr className="m-0"/>
            <Experience landingData={this.state.experience}/>
            <hr className="m-0"/>
            <Education landingData={this.state.education}/>
            <hr className="m-0"/>
            <Skills landingData={this.state.skills}/>
            <hr className="m-0"/>
            <Interests landingData={this.state.interests}/>
            <hr className="m-0"/>
            <Awards landingData={this.state.awards}/>

          </div>
        </div>
    );
  }
}

export default App;
