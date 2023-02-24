const mongoose = require("mongoose");

const dormSchema = mongoose.Schema(
    {
        name: {type: "String", required: true},
        washers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Washer",
        },
        ], 

    },
    {
        timestamps: true,
    }
);

const Dorm = mongoose.model("Dorm", dormSchema);

module.exports = Dorm;