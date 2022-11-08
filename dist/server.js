import express from "express";
var server = express();
server.get("/health", function (req, res) {
    res.send('ok');
});
server.listen(4000, function () {
    console.log("Magic happens on port 4000!");
});
