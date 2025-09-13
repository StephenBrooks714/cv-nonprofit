const mongoose = require("mongoose");
const Schema = mongoose.Schema

const HomeIntroSchema = new Schema ({
    title: String,
    text: String,
    image: String
});

const HomeIntro = mongoose.model("HomeIntro", HomeIntroSchema);
module.exports = HomeIntro;