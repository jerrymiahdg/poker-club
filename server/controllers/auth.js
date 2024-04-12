const { where } = require("sequelize");
const User = require("../models/user");

const bcrypt = require("bcryptjs");

exports.postCreateUser = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((password) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
    }).then(() => {
      req.session.isLoggedIn = true;
      req.session.save();
      res.json("USER CREATED");
    });
  });
};

exports.postLogin = (req, res) => {
  User.findAll({ where: { email: req.body.email } }).then((users) => {
    for (let i = 0; i < users.length; i++) {
      bcrypt.compare(req.body.password, users[i].password).then((isValid) => {
        if (isValid) {
          req.session.isLoggedIn = true;
          req.session.save();
          return res.json("LOGIN SUCCESSFUL");
        }
        if (i == users.length - 1) return res.json("LOGIN FAILED");
      });
    }
    if (users.length <= 0) return res.json("LOGIN FAILED");
  });
};

exports.getIsLoggedIn = (req, res) => {
  res.json(req.session.isLoggedIn || false);
};

exports.getLogout = (req, res) => {
  req.session.isLoggedIn = false;
  req.session.save();
  res.json("USER LOGGED OUT");
};
