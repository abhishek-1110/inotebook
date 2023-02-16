const express = require("express");
const User = require("../models/User");
const router = express.Router();

// for password hashing..
const bcrypt = require('bcrypt');

// used for validation
const { body, validationResult } = require("express-validator");

var jwt = require('jsonwebtoken');


// JWT
const JWT_SECRET = 'hi$hi';

// create a user using : POST "/api/auth/createuser". No Login Required..
router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name.").isLength({ min: 3 }),
    body("email", "Enter a valid Email.").isEmail(),
    body(
      "password",
      "Enter a valid Password of at least 5 characters."
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // stores in mongodb database under users collection
    // check whether the user (email) exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error: "Sorry a user with this email address exists already..",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);
      // create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });
      console.log("User saved successfully..");

      const data = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);

      res.json({authToken});
      //   .then((user) => res.json(user))
      //   .catch((e) => console.log("Error", e.message));
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured.");
    }
  }
);

// will give authtoken to user who login jsonwebtoken (JWT) used to verify user











module.exports = router;
