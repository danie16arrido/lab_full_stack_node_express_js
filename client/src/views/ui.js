var Countries = require('../models/countries');

var UI = function () {
  var countries = new Countries();
  countries.all( function( allCountries ){
    this.render( allCountries );
  }.bind(this));
  
};

UI.prototype = {
  countriesList: function () {
    var countriesList = document.getElementById('countries-list');
    countriesList.innerText = "Where would you like to go?";
  },

  render: function ( countries ) { 
    var container = document.getElementById('countries-list');
    for( var country of countries ){
      var li = document.createElement('li');
      li.innerText = country.name;
      container.appendChild(li);     
    }
    console.log(container)
  }
}

module.exports = UI;

