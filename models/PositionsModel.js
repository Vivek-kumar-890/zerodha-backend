const { model, default: mongoose } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionSchema");

const PositionsModel = mongoose.model("position", PositionsSchema);

module.exports = PositionsModel;