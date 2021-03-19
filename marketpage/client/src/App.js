import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Userpage/Profile";
import HomePage from "./components/Home/Homepage";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/Login";
import ManualAdd from "./components/ManualAdd/ManualAdd";
import Collection from "./components/Userpage/Collection";
import Wishlist from "./components/Userpage/Wishlist";
import Search from "./components/Search/Search";
import { BookSearchProvider } from "./data/BookSearchProvider";
import { BookCollectionProvider } from "./data/BookCollectionProvider";
import { BookWishlistProvider } from "./data/BookWishlistProvider";
import CheckAuth from "./components/CheckAuth";
import { AuthProvider } from "./data/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BookWishlistProvider>
        <BookCollectionProvider>
          <BookSearchProvider>
            <Router>
              <Navbar />
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/profile"
                component={() => (
                  <CheckAuth>
                    <Profile />
                  </CheckAuth>
                )}
              />
              <Route
                exact
                path="/collection"
                component={() => (
                  <CheckAuth>
                    <Collection />
                  </CheckAuth>
                )}
              />
              <Route
                exact
                path="/wishlist"
                component={() => (
                  <CheckAuth>
                    <Wishlist />
                  </CheckAuth>
                )}
              />
              <Route
                exact
                path="/signup"
                component={() => (
                  <CheckAuth unAuthenticatedOnly={true}>
                    <SignUp />
                  </CheckAuth>
                )}
              />
              <Route
                exact
                path="/login"
                component={() => (
                  <CheckAuth unAuthenticatedOnly={true}>
                    <LogIn />
                  </CheckAuth>
                )}
              />
              <Route exact path="/manual" component={ManualAdd} />
              <Route exact path="/search" component={Search} />
            </Router>
            {/* <Footer /> */}
          </BookSearchProvider>
        </BookCollectionProvider>
      </BookWishlistProvider>
    </AuthProvider>
  );
}

export default App;
