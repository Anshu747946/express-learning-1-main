const Users = require('../model/users');

const signupUser = async (req, res) => {
  try {
    const userData = req.body;
    const result = await Users.create(userData);

    if (result) {
      res.status(201).json({
        error: false,
        message: "User signup successful!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Error in signup!",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error.message ? error.message : "Error in signup",
    });
  }
};

module.exports = {
  signupUser,
};