const express = require("express");
const app = express();

const fs = require("fs");

const port = 8080;

let components = fs.readdirSync("./public/components");

app.use(express.static("./public"));

app.get('/json', (req, res) => {
    res.json(components);
});

app.listen(port, () => {
    console.log("App is listening on port " + port);
});
