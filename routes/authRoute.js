const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();

// USER SIGNUP

router.post("/signup", Signup);


// USER LOGIN

router.post("/login", Login);

module.exports = router;
