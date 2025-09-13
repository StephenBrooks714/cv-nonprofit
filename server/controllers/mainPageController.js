// data bases
const boardMemberInfo = require("../models/OurBoard");
const ContactMethod = require("../models/ContactForm");
const FaqLeads = require("../models/FaqPost");
const HomeIntro = require("../models/HomeIntro");
//////////////////////////////////////////////////////

// main pages
const homePage = async (req, res) => {
    const contactData = await ContactMethod.find({}).sort({ createdAt: -1 }).limit(1);
    const faqs = await FaqLeads.find({}).sort({ createdAt: -1 }).limit(5);
    const intro = await HomeIntro.find({}).sort({ createdAt: -1 }).limit(1);
    res.render("index", {
        title: "Nonprofit business - Cosmic Vibes",
        contactData, faqs, intro
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

const testimonialsPage = (req, res) => {
    res.render("testimonials", {
        title: "Nonprofit business - Cosmic Vibes"
    })
}

const eventsPage = (req, res) => {
    res.render("events", {
        title: "Nonprofit business - Cosmic Vibes"
    })
}

module.exports = {
    homePage,
    boardMembersPage,
    ourReachPage,
    testimonialsPage,
    eventsPage
}