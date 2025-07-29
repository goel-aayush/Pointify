import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const Users = await User.find();

    res.status(200).json(Users);
  } catch (error) {
    console.log("Error in getUser controller : ", error.messsage);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const adduser = async (req, res) => {
  const { fullName } = req.body;
  try {
    if (!fullName) {
      return res.status(400).json({
        message: "Name is required",
      });
    }

    const user = await User.findOne({ fullName });

    if (user) {
      return res.status(400).json({
        message: "Name already exist",
      });
    }

    const newUser = new User({
      fullName,
    });

    if (newUser) {
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.log("error in adduser controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const score = async (req, res) => {
  try {
    const { fullName, points } = req.body;

    // Find user by full name
    const user = await User.findOne({ fullName });

    if (!user) {
      return res.status(404).json({
        message: "User doesn't exist",
      });
    }

    // Update the user's point by adding new points
    user.point += points;

    // Save the updated user
    await user.save();

    const io = req.app.get("io");
    io.emit("pointsUpdated", { fullName, points });

    return res.status(200).json({
      message: "User points updated successfully",
      updatedUser: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
