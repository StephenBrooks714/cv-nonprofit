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





module.exports = {
    newBoardMemberPage,
    storeBoardMember,
    deleteBoardMember
}