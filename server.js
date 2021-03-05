const express = require("express");
const cors = require("cors");

// import data
const data = require("./data/data.json");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// GET requests
app.get("/result", (req, res) => {
  res.send(data);
});

var http = require("http"); //importing http

function startKeepAlive() {
  setInterval(function () {
    var options = {
      host: "https://ufitness.herokuapp.com/",
      port: 3001,
      path: "/",
    };
    http
      .get(options, function (res) {
        res.on("data", function (chunk) {
          try {
            // optional logging... disable after it's working
            console.log("HEROKU RESPONSE: " + chunk);
          } catch (err) {
            console.log(err.message);
          }
        });
      })
      .on("error", function (err) {
        console.log("Error: " + err.message);
      });
  }, 20 * 60 * 1000); // load every 20 minutes
}

startKeepAlive();

app.listen(process.env.PORT || 3001, () => console.log("server online!"));
