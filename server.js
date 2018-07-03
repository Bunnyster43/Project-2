var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var sequelize = require("sequelize")

var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./views/layouts/HTML BAREBONES"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/layouts/HTML BAREBONES/index.html"));
  return res.send("No character found");
});

var routes = require("./controllers/controller.js");
app.use(routes);

var request = require('request');

app.get("/twitch", function (req, res) {
  console.log("hello");
  request('https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=uo6dggojyb8d6soh92zknwmi5ej1q2&redirect_uri=http://localhost&scope=viewing_activity_read+openid&state=c3ab8aa609ea11e793ae92361f002671', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info);
    }
  })
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});