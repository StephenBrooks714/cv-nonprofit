// data
const contactPerson = require("../../models/ContactForm");

const adminPage = async (req, res) => {
    const contactData = await contactPerson.find({}).sort({ _id: -1 }).limit(1);
    res.render("dashboard", {
        title: "Admin page for content",
        contactData
    })
}



module.exports = {
    adminPage
}