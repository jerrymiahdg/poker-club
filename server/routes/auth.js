const express = require("express");

const router = express.Router();

const controller = require("../controllers/auth");

router.get("/is-logged-in", controller.getIsLoggedIn);
router.post("/create-user", controller.postCreateUser);
router.post("/login", controller.postLogin);
router.get("/logout", controller.getLogout);

module.exports = router;
