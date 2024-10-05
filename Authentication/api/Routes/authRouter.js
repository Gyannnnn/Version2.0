const { signup, signin } = require("../Controllers/AuthController");
const {
  signUpValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");

const router = require("express").Router();

router.post("/signup", signUpValidation, signup);
router.post("/signin", loginValidation, signin);

module.exports = router;
