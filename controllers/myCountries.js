var express = require("express");
var countryRouter = express.Router();

//country index
countryRouter.get('/', function(req, res) {
  console.log("String")
  res.json({ Hi: "Daniel"});
})

module.exports = countryRouter;
