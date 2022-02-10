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
    }

    this.updateValue = this.updateValue.bind(this);
  }


  updateValue(item, value) {
    this.setState({[item]: value});
    console.log(this.state.name)
    console.log(this.state.number)
    console.log(this.state.email)
  }


  render() {
    return (
      <div id="app">
        <Header />
        <GeneralInfo updateValue = {this.updateValue} />
        <WorkExperience />
        <Education />
        <Result />
      </div>
    );
  }
}

export default App;