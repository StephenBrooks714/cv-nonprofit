const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainPageController");
router.get("/", mainController.homePage);
router.get("/boardMembers", mainController.boardMembersPage);
router.get("/ourReach", mainController.ourReachPage);



module.exports = router;