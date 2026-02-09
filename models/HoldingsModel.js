const {model, default: mongoose} = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingSchema");

const HoldingModel = mongoose.model("holding", HoldingsSchema);

module.exports = HoldingModel;