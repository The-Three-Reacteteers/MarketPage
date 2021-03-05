const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function (app) {
  // (logged out) landing page w/ links to login & signup
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../src/components/LogIn/index.html"));
  });

  // If logged in, redirect to home
  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../src/components/Home/index.html"));
  });

  app.get("/signup", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../src/components/SignUp/index.html"));
  });

  // These use isAuth. middleware to restrict pages to logged in users
  // Informational home page
  app.get("/home", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../src/components/Home/index.html"));
  });

  // display one book (user search)
  app.get("/book/:id", isAuthenticated, (req, res) => {
    db.Recipe.findOne({
      where: {
        id: req.params.id,
      },
    }).then((findBook) => {
      // ---> insert book page! 
      //res.sendFile(path.join(__dirname, ""));
    });
  });

  // View all books
  app.get("/all", isAuthenticated, (req, res) => {
      // ---> insert all books html
    //res.sendFile(path.join(__dirname, ""));
  });

  // Add new book
  app.get("/add", isAuthenticated, (req, res) => {
      // ---> insert add book html
    //res.sendFile(path.join(__dirname, ""));
  });

    // remove book
    app.get("/remove", isAuthenticated, (req, res) => {
        // ---> insert add book html
      //res.sendFile(path.join(__dirname, ""));
    });

};