const express = require("express");
const bodyParser = require("body-parser");
let query = require("../db/index");
let urlencodedParser = bodyParser.urlencoded({
    extended: false
});
let router = express.Router();
//测试数据
router.get("/testData", async (req, res, next) => {
    try {
        var data = await query("SELECT * FROM listdata");
    } catch (err) {
        console.log(err);
    }
    let result = "";
    if (data.length) {
        result = {
            msg: "success",
            data,
        }
    } else {
        result = {
            msg: "err",
        }
    }
    res.send(result)
});
module.exports = router;