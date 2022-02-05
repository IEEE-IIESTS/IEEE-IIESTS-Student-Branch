var express = require('express'),
    app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.listen(3000, function () {
    console.log("Server has started on port 3000");
})