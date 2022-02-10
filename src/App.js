import React, { Component } from "react";
import './styles/App.css'
import Header from "./components/header";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <Header />
      </div>
    );
  }
}

export default App;