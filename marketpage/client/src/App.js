import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Userpage from "./components/Userpage/UserPage";
import HomePage from "./components/Home/Homepage";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/Login";
import ManualAdd from "./components/ManualAdd/ManualAdd";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Route exact path="/" component={HomePage}/> 
      <Route exact path="/profile" component={Userpage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/manual" component={ManualAdd}/>
      <Route exact path="/" />
    </Router>
    {/* <Footer /> */}
    </>
  );
}

export default App;