 import React from "react"
 import { BrowserRouter as Router, Route } from "react-router-dom";
 import Navbar from "./components/Navbar/Navbar";
 import Userpage from "./components/Userpage/UserPage";
import HomePage from "./components/Home/Homepage"
// import Footer from "./components/Footer/Footer"



function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Route exact path="/" component={HomePage}/> 
      <Route exact path="/profile" component={Userpage} />
      <Route exact path="/" />
      <Route exact path="/" />
      <Route exact path="/" />
      <Route exact path="/" />
    </Router>
    </>
  );
}

export default App;