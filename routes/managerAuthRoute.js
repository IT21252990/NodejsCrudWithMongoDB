const express = require('express');
const router = express.Router();

const managerAuthController = require("../controller/managerAuthController");

router.post("/signup", managerAuthController.signup);

module.exports = router;