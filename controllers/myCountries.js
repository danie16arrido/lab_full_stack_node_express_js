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
  res.json( sourceCountriesB );
});

countryRouter.get('/:id', function (req, res) {
  res.json( sourceCountriesB[ req.params.id ])
});

countryRouter.post('/', function (req, res) {
  var country = {
    name: req.body.name
  }
  sourceCountries.push(country);
  res.json( sourceCountries );
});

countryRouter.put('/:id', function(req, res) {
  var updatedCountry = {
    name: req.body.name
  }
  sourceCountries[req.params.id] = updatedCountry;
  res.json( sourceCountries );
});

countryRouter.delete('/:id', function(req, res) {
  sourceCountries.splice(req.params.id, 1);
  res.json( sourceCountries );
});

module.exports = countryRouter;
