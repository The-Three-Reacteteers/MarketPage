const express = require("express");
const session = require ("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const passport = require("./passport/setup");
const routes = require("./routes");
const auth = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/MarketPageDB")
  .then(console.log(`MongoDB connected ${MONGODB_URI}`))
  .catch(err => console.log(err));

app.use(
  session({
    secret: "bibliophile",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.Connection})
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Add routes
require("./routes/apiRoutes.js")(app);
app.use("/api/auth",auth);

// Send request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
