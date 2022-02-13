import React, { Component } from "react";
import './styles/App.css'
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;