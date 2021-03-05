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

app.listen(process.env.PORT || 3001, () => console.log("server online!"));
