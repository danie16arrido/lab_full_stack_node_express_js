var UI = function () {
  var countriesSource = ["Canada", "Switzerland"];
};

UI.prototype = {
  countriesList: function () {
    var countriesList = document.getElementById('countries-list');
    countriesList.innerText = "Where would you like to go?";
  }
}

