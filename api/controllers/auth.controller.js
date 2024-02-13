import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === "" || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 12);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "Email already exists" });
    } else if (await User.findOne({ username })) {
      return res.status(400).json({ message: "Username already exists" });
    }
    await newUser.save();
    return res.status(201).json({ message: "SignUp Successful" });
  } catch (error) {
    next(error);
  }
};
