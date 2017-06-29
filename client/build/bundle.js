/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(1);

var app = function () {
  console.log("onload")
  new UI();
};

window.addEventListener('load', app);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Countries = __webpack_require__(2);

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



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Country = __webpack_require__(3);

var Countries =  function () {};

Countries.prototype = {
  makeRequest: function ( url, onRequestComplete ) {
    var request = new XMLHttpRequest();
    request.open( 'GET', url );
    request.addEventListener( 'load', function (){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsData = JSON.parse(jsonString);
      onRequestComplete( resultsData);
    })
    request.send();
  },

    all: function( onCountriesReady ){
    this.makeRequest( 'http://localhost:3000/api/countries', function ( allCountries ) {
      onCountriesReady( allCountries );
    });

  }
}

module.exports = Countries;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Country = function(options) {
  this.name = options.name;
}

Country.prototype = {

}

module.exports = Country;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map