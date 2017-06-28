var express = require("express");
var countryRouter = express.Router();

var sourceCountries = [
  {
    name: "Canada"
  },
  {
    name: "Switzerlannd"
  }
];

//country index
countryRouter.get('/', function(req, res) {
  res.json( sourceCountries );
})

module.exports = countryRouter;
