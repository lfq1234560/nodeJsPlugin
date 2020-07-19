const express = require("express");
let router = express.Router();
let home = require("./home");
router.use("/home", home);
module.exports = router;
