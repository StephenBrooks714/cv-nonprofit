// data bases
const boardMemberInfo = require("../models/OurBoard");
//////////////////////////////////////////////////////

// main pages
const homePage = (req, res) => {
    res.render("index", {
        title: "Nonprofit business - Cosmic Vibes"
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