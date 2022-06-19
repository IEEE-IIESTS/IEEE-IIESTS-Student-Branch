var express = require("express"),
  app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("Home/Homie");
});
app.get("/underCons", function (req, res) {
  res.render("Under-Construction/Under-Construction");
});
app.get("/join", function (req, res) {
  res.render("Join-Us/Join-Us");
});
app.get("/team", function (req, res) {
  res.render("Our-Team/Our-Team");
});
app.get("/events", function (req, res) {
  res.render("Events/Events");
});
app.get("*", function (req, res) {
  res.render("Under-Construction/Under-Construction");
});

app.listen(process.env.PORT||3000, function () {
  console.log(`Server has started on port ${process.env.PORT}`);
});
