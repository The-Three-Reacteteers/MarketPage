import React from 'react'
import Profile from "./Profile"
import Collection from "./Collection"
import Wishlist from "./Wishlist"
import Navigation from "./Navbar.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Userpage = () => {
    return (
        <>
        <Router>
            <Navigation />
                <Switch>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/collection" component={Collection} />
                    <Route path="/wishlist" component={Wishlist} />
                </Switch>
        </Router>
        </>
    )
}

export default Userpage
