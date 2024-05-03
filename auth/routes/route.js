const express = require("express");
const { getUsers, addUser } = require("../controller/userController");
const router = express.Router();

router.get("/getusers", getUsers);

router.post("/adduser", addUser);

module.exports = router;
