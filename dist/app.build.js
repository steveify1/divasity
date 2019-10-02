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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slick_slider_js_slickslider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slick_slider/js/slickslider.js */ "./src/slick_slider/js/slickslider.js");
// jshint esversion: 6

console.log(_slick_slider_js_slickslider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
const slider = new _slick_slider_js_slickslider_js__WEBPACK_IMPORTED_MODULE_0__["default"](".testimonials-outline", {
    interval: 5000,
});

/***/ }),

/***/ "./src/slick_slider/js/slickslider.js":
/*!********************************************!*\
  !*** ./src/slick_slider/js/slickslider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// jshint esversion: 6

class slickSlider {

    /**
     * The slide constructor
     */
    constructor(parent, {
        interval
    }) {
        this.slider = document.querySelector(`${parent} .slick-slider`);
        this.slides = document.querySelectorAll(`${parent} .slick-slider .slick-slide`);
        this.current = 1;
        this.maxScroll = 0;
        this.sliderWidth = 0;
        this.numSlides = this.slides.length;
        this.setMaxScrollNumber.bind(this);

        
        console.log(this.slider, parent);

        // Set the interval and fall back to 6 seconds
        this.interval = interval || 6000;

        // Set the MaxScrollNumber
        this.setMaxScrollNumber();

        this.init();
    }


    setMaxScrollNumber() {
        this.sliderWidth = this.slider.clientWidth;
        // Obtaining the actual width of each slide (as an arbitrary percentage of the slider container's width)
        this.eachSlideWidth = this.slides[0].clientWidth;
        // Obtaining the number of scrolls as a function of the width of eachSlide, the sliderWidth itself and the number of slides within the slider container
        this.maxScroll = Math.ceil(this.numSlides / (this.sliderWidth / this.eachSlideWidth)) - 1;
        console.log(this.maxScroll);
    }

    updateMaxScrollNumberOnWindowResize() {
        window.addEventListener("resize", () => {
            this.setMaxScrollNumber();
        });
    }

    init() {
        // Property Check
        console.log("hi");
        if (this.slider.scrollTo) {
            setInterval(() => {
                if (this.current > this.maxScroll) {

                    this.slider.scrollTo(0, 0);
                    this.current = 1;
                    return;
                }
                this.slider.scrollTo(this.sliderWidth * this.current, 0);
                this.current = this.current + 1;
            }, this.interval);
        }

        this.updateMaxScrollNumberOnWindowResize();
    }

}

/* harmony default export */ __webpack_exports__["default"] = (slickSlider);


/***/ })

/******/ });