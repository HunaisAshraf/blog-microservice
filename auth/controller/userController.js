const produce = require("../kafka/producer");
const UserModel = require("../models/userModel");

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new UserModel({
      name,
      email,
      password,
    });
    await user.save();

    await produce("add-user", JSON.stringify(req.body));

    return res.json({
      success: true,
      message: "user added successfully",
    });
  } catch (error) {
    console.log("error in adding user", error);
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await UserModel.find();

    return res.json({
      success: true,
      message: "users list",
      user,
    });
  } catch (error) {
    console.log("error in get user", error);
  }
};

module.exports = {
  addUser,
  getUsers,
};
