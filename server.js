const express = require("express");
const app = express();
const fs = require("fs");

const port = 8080;

app.use(express.static("./public"));

let files = fs.readdirSync(__dirname + "/public/app/components/views");
app.get("/components", (req, res) => {
  res.send(files);
});

app.listen(port, () => {
    console.log("App is listening on port " + port);
});
