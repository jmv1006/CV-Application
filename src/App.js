import React, { useState } from "react";
import './styles/App.css'
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";

const App = () => {
  return (
    <div id="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;