var express = require("express");
var app = express();

app.get("/", (req, res) => res.send("ok"));
app.listen(3000, () => console.log("Running on port 3000"));
