// data

const adminPage = (req, res) => {
    res.render("dashboard", {
        title: "Admin page for content"
    })
}



module.exports = {
    adminPage
}