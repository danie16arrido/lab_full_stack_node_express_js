var UI = require('./views/ui');

var app = function () {
  console.log("onload")
  new UI();
};

window.addEventListener('load', app);