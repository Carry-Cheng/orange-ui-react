(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["OrangeUI"] = factory(require("react"));
	else
		root["OrangeUI"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/exposure/Exposure.tsx":
/*!****************************************!*\
  !*** ./packages/exposure/Exposure.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Exposure = /** @class */ (function (_super) {\r\n    __extends(Exposure, _super);\r\n    function Exposure(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.min = 0;\r\n        _this.max = window.innerHeight;\r\n        _this.minLeft = 0;\r\n        _this.maxLeft = window.innerWidth;\r\n        /// it's a data array of the target div's top\r\n        _this.origin = [];\r\n        _this.uploadCache = new Map();\r\n        _this._target = [];\r\n        _this.init = function () {\r\n            if (!_this.props.className) {\r\n                return false;\r\n            }\r\n            _this.initEvent();\r\n        };\r\n        _this.reset = function () {\r\n            _this.baseComputed();\r\n            _this.coreComputed();\r\n        };\r\n        _this.initEvent = function () {\r\n            document.addEventListener('touchend', function (event) {\r\n                _this.reset();\r\n            }, { passive: true });\r\n            if (_this.props.immediate) {\r\n                var timeout_1 = window.setTimeout(function () {\r\n                    window.clearTimeout(timeout_1);\r\n                    _this.reset();\r\n                }, _this.props.delay);\r\n            }\r\n        };\r\n        _this.baseComputed = function () {\r\n            _this.origin = [];\r\n            var dom = window.document.querySelectorAll(\".\" + _this.props.className);\r\n            dom.forEach(function (element) {\r\n                var attr = element.attributes.getNamedItem('data-exposureid');\r\n                _this.origin.push({\r\n                    exposureid: attr ? parseInt(attr.value) : 0,\r\n                    top: element.getBoundingClientRect().top,\r\n                    left: element.getBoundingClientRect().left,\r\n                    width: element.offsetWidth,\r\n                    height: element.offsetHeight\r\n                });\r\n            });\r\n        };\r\n        _this.coreComputed = function () {\r\n            var target = [];\r\n            var child = window.document.querySelector(\".\" + _this.props.className);\r\n            if (!child) {\r\n                return false;\r\n            }\r\n            var father = _this.parentNodeHasScorll(child);\r\n            _this.min = 0;\r\n            _this.minLeft = 0;\r\n            if (father) {\r\n                _this.min = father.scrollTop;\r\n                _this.minLeft = father.scrollLeft;\r\n            }\r\n            _this.max = _this.min + window.innerHeight;\r\n            _this.maxLeft = _this.minLeft + window.innerWidth;\r\n            _this.origin.forEach(function (element, index) {\r\n                /// strict mode, the box in visual area\r\n                /// vertical and horizontal\r\n                if ((element.top > _this.min && (element.top + element.height) < _this.max) && (element.left > _this.minLeft && (element.left + element.width) < _this.maxLeft)) {\r\n                    if (!_this.uploadCache.get(index)) {\r\n                        target.push(element.exposureid);\r\n                    }\r\n                    _this.uploadCache.set(index, true);\r\n                }\r\n            });\r\n            if (JSON.stringify(target) !== JSON.stringify(_this._target)) {\r\n                _this._target = target;\r\n                _this.props.onExposure(target);\r\n            }\r\n        };\r\n        _this.clearCache = function () {\r\n            _this.uploadCache.clear();\r\n            _this.reset();\r\n        };\r\n        _this.clearCacheOnly = function () {\r\n            _this.uploadCache.clear();\r\n        };\r\n        _this.state = {};\r\n        return _this;\r\n    }\r\n    Exposure.prototype.componentDidMount = function () {\r\n        this.init();\r\n    };\r\n    Exposure.prototype.parentNodeHasScorll = function (child) {\r\n        if (!child) {\r\n            return null;\r\n        }\r\n        else {\r\n            if (child.parentNode) {\r\n                var parentNode = child.parentNode;\r\n                if (parentNode.scrollHeight > parentNode.clientHeight || parentNode.offsetHeight > parentNode.clientHeight) {\r\n                    return parentNode;\r\n                }\r\n                else {\r\n                    return this.parentNodeHasScorll(parentNode);\r\n                }\r\n            }\r\n            else {\r\n                return null;\r\n            }\r\n        }\r\n    };\r\n    Exposure.prototype.render = function () {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { width: 0, height: 0 } }));\r\n    };\r\n    Exposure.defaultProps = {\r\n        immediate: false,\r\n        delay: 1000\r\n    };\r\n    return Exposure;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Exposure);\r\n\n\n//# sourceURL=webpack://OrangeUI/./packages/exposure/Exposure.tsx?");

/***/ }),

/***/ "./packages/exposure/index.js":
/*!************************************!*\
  !*** ./packages/exposure/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Exposure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exposure */ \"./packages/exposure/Exposure.tsx\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Exposure__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://OrangeUI/./packages/exposure/index.js?");

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./packages/exposure ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./packages/exposure */\"./packages/exposure/index.js\");\n\n\n//# sourceURL=webpack://OrangeUI/multi_./packages/exposure?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://OrangeUI/external_%22react%22?");

/***/ })

/******/ });
});