const mongoose = require("mongoose");
const Schema = mongoose.Schema

const FaqPostSchema = new Schema ({
    question: String,
    answer: String,
});

const FaqPost = mongoose.model('FaqPost', FaqPostSchema);
module.exports = FaqPost;
