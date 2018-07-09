let mongoose = require("mongoose"),
    OptionSchema = new mongoose.Schema({
        option: { type: String, required: true, minlength: 3, maxlength: 50 },
        vote: { type: Number, default: 0 },
        poll: { type: mongoose.Schema.Types.ObjectId, ref: "Poll" }
    }, {timestamps:true});

    mongoose.model("Option", OptionSchema)