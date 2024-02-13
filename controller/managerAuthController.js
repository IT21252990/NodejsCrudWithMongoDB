const Manager = require("../model/managerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }

    let manager = new Manager({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    });
    manager
      .save()
      .then((manager) => {
        res.json({
          message: "Manager Added Successfully !",
        });
      })
      .catch((error) => {
        res.json({
          message: "An Error Occured",
        });
      });
  });
};

const login = (req, res, next) => {
  var username = req.body.username
  var password = req.body.password

  Manager.findOne({$or: [{ email: username }, { phone: username }] })
  .then(manager => {
      if (manager) {
        bcrypt.compare(password, manager.password, function(err, result) {
          if (err) {
            res.json({
              error: err
            })
          }
          if (result) {
            let token = jwt.sign({ name: manager.name }, "verySecretValue", {expiresIn: "1h",})
            res.json({
              message: "Login successful !",
              token
            })
          } else {
            res.json({
              message: "Password incorrect"
            })
          }
        })
      } else {
        res.json({
          message: "User not found"
        })
      }
    })
}

module.exports = {
  signup,login
};
