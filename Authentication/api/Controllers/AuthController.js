const bcrypt = require("bcrypt");
const userModel = require("../Models/User");
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User Already Exists", success: false });
    }
    const newUser = new userModel({ name, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();
    res.status(201).json({ message: "Signup Success", success: true });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication Failed", success: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Authentication Failed", success: false });
    }
    const jwtToken = jwt.sign(
        {email:user.email,_id:user._id},
        JWT_SECRET,
        {expiresIn:'24h'}
        
    )
    res.status(200).json({ message: "Signin Success", success: true,jwtToken,email,name:user.name });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = {
  signup,
  signin,
};
