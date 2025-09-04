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

module.exports = router;