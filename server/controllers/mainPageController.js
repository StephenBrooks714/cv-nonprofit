// data bases

//////////////////////////////////////////////////////

// main pages
const homePage = (req, res) => {
    res.render("index", {
        title: "Nonprofit business - Cosmic Vibes"
    })
}

const boardMembersPage = (req, res) => {
    res.render("boardMembers", {
        title: "Nonprofit business - Cosmic Vibes"
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