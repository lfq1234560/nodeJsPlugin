const express = require("express");
let app = express();
let allRouter = require("./router/index");
app.use(express.static("./"));
app.use(allRouter);
app.listen(2000, () => {
    console.log("服务器开启");
})