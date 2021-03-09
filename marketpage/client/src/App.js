 import React from "react"
 import { BrowserRouter as Router, Route } from "react-router-dom";
 import Navbar from "./components/Navbar/Navbar"
// import HomePage from "./components/Home/Homepage"
// import Footer from "./components/Footer/Footer"



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Route exact path="/" /> 
      <Route exact path="/" />
      <Route exact path="/" />
      <Route exact path="/" />
      <Route exact path="/" />
      <Route exact path="/" />
    </Router>
    </>
  );
}

export default App;