const express = require("express");
const router = express.Router();
const cache = require("../config/cache");
const auth = require("../middleware/ifAuthorized");

const mainController = require("../controllers/mainPageController");
router.get("/", mainController.homePage);
router.get("/boardMembers", mainController.boardMembersPage);
router.get("/ourReach", mainController.ourReachPage);

const userActionController = require("../controllers/users/index");
router.get("/register", auth, cache(2), userActionController.registerUser);
router.post("/store/user", cache(2), userActionController.storeUser);
router.get("/login", cache(2), userActionController.loginPage);
router.post("/login/user", cache(2), userActionController.loginUserAction);
router.get("/logout", cache(2), userActionController.logoutUser);
router.get("/updateUser/:id", cache(2), auth, userActionController.updateUser);
router.post("/updateUser/:id", cache(2), userActionController.postUpdatedUser);
router.get("/deleteUser/:id", cache(2), auth, userActionController.deleteUser);

const adminController = require("../controllers/controls/adminPageController");
router.get("/dashboard", cache(2), auth, adminController.adminPage);

const formsController = require("../controllers/forms/mainFormsController");
router.get("/newBoardMember", auth, cache(2), auth, formsController.newBoardMemberPage);
router.post("/store/boardMember", cache(2), auth, formsController.storeBoardMember);
router.get("/deleteBoardMember/:id", auth, cache(2), auth, formsController.deleteBoardMember);
router.get("/updateBoardMember/:id", auth, cache(2), auth, formsController.updateBoardMemberPage);
router.post("/updateBoardMember/:id", auth, cache(2), auth, formsController.postUpdateBoardMember);

const contactFormController = require("../controllers/forms/contactPreferences");
router.get("/newContact", auth, contactFormController.newContactPage);
router.post("/store/contact", auth, contactFormController.storeContact);
router.post("/send/form", contactFormController.sendForm);
router.get("/deleteContactPreference/:id", auth, contactFormController.deleteContactPreference);
router.get("/thankYou", contactFormController.thankYouPage);

module.exports = router;