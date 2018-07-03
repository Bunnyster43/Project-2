var request = require('request');

app.get("/twitch", function (req, res) {
  request('https://api.twitch.tv/helix/users', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info);
    }
  })
});

