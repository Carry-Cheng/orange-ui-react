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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./packages/refresh/Refresh.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./packages/refresh/Refresh.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".orange-refresh {\\n  overflow: hidden; }\\n  .orange-refresh .orange-refresh-null {\\n    width: 100%;\\n    height: 60px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 12px;\\n    color: #E21A1A;\\n    font-weight: normal; }\\n  .orange-refresh .orange-refresh-message {\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n    .orange-refresh .orange-refresh-message .orange-refresh-message-box {\\n      width: 100%;\\n      height: 40px;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center; }\\n      .orange-refresh .orange-refresh-message .orange-refresh-message-box .orange-refresh-message-box-text {\\n        font-size: 12px;\\n        color: #E21A1A;\\n        font-weight: normal; }\\n  .orange-refresh .orange-refresh-up {\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n    .orange-refresh .orange-refresh-up .orange-refresh-up-box {\\n      width: 100%;\\n      height: 40px;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center; }\\n      .orange-refresh .orange-refresh-up .orange-refresh-up-box .orange-refresh-up-box-label {\\n        width: 20px;\\n        text-align: center;\\n        font-size: 12px;\\n        color: #999999;\\n        font-weight: normal; }\\n      .orange-refresh .orange-refresh-up .orange-refresh-up-box .orange-refresh-up-box-text {\\n        font-size: 12px;\\n        color: #999999;\\n        font-weight: normal; }\\n  .orange-refresh .orange-refresh-center {\\n    overflow-y: auto;\\n    overflow-x: hidden;\\n    position: relative; }\\n  .orange-refresh .orange-refresh-down {\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n    .orange-refresh .orange-refresh-down .orange-refresh-down-box {\\n      width: 100%;\\n      height: 40px;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center; }\\n      .orange-refresh .orange-refresh-down .orange-refresh-down-box .orange-refresh-down-box-label {\\n        width: 20px;\\n        text-align: center;\\n        font-size: 12px;\\n        color: #999999;\\n        font-weight: normal; }\\n      .orange-refresh .orange-refresh-down .orange-refresh-down-box .orange-refresh-down-box-text {\\n        font-size: 12px;\\n        color: #999999;\\n        font-weight: normal; }\\n  .orange-refresh .rotateY {\\n    animation: rotate180 1s;\\n    transform: rotateZ(180deg); }\\n\\n@keyframes rotate180 {\\n  from {\\n    transform: rotateZ(0deg); }\\n  to {\\n    transform: rotateZ(180deg); } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://OrangeUI/./packages/refresh/Refresh.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://OrangeUI/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://OrangeUI/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./packages/refresh/Refresh.scss":
/*!***************************************!*\
  !*** ./packages/refresh/Refresh.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Refresh.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./packages/refresh/Refresh.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://OrangeUI/./packages/refresh/Refresh.scss?");

/***/ }),

/***/ "./packages/refresh/Refresh.tsx":
/*!**************************************!*\
  !*** ./packages/refresh/Refresh.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Refresh_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Refresh.scss */ \"./packages/refresh/Refresh.scss\");\n/* harmony import */ var _Refresh_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Refresh_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Refresh = /** @class */ (function (_super) {\r\n    __extends(Refresh, _super);\r\n    function Refresh(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.refRefreshMessage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\r\n        _this.refRefresh = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\r\n        _this.refRefreshUp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\r\n        _this.refRefreshCenter = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\r\n        _this.refRefreshDown = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\r\n        _this.animationFrameID = -1;\r\n        _this.start = 0;\r\n        _this.move = 0;\r\n        _this.currentTime = 0;\r\n        _this.sourceMove = 0;\r\n        _this.timestamp = 0;\r\n        _this.timeout = undefined;\r\n        _this.onTouchStart = function (event) {\r\n            if (event.touches.length > 0) {\r\n                if (_this.timeout) {\r\n                    clearTimeout(_this.timeout);\r\n                }\r\n                if (_this.refreshMessageDOM) {\r\n                    _this.refreshMessageDOM.style.height = \"0px\";\r\n                }\r\n                _this.setState({ dropDownStatus: 0 });\r\n                _this.setState({ pullUpStatus: 0 });\r\n                _this.start = event.touches[0].clientY;\r\n                _this.move = 0;\r\n            }\r\n        };\r\n        _this.onTouchMove = function (event) {\r\n            if (event.touches.length > 0) {\r\n                _this.move = event.touches[0].clientY - _this.start;\r\n                if (_this.move > 150) {\r\n                    _this.move = 150;\r\n                }\r\n                if (_this.move < -120) {\r\n                    _this.move = -120;\r\n                }\r\n                _this.handleTouchMove();\r\n            }\r\n        };\r\n        _this.onTouchEnd = function (event) {\r\n            // This synthetic event is reused for performance reasons.\r\n            // If you're seeing this, you're accessing the method `timeStamp` on a released/nullified synthetic event.\r\n            // This is a no-op function. If you must keep the original synthetic event around, use event.persist().\r\n            // See https://fb.me/react-event-pooling for more information.\r\n            event.persist();\r\n            _this.start = 0;\r\n            _this.handleTouchEnd(event);\r\n        };\r\n        _this.onTouchCancel = function (event) {\r\n            _this.start = 0;\r\n            _this.handleTouchEnd(event);\r\n        };\r\n        _this.state = {\r\n            dropDownStatus: 0,\r\n            pullUpStatus: 0,\r\n            dropDownMessage: '',\r\n            hasMore: true\r\n        };\r\n        return _this;\r\n    }\r\n    Refresh.prototype.componentDidMount = function () {\r\n        if (this.refRefreshMessage.current) {\r\n            this.refreshMessageDOM = this.refRefreshMessage.current;\r\n        }\r\n        if (this.refRefreshUp.current) {\r\n            this.refreshUpDOM = this.refRefreshUp.current;\r\n        }\r\n        if (this.refRefreshCenter.current) {\r\n            this.refreshCenterDOM = this.refRefreshCenter.current;\r\n        }\r\n        if (this.refRefreshDown.current) {\r\n            this.refreshDownDOM = this.refRefreshDown.current;\r\n        }\r\n    };\r\n    Refresh.prototype.isDropDown = function () {\r\n        if (!this.refreshCenterDOM || !this.props.dropDown) {\r\n            return false;\r\n        }\r\n        if (this.move > 0 && this.refreshCenterDOM.scrollTop === 0) {\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n    Refresh.prototype.isPullUp = function () {\r\n        if (!this.refreshCenterDOM || !this.props.pullUp || !this.state.hasMore) {\r\n            return false;\r\n        }\r\n        if (this.move < 0 && (this.refreshCenterDOM.scrollTop + this.refreshCenterDOM.clientHeight) >= (this.refreshCenterDOM.scrollHeight - 1)) {\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n    Refresh.prototype.handleTouchMove = function () {\r\n        if (this.isDropDown() && this.refreshUpDOM) {\r\n            if (this.move < 25) {\r\n                this.setState({ dropDownStatus: 0 });\r\n            }\r\n            else if (this.move < this.props.dropDownLimit) {\r\n                this.setState({ dropDownStatus: 1 });\r\n            }\r\n            else {\r\n                this.setState({ dropDownStatus: 2 });\r\n            }\r\n            this.refreshUpDOM.style.height = this.move + \"px\";\r\n        }\r\n        if (this.isPullUp() && this.refreshDownDOM && this.refreshCenterDOM) {\r\n            if (Math.abs(this.move) < 25) {\r\n                this.setState({ pullUpStatus: 0 });\r\n            }\r\n            else if (Math.abs(this.move) < this.props.pullUpLimit) {\r\n                this.setState({ pullUpStatus: 1 });\r\n            }\r\n            else {\r\n                this.setState({ pullUpStatus: 2 });\r\n            }\r\n            this.refreshCenterDOM.style.transform = \"translateY(\" + this.move + \"px)\";\r\n            this.refreshDownDOM.style.height = Math.abs(this.move) + \"px\";\r\n            this.refreshDownDOM.style.transform = \"translateY(\" + this.move + \"px)\";\r\n        }\r\n    };\r\n    Refresh.prototype.handleTouchEnd = function (event) {\r\n        this.currentTime = 0;\r\n        this.sourceMove = this.move;\r\n        if (this.refreshUpDOM && this.refreshUpDOM.clientHeight > 0 && this.refreshUpDOM.clientHeight !== this.move) {\r\n            this.move = this.refreshUpDOM.clientHeight;\r\n            this.animateDropDown(event);\r\n            return false;\r\n        }\r\n        if (this.refreshDownDOM && this.refreshDownDOM.clientHeight > 0 && this.refreshDownDOM.clientHeight !== this.move && this.state.hasMore) {\r\n            this.move = this.refreshDownDOM.clientHeight;\r\n            this.animatePullUp(event);\r\n            return false;\r\n        }\r\n        if (this.isDropDown()) {\r\n            this.animateDropDown(event);\r\n        }\r\n        if (this.isPullUp()) {\r\n            this.animatePullUp(event);\r\n        }\r\n    };\r\n    Refresh.prototype.animateDropDown = function (event) {\r\n        var _this = this;\r\n        this.animationFrameID = window.requestAnimationFrame(function () {\r\n            if (_this.refreshUpDOM) {\r\n                var value = _this.linear(_this.currentTime, _this.sourceMove, -_this.sourceMove, _this.props.delay);\r\n                if (value <= 0) {\r\n                    value = 0;\r\n                    _this.refreshUpDOM.style.height = value + \"px\";\r\n                    if (event.timeStamp - _this.timestamp > _this.props.delay && _this.sourceMove > _this.props.dropDownLimit) {\r\n                        _this.timestamp = event.timeStamp;\r\n                        _this.props.onDropDown();\r\n                    }\r\n                }\r\n                else {\r\n                    _this.refreshUpDOM.style.height = value + \"px\";\r\n                    _this.currentTime += 17;\r\n                    _this.animateDropDown(event);\r\n                }\r\n            }\r\n        });\r\n    };\r\n    Refresh.prototype.animatePullUp = function (event) {\r\n        var _this = this;\r\n        this.animationFrameID = window.requestAnimationFrame(function () {\r\n            if (_this.refreshDownDOM && _this.refreshCenterDOM) {\r\n                var value = _this.linear(_this.currentTime, _this.sourceMove, Math.abs(_this.sourceMove), _this.props.delay);\r\n                if (Math.abs(value) < 25) {\r\n                    _this.setState({ pullUpStatus: 0 });\r\n                }\r\n                if (value >= 0) {\r\n                    value = 0;\r\n                    _this.refreshCenterDOM.style.transform = \"translateY(\" + value + \"px)\";\r\n                    _this.refreshDownDOM.style.height = Math.abs(value) + \"px\";\r\n                    _this.refreshDownDOM.style.transform = \"translateY(\" + value + \"px)\";\r\n                    if (event.timeStamp - _this.timestamp > 1000 && Math.abs(_this.sourceMove) > _this.props.pullUpLimit) {\r\n                        _this.timestamp = event.timeStamp;\r\n                        _this.props.onPullUp();\r\n                    }\r\n                }\r\n                else {\r\n                    _this.refreshCenterDOM.style.transform = \"translateY(\" + value + \"px)\";\r\n                    _this.refreshDownDOM.style.height = Math.abs(value) + \"px\";\r\n                    _this.refreshDownDOM.style.transform = \"translateY(\" + value + \"px)\";\r\n                    _this.currentTime += 17;\r\n                    _this.animatePullUp(event);\r\n                }\r\n            }\r\n        });\r\n    };\r\n    /**\r\n     * 线性运动\r\n     * @param t 当前时间\r\n     * @param b 初始值\r\n     * @param c 变量值\r\n     * @param d 持续时间\r\n     */\r\n    Refresh.prototype.linear = function (t, b, c, d) {\r\n        return c * t / d + b;\r\n    };\r\n    Refresh.prototype.setMessage = function (text) {\r\n        var _this = this;\r\n        if (text === void 0) { text = 'hi, welcome to Orange UI'; }\r\n        this.setState({ dropDownStatus: 3, dropDownMessage: text }, function () {\r\n            if (_this.refreshMessageDOM) {\r\n                _this.refreshMessageDOM.style.height = \"40px\";\r\n            }\r\n            console.info(_this.timeout);\r\n            if (_this.timeout) {\r\n                clearTimeout(_this.timeout);\r\n            }\r\n            _this.timeout = window.setTimeout(function () {\r\n                if (_this.timeout) {\r\n                    clearTimeout(_this.timeout);\r\n                }\r\n                _this.currentTime = 0;\r\n                _this.animateMessage();\r\n            }, _this.props.delayMessage);\r\n        });\r\n    };\r\n    Refresh.prototype.animateMessage = function () {\r\n        var _this = this;\r\n        this.animationFrameID = window.requestAnimationFrame(function () {\r\n            if (_this.refreshMessageDOM) {\r\n                var value = _this.linear(_this.currentTime, 40, -40, _this.props.delay);\r\n                if (value <= 0) {\r\n                    value = 0;\r\n                    _this.refreshMessageDOM.style.height = value + \"px\";\r\n                    _this.setState({ dropDownStatus: 3 });\r\n                }\r\n                else {\r\n                    _this.refreshMessageDOM.style.height = value + \"px\";\r\n                    _this.currentTime += 17;\r\n                    _this.animateMessage();\r\n                }\r\n            }\r\n        });\r\n    };\r\n    Refresh.prototype.setNull = function () {\r\n        this.setState({ pullUpStatus: 3, hasMore: false });\r\n    };\r\n    Refresh.prototype.render = function () {\r\n        var _this = this;\r\n        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { ref: this.refRefresh, className: \"orange-refresh\", style: {\r\n                height: this.props.height + 'px',\r\n                backgroundColor: this.props.backgroundColor\r\n            } },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { ref: this.refRefreshMessage, className: \"orange-refresh-message\" }, this.state.dropDownStatus === 3 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"orange-refresh-message-box\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-message-box-text\" }, this.state.dropDownMessage))) : ''),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { ref: this.refRefreshUp, className: \"orange-refresh-up\" }, this.state.dropDownStatus === 1 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"orange-refresh-up-box\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-up-box-label\" }, \"\\u2193\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-up-box-text\" }, \"\\u4E0B\\u62C9\\u5237\\u65B0\")))\r\n                :\r\n                    this.state.dropDownStatus === 2 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"orange-refresh-up-box\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-up-box-label rotateY\" }, \"\\u2193\"),\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-up-box-text\" }, \"\\u677E\\u5F00\\u52A0\\u8F7D\"))) : ''),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { ref: this.refRefreshCenter, className: \"orange-refresh-center\", style: {\r\n                    height: this.props.height + 'px',\r\n                    backgroundColor: this.props.backgroundColorContent\r\n                }, onTouchStart: function (event) { return _this.onTouchStart(event); }, onTouchMove: function (event) { return _this.onTouchMove(event); }, onTouchEnd: function (event) { return _this.onTouchEnd(event); }, onTouchCancel: function (event) { return _this.onTouchCancel(event); } },\r\n                this.props.children,\r\n                this.state.hasMore === false ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"orange-refresh-null\" }, this.props.nullText)) : ''),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { ref: this.refRefreshDown, className: \"orange-refresh-down\" }, this.state.pullUpStatus === 1 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"orange-refresh-down-box\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-down-box-label\" }, \"\\u2191\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-down-box-text\" }, \"\\u52A0\\u8F7D\\u66F4\\u591A\")))\r\n                :\r\n                    this.state.pullUpStatus === 2 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"orange-refresh-down-box\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-down-box-label rotateY\" }, \"\\u2191\"),\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"orange-refresh-down-box-text\" }, \"\\u677E\\u5F00\\u52A0\\u8F7D\"))) : '')));\r\n    };\r\n    Refresh.defaultProps = {\r\n        onDropDown: function () { },\r\n        onPullUp: function () { },\r\n        dropDown: false,\r\n        pullUp: false,\r\n        delay: 300,\r\n        delayMessage: 3000,\r\n        dropDownLimit: 90,\r\n        pullUpLimit: 90,\r\n        height: window.innerHeight,\r\n        backgroundColor: 'white',\r\n        backgroundColorContent: 'white',\r\n        nullText: '~~~没有更多数据~~~'\r\n    };\r\n    return Refresh;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Refresh);\r\n\n\n//# sourceURL=webpack://OrangeUI/./packages/refresh/Refresh.tsx?");

/***/ }),

/***/ "./packages/refresh/index.js":
/*!***********************************!*\
  !*** ./packages/refresh/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Refresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Refresh */ \"./packages/refresh/Refresh.tsx\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Refresh__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://OrangeUI/./packages/refresh/index.js?");

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./packages/refresh ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./packages/refresh */\"./packages/refresh/index.js\");\n\n\n//# sourceURL=webpack://OrangeUI/multi_./packages/refresh?");

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