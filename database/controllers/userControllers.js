const UserModel = require("../models/user");

exports.createUser = async (req, res) => {

    await UserModel.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json({ message: "User Created" })
};

exports.getAllUsers = async (req, res) => {
    const allUsers = await UserModel.find({});
    return res.json(allUsers);
};

exports.getUserById = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
};

exports.updateUser = async (req, res) => {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(deletedUser);
};
