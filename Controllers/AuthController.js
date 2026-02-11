const User = require("../models/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const token = createSecretToken(User._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      secure: true,      
      sameSite: "None",
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.Login = async (req, res) => {
    try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User not found" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    res.status(201).json({
      message: "Login successful",
      success: true,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}