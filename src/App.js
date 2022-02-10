import React, { Component } from "react";
import './styles/App.css'
import Header from "./components/header";
import GeneralInfo from "./components/general";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
    }

    this.handler = this.handler.bind(this)
  }

  handler = name => {
    this.setState({
      name: name
    })
    console.log(this.state.name)
  }


  render() {
    return (
      <div id="app">
        <Header />
        <GeneralInfo handler = {this.handler} />
      </div>
    );
  }
}

export default App;