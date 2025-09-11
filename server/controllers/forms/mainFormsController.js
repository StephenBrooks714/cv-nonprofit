const boardMemberData = require("../../models/OurBoard");

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

module.exports = {
    newBoardMemberPage,
    storeBoardMember,
    deleteBoardMember,
    updateBoardMemberPage,
    postUpdateBoardMember
}