import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Userpage/Profile";
import HomePage from "./components/Home/Homepage";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/Login";
import ManualAdd from "./components/ManualAdd/ManualAdd";
import Footer from "./components/Footer/Footer";
import Collection from "./components/Userpage/Collection";
import Wishlist from "./components/Userpage/Wishlist";
import Search from "./components/Search/Search";



function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Route exact path="/" component={HomePage}/> 
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/manual" component={ManualAdd}/>
      <Route exact path="/collection" component={Collection} />
      <Route exact path="/wishlist" component={Wishlist}/>
      <Route exact path="/search" component={Search}/>
    </Router>
    {/* <Footer /> */}
    </>
  );
}

export default App;