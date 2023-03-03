const mongoose = require("mongoose");

const washerSchema = mongoose.Schema(
    {
        status: {type: Boolean, required: true, default: true},
        dorm: {type: "String", required: true},
        name: {type: "String", required: true}
    },
    {
        timestamps: true,
    }
);

const Washer = mongoose.model("Washer", washerSchema);

module.exports = Washer;