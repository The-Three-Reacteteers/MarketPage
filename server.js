const express = require("express");
const session = require("express-session");
const path = require("path");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const passport = require("./passport");
const routes = require("./routes");
// const auth = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/MarketPage";
// Connect to the Mongo DB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 })
  .then(() => {
    console.log(`MongoDB connected ${MONGODB_URI}`);

    app.use(
      session({
        secret: "bibliophile",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ client: mongoose.connection.getClient() }),
      })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    // Add routes
    // require("./routes/apiRoutes.js")(app);
    app.use(routes);

    // Send request to the React app
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    // Start the API server
    app.listen(PORT, function () {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  })
  .catch((err) => console.log(err));
