const boardMemberData = require("../../models/OurBoard");
const FaqData = require("../../models/FaqPost");
const HomeIntroData = require("../../models/HomeIntro");

const newBoardMemberPage = (req, res) => {
    res.render("newBoardMember", {
        title: "New Board Member"
    })
}

const storeBoardMember = async (req, res) => {
    const boardMember = new boardMemberData(req.body);
    await boardMember.save();
    res.redirect("/boardMembers");
}

const deleteBoardMember = async (req, res) => {
    await boardMemberData.findByIdAndDelete(req.params.id);
    res.redirect("/boardMembers");
}

const updateBoardMemberPage = async (req, res) => {
    const boardMember = await boardMemberData.findById(req.params.id);
    res.render("updateBoardMember", {
        title: "Update Board Member",
        boardMember
    })
}

const postUpdateBoardMember = async (req, res) => {
    const boardMember = await boardMemberData.findById(req.params.id);
    boardMember.name = req.body.name;
    boardMember.role = req.body.role;
    boardMember.description = req.body.description;
    boardMember.image = req.body.image;
    await boardMember.save();
    res.redirect("/boardMembers");
}

/////////////////////////////////////////////////////////
// FAQ Section
const newFaqPage = (req, res) => {
    res.render("newFaq", {
        title: "New FAQ"
    })
}

const storeFaqInfo = async (req, res) => {
    const faqDetails = new FaqData(req.body);
    await faqDetails.save();
    res.redirect("/newFaq");
}

const deleteFaq = async (req, res) => {
    await FaqData.findByIdAndDelete(req.params.id);
    res.redirect("/");
}

const updateFaqData = async (req, res) => {
    const faqDetails = await FaqData.findById(req.params.id);
    faqDetails.question = req.body.question;
    faqDetails.answer = req.body.answer;
    await faqDetails.save();
    res.redirect("/");
}
//////////////////////////////////////////////////////////
// home intro
const newHomeIntroPage = (req, res) => {
    res.render("newHomeIntro", {
        title: "New Home Intro"
    })
}

const storeHomeIntro = async (req, res) => {
    const homeIntro = new HomeIntroData(req.body);
    await homeIntro.save();
    res.redirect("/newHomeIntro");
}

const deleteHomeIntro = async (req, res) => {
    await HomeIntroData.findByIdAndDelete(req.params.id);
    res.redirect("/");
}

module.exports = {
    newBoardMemberPage,
    storeBoardMember,
    deleteBoardMember,
    updateBoardMemberPage,
    postUpdateBoardMember,
    newFaqPage,
    storeFaqInfo,
    deleteFaq,
    updateFaqData,
    newHomeIntroPage,
    storeHomeIntro,
    deleteHomeIntro
}