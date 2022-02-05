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

app.listen(3000, function () {
    console.log("Server has started on port 3000");
})