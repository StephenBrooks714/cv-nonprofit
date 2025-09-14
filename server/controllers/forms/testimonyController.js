const ReviewData = require("../../models/ReviewPost");

const newReviewPage = (req, res) => {
    res.render("newTestimony", {
        title: "New Review"
    })
}

const storeReview = async (req, res) => {
    const review = new ReviewData(req.body);
    await review.save();
    res.redirect("/testimonials");
}

const reviewPage = async (req, res) => {
    const review = await ReviewData.find({});
    res.render("testimonials", {
        title: "Testimonials",
        review
    })
}

const deleteReview = async (req, res) => {
    await ReviewData.findByIdAndDelete(req.params.id);
    res.redirect("/testimonials");
}

module.exports = {
    newReviewPage,
    storeReview,
    reviewPage,
    deleteReview
}