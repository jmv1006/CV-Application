import React, { Component } from "react";
import './styles/App.css'
import Header from "./components/header";
import GeneralInfo from "./components/general";
import WorkExperience from "./components/work";
import Education from "./components/education";
import Result from "./components/result";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      jobtitle: '',
      company: '',
      years: '',
      description: ''
    }

    this.updateValue = this.updateValue.bind(this);
  }


  updateValue(item, value) {
    this.setState({[item]: value});
  }


  render() {
    return (
      <div id="app">
        <Header />
        <GeneralInfo updateValue = {this.updateValue} />
        <WorkExperience updateValue = {this.updateValue}/>
        <Education />
        <Result name={this.state.name} email={this.state.email} number={this.state.phone} jobtitle={this.state.jobtitle} company={this.state.company} years={this.state.years} description={this.state.description}/>
      </div>
    );
  }
}

export default App;