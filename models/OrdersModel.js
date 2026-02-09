const { model, default: mongoose } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrderSchema");

module.exports = mongoose.model("Order", OrdersSchema);