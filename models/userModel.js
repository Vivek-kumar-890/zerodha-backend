const {model, default: mongoose} = require("mongoose");

const {userSchema} = require("../schemas/userSchema");

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;