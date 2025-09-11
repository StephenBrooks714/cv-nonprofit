const mongoose = require("mongoose")
const Schema = mongoose.Schema

const programsSchema = new Schema({
    title: String,
    description: String,
    image: {
        type: String,
        required: true
    },
    btnLink: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    image2: {
        type: String,
        required: false
    },
    content2: {
        type: String,
        required: false
    },
    link2: {
        type: String,
        required: false
    },
    image3: {
        type: String,
        required: false
    },
    content3: {
        type: String,
        required: false
    },
    link3: {
        type: String,
        required: false
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

const Programs = mongoose.model("Programs", programsSchema);
module.exports = Programs;
