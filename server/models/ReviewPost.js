const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ReviewPostSchema = new Schema ({
    name: String,
    title: String,
    review: String,
    image: {
        type: String,
        required: false
    },
    createdAt: String
})

const ReviewPost = mongoose.model('ReviewPost', ReviewPostSchema);
module.exports = ReviewPost;
