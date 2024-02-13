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

module.exports = {
  signup,
};
