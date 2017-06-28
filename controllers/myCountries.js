var express = require("express");
var countryRouter = express.Router();

var CountryQuery = require('../db/country_query.js');
var query = new CountryQuery();

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
  query.all( function ( countries ) {
    res.json( countries );
  })
});
//country show
countryRouter.get('/:id', function (req, res) {
  res.json( sourceCountriesB[ req.params.id ])
});
//country create
countryRouter.post('/', function (req, res) {
  var country = {
    name: req.body.name
  }
  sourceCountries.push(country);
  res.json( sourceCountries );
});
//country update
countryRouter.put('/:id', function(req, res) {
  var updatedCountry = {
    name: req.body.name
  }
  sourceCountries[req.params.id] = updatedCountry;
  res.json( sourceCountries );
});
//country delete
countryRouter.delete('/:id', function(req, res) {
  sourceCountries.splice(req.params.id, 1);
  res.json( sourceCountries );
});

module.exports = countryRouter;
