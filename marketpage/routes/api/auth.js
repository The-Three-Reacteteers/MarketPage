const router = require("express").Router();
const bcrypt = require("bcryptjs");
const passport = require("../../passport");
const User = require("../../models/user");

router.get("/", (req, res, next) => {
  const { user } = (req.session && req.session.passport) || {};
  if (!user) return res.status(400).json({ unauthorized: true });
  res.status(200).send(user);
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: "No User Found" });
    }
    req.logIn(user.toJSON(), function (err) {
      if (err) {
        console.error(err);
        return res.status(400).json({ errors: err.message });
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});
router.post("/update-password", (req, res) => {
  const { user } = (req.session && req.session.passport) || {};
  const { password, newPassword } = req.body;
  if (!user)
    return res.status(401).send({
      success: false,
    });
  if (!(newPassword && password))
    return res.status(400).json({ errors: "Invalid Body!" });
  User.findById(user._id, (err, cUser) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ errors: err.message });
    }
    if (!bcrypt.compareSync(password, cUser.password)) {
      return res.status(400).json({ errors: "Invalid Current Password!" });
    } else {
      User.findByIdAndUpdate(
        user._id,
        {
          password: bcrypt.hashSync(newPassword, 10),
        },
        function (err, doc) {
          if (err) {
            console.error(err);
            return res.status(400).json({ errors: err.message });
          }
          return res.status(200).json(doc);
        }
      );
    }
  });
});
router.post("/register", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!(email && firstname && lastname && password))
    return res.status(400).json({ errors: "Invalid Body!" });
  return User.findOne({ email: email }, function (err, user) {
    if (user) {
      return res
        .status(400)
        .json({ errors: "User with same email already exists!" });
    } else {
      return User.create({
        email,
        firstname,
        lastname,
        password: bcrypt.hashSync(password, 10),
      })
        .then((user) =>
          req.logIn(user, function (err) {
            if (err) {
              console.error(err);
              return res.status(400).json({ errors: err.message });
            }
            return res.status(200).json(user);
          })
        )
        .catch((err) => {
          res.status(400).json({ errors: err.message });
          console.error(err);
        });
    }
  });
});
router.get("/logout", function (req, res) {
  req.logout();
  res.status(200).json(null);
});
module.exports = router;
