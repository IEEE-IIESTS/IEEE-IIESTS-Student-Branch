var express = require('express'),
    app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("home/home");
})
app.get("/underCons", function (req, res) {
    res.render("under-construction/Under-Construction");
})
app.get("/join", function (req, res) {
    res.render("Join-Us/Join-Us");
})
app.get("/team", function (req, res) {
    res.render("Our-Team/Our-Team");
})

app.listen(3000, function () {
    console.log("Server has started on port 3000");
})