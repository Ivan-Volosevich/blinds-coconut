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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/hero.js":
/*!***********************************!*\
  !*** ./src/js/components/hero.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var slides = document.querySelectorAll('#hero-slides .hero-slide');\n  var currentSlide = 0;\n  var slideInterval = setInterval(nextSlide, 7000);\n\n  function nextSlide() {\n    goToSlide(currentSlide + 1);\n  }\n\n  function goToSlide(n) {\n    slides[currentSlide].className = 'hero-slide';\n    currentSlide = (n + slides.length) % slides.length;\n    slides[currentSlide].className = 'hero-slide showing';\n  }\n});\n\n//# sourceURL=webpack:///./src/js/components/hero.js?");

/***/ }),

/***/ "./src/js/components/our-works.js":
/*!****************************************!*\
  !*** ./src/js/components/our-works.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var controls = document.querySelectorAll('.btn-slider');\n\n  for (var i = 0; i < controls.length; i++) {\n    controls[i].style.display = 'inline-block';\n  }\n\n  var slides = document.querySelectorAll('#slider-show .slider-images');\n  var currentSlide = 0;\n  var slideInterval = setInterval(nextSlide, 30000);\n\n  function nextSlide() {\n    goToSlide(currentSlide + 1);\n\n    if (currentSlide == 0) {\n      document.getElementById('circle-first').style.fill = \"#ABC839\";\n      document.getElementById('circle-second').style.fill = \"#CCCCCC\";\n      document.getElementById('circle-third').style.fill = \"#CCCCCC\";\n    } else if (currentSlide == 1) {\n      document.getElementById('circle-first').style.fill = \"#CCCCCC\";\n      document.getElementById('circle-second').style.fill = \"#ABC839\";\n      document.getElementById('circle-third').style.fill = \"#CCCCCC\";\n    } else if (currentSlide == 2) {\n      document.getElementById('circle-first').style.fill = \"#CCCCCC\";\n      document.getElementById('circle-second').style.fill = \"#CCCCCC\";\n      document.getElementById('circle-third').style.fill = \"#ABC839\";\n    }\n  }\n\n  function previousSlide() {\n    goToSlide(currentSlide - 1);\n  }\n\n  function goToSlide(n) {\n    slides[currentSlide].className = 'slider-images';\n    currentSlide = (n + slides.length) % slides.length;\n    slides[currentSlide].className = 'slider-images showing';\n  }\n\n  var worksBtnFirst = document.getElementById('works-btn-first');\n  var worksBtnSecond = document.getElementById('works-btn-second');\n  var worksBtnThird = document.getElementById('works-btn-third');\n\n  worksBtnFirst.onclick = function () {\n    goToSlide(0);\n    document.getElementById('circle-first').style.fill = \"#ABC839\";\n    document.getElementById('circle-second').style.fill = \"#CCCCCC\";\n    document.getElementById('circle-third').style.fill = \"#CCCCCC\";\n  };\n\n  worksBtnSecond.onclick = function () {\n    goToSlide(1);\n    document.getElementById('circle-first').style.fill = \"#CCCCCC\";\n    document.getElementById('circle-second').style.fill = \"#ABC839\";\n    document.getElementById('circle-third').style.fill = \"#CCCCCC\";\n  };\n\n  worksBtnThird.onclick = function () {\n    goToSlide(2);\n    document.getElementById('circle-first').style.fill = \"#CCCCCC\";\n    document.getElementById('circle-second').style.fill = \"#CCCCCC\";\n    document.getElementById('circle-third').style.fill = \"#ABC839\";\n  };\n});\n\n//# sourceURL=webpack:///./src/js/components/our-works.js?");

/***/ }),

/***/ "./src/js/components/price-counter-form.js":
/*!*************************************************!*\
  !*** ./src/js/components/price-counter-form.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  // function setCursorPosition(pos, elem) {\n  //     elem.focus();\n  //     if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);\n  //     else if (elem.createTextRange) {\n  //         var range = elem.createTextRange();\n  //         range.collapse(true);\n  //         range.moveEnd(\"character\", pos);\n  //         range.moveStart(\"character\", pos);\n  //         range.select()\n  //     }\n  // }\n  // function mask(event) {\n  //     var matrix = \"+375 (__) ___ __ __\",\n  //         i = 0,\n  //         def = matrix.replace(/\\D/g, \"\"),\n  //         val = this.value.replace(/\\D/g, \"\");\n  //     if (def.length >= val.length) val = def;\n  //     this.value = matrix.replace(/./g, function(a) {\n  //         return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\n  //     });\n  // };\n  // var input = document.querySelector(\"#tel-form\");\n  // input.addEventListener(\"input\", mask, false);\n  // Get the modal\n  var modal = document.getElementById(\"price-modal\"); // Get the button that opens the modal\n\n  var btn = document.getElementsByClassName(\"btn-cost\")[0]; // Get the <span> element that closes the modal\n\n  var span = document.getElementsByClassName(\"close\")[0]; // When the user clicks on the button, open the modal\n\n  btn.onclick = function () {\n    modal.style.display = \"block\";\n  }; // When the user clicks on <span> (x), close the modal\n\n\n  span.onclick = function () {\n    modal.style.display = \"none\";\n  }; // When the user clicks anywhere outside of the modal, close it\n\n\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n    }\n  };\n});\n\n//# sourceURL=webpack:///./src/js/components/price-counter-form.js?");

/***/ }),

/***/ "./src/js/components/price-counter.js":
/*!********************************************!*\
  !*** ./src/js/components/price-counter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"DOMContentLoaded\", function () {\n  function setCursorPosition(pos, elem) {\n    elem.focus();\n    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {\n      var range = elem.createTextRange();\n      range.collapse(true);\n      range.moveEnd(\"character\", pos);\n      range.moveStart(\"character\", pos);\n      range.select();\n    }\n  }\n\n  function mask(event) {\n    var matrix = \"+375 (__) ___ __ __\",\n        i = 0,\n        def = matrix.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\");\n    if (def.length >= val.length) val = def;\n    this.value = matrix.replace(/./g, function (a) {\n      return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a;\n    });\n  }\n\n  ;\n  var input = document.querySelector(\"#tel\");\n  input.addEventListener(\"input\", mask, false);\n});\n\n//# sourceURL=webpack:///./src/js/components/price-counter.js?");

/***/ }),

/***/ "./src/js/components/products.js":
/*!***************************************!*\
  !*** ./src/js/components/products.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var slideIndex = 1;\n  showSlides(slideIndex);\n  var prodBtnFirst = document.getElementById(\"btn-prod-first\");\n  var prodBtnSecond = document.getElementById(\"btn-prod-second\");\n  var prodBtnThird = document.getElementById(\"btn-prod-third\");\n  var prodBtnFourth = document.getElementById(\"btn-prod-fourth\");\n\n  prodBtnFirst.onclick = function () {\n    showSlides(1);\n  };\n\n  prodBtnSecond.onclick = function () {\n    showSlides(2);\n  };\n\n  prodBtnThird.onclick = function () {\n    showSlides(3);\n  };\n\n  prodBtnFourth.onclick = function () {\n    showSlides(4);\n  };\n\n  function showSlides(n) {\n    var i;\n    var slides = document.querySelectorAll(\".slider-item-prod\");\n    var btns = document.querySelectorAll(\".btn-class\");\n\n    if (n > slides.length) {\n      slideIndex = 1;\n    }\n\n    if (n < 1) {\n      slideIndex = slides.length;\n    }\n\n    for (i = 0; i < slides.length; i++) {\n      slides[i].style.display = \"none\";\n    }\n\n    for (i = 0; i < btns.length; i++) {\n      btns[i].className = btns[i].className.replace(\" active\", \"\");\n    }\n\n    slides[n - 1].style.display = \"flex\";\n    btns[n - 1].className += \" active\";\n  }\n});\n\n//# sourceURL=webpack:///./src/js/components/products.js?");

/***/ }),

/***/ "./src/js/components/specials.js":
/*!***************************************!*\
  !*** ./src/js/components/specials.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var controls = document.querySelectorAll('.controls');\n\n  for (var i = 0; i < controls.length; i++) {\n    controls[i].style.display = 'inline-block';\n  }\n\n  var slides = document.querySelectorAll('#slides .slide');\n  var currentSlide = 0;\n  var slideInterval = setInterval(nextSlide, 30000);\n\n  function nextSlide() {\n    goToSlide(currentSlide + 1);\n\n    if (currentSlide == 0) {\n      document.getElementById('spec-circle-first').style.fill = \"#ABC839\";\n      document.getElementById('spec-circle-second').style.fill = \"#CCCCCC\";\n      document.getElementById('spec-circle-third').style.fill = \"#CCCCCC\";\n    } else if (currentSlide == 1) {\n      document.getElementById('spec-circle-first').style.fill = \"#CCCCCC\";\n      document.getElementById('spec-circle-second').style.fill = \"#ABC839\";\n      document.getElementById('spec-circle-third').style.fill = \"#CCCCCC\";\n    } else if (currentSlide == 2) {\n      document.getElementById('spec-circle-first').style.fill = \"#CCCCCC\";\n      document.getElementById('spec-circle-second').style.fill = \"#CCCCCC\";\n      document.getElementById('spec-circle-third').style.fill = \"#ABC839\";\n    }\n  }\n\n  function previousSlide() {\n    goToSlide(currentSlide - 1);\n\n    if (currentSlide == 0) {\n      document.getElementById('spec-circle-first').style.fill = \"#ABC839\";\n      document.getElementById('spec-circle-second').style.fill = \"#CCCCCC\";\n      document.getElementById('spec-circle-third').style.fill = \"#CCCCCC\";\n    } else if (currentSlide == 1) {\n      document.getElementById('spec-circle-first').style.fill = \"#CCCCCC\";\n      document.getElementById('spec-circle-second').style.fill = \"#ABC839\";\n      document.getElementById('spec-circle-third').style.fill = \"#CCCCCC\";\n    } else if (currentSlide == 2) {\n      document.getElementById('spec-circle-first').style.fill = \"#CCCCCC\";\n      document.getElementById('spec-circle-second').style.fill = \"#CCCCCC\";\n      document.getElementById('spec-circle-third').style.fill = \"#ABC839\";\n    }\n  }\n\n  function goToSlide(n) {\n    slides[currentSlide].className = 'slide';\n    currentSlide = (n + slides.length) % slides.length;\n    slides[currentSlide].className = 'slide showing';\n  }\n\n  var specBtnFirst = document.getElementById('spec-btn-first');\n  var specBtnSecond = document.getElementById('spec-btn-second');\n  var specBtnThird = document.getElementById('spec-btn-third');\n\n  specBtnFirst.onclick = function () {\n    goToSlide(0);\n    document.getElementById('spec-circle-first').style.fill = \"#ABC839\";\n    document.getElementById('spec-circle-second').style.fill = \"#CCCCCC\";\n    document.getElementById('spec-circle-third').style.fill = \"#CCCCCC\";\n  };\n\n  specBtnSecond.onclick = function () {\n    goToSlide(1);\n    document.getElementById('spec-circle-first').style.fill = \"#CCCCCC\";\n    document.getElementById('spec-circle-second').style.fill = \"#ABC839\";\n    document.getElementById('spec-circle-third').style.fill = \"#CCCCCC\";\n  };\n\n  specBtnThird.onclick = function () {\n    goToSlide(2);\n    document.getElementById('spec-circle-first').style.fill = \"#CCCCCC\";\n    document.getElementById('spec-circle-second').style.fill = \"#CCCCCC\";\n    document.getElementById('spec-circle-third').style.fill = \"#ABC839\";\n  };\n\n  var next = document.getElementById('next');\n  var previous = document.getElementById('previous');\n\n  next.onclick = function () {\n    nextSlide();\n  };\n\n  previous.onclick = function () {\n    previousSlide();\n  };\n});\n\n//# sourceURL=webpack:///./src/js/components/specials.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hero */ \"./src/js/components/hero.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_hero__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_price_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/price-counter */ \"./src/js/components/price-counter.js\");\n/* harmony import */ var _components_price_counter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_price_counter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_specials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/specials */ \"./src/js/components/specials.js\");\n/* harmony import */ var _components_specials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_specials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_our_works__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/our-works */ \"./src/js/components/our-works.js\");\n/* harmony import */ var _components_our_works__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_our_works__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_price_counter_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/price-counter-form */ \"./src/js/components/price-counter-form.js\");\n/* harmony import */ var _components_price_counter_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_price_counter_form__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products */ \"./src/js/components/products.js\");\n/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_products__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });