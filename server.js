const express = require("express");
const app = express();

const fs = require("fs");

const port = 8080;

app.use(express.static("./public"));

app.listen(port, () => {
    console.log("App is listening on port " + port);
});
