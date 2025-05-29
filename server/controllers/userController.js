const User = require("../models/User");

const user = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = (req, res) => {
  try {
    const user = new User({
      name: req.body.name,

      mobile: req.body.mobile,
      address: req.body.address,
    });
    let response = user.save();
    console.log(response);
    res.send("user added", response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = { user, addUser };
