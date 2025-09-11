// data bases
const boardMemberInfo = require("../models/OurBoard");
const ContactMethod = require("../models/ContactForm");
//////////////////////////////////////////////////////

// main pages
const homePage = async (req, res) => {
    const contactData = await ContactMethod.find({}).sort({ createdAt: -1 }).limit(1);
    res.render("index", {
        title: "Nonprofit business - Cosmic Vibes",
        contactData
    })
}

const boardMembersPage = async (req, res) => {
    const members = await boardMemberInfo.find({});
    res.render("boardMembers", {
        title: "Nonprofit business - Cosmic Vibes",
        members
    })
}

const ourReachPage = (req, res) => {
    res.render("ourReach", {
        title: "Nonprofit business - Cosmic Vibes"
    })
}

module.exports = {
    homePage,
    boardMembersPage,
    ourReachPage
}