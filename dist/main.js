/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  font-size: 1.05rem;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  height: 100vh;\\r\\n  background-color: rgb(230, 230, 230);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-style: italic;\\r\\n  font-size: 1.05rem;\\r\\n}\\r\\n\\r\\n#mainContainer {\\r\\n  width: 80vw;\\r\\n  background-color: white;\\r\\n  border: 1px solid rgb(235, 235, 235);\\r\\n  box-shadow: 3px 3px 3px rgb(102, 102, 102);\\r\\n}\\r\\n\\r\\n#title {\\r\\n  padding: 20px 20px;\\r\\n  border-bottom: 1px solid rgba(156, 156, 156, 0.4);\\r\\n  font-size: 1.4rem;\\r\\n  font-weight: 400;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#addContainer {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid rgba(156, 156, 156, 0.4);\\r\\n  padding: 10px 20px;\\r\\n}\\r\\n\\r\\n#addInput {\\r\\n  border: none;\\r\\n  height: 25px;\\r\\n  font-size: 1.05rem;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n#clearBtn {\\r\\n  background-color: rgb(245, 245, 245);\\r\\n  height: 45px;\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  color: rgb(100, 100, 100);\\r\\n}\\r\\n\\r\\n#todoContainer {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.task-Div {\\r\\n  width: 100%;\\r\\n  border-bottom: 1px solid rgba(156, 156, 156, 0.4);\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.task-Li {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n  padding: 20px 20px;\\r\\n}\\r\\n\\r\\n.task-Div-Inner {\\r\\n  width: 70%;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.task-Lbl {\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n.task-Drag {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n.task-Del {\\r\\n  width: 20px;\\r\\n  margin-right: 14px;\\r\\n}\\r\\n\\r\\n.task-Edit {\\r\\n  width: 20px;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\n.task-Edit-Div {\\r\\n  margin-right: 20px;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.task-Edit-Input {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.task-Edit-OK {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n#refreshBtn {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n#addBt {\\r\\n  width: 20px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\r\n  constructor(index) {\r\n    this.index = index;\r\n    this.desc = '';\r\n    this.done = false;\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/ToDo.js?");

/***/ }),

/***/ "./src/ToDoLibrary.js":
/*!****************************!*\
  !*** ./src/ToDoLibrary.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoLibrary)\n/* harmony export */ });\n/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.js */ \"./src/ToDo.js\");\n\r\n\r\nclass ToDoLibrary {\r\n  arrToDos = [];\r\n\r\n  add = (dn) => {\r\n    const xtodo = new _ToDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.arrToDos.length);\r\n    xtodo.desc = dn;\r\n    this.arrToDos.push(xtodo);\r\n  };\r\n\r\n  remove = (ix) => {\r\n    this.arrToDos.splice(ix, 1);\r\n  };\r\n\r\n  rename = (pos, newName) => {\r\n    this.arrToDos[pos].desc = newName;\r\n  };\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/ToDoLibrary.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _artwork_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artwork/refresh.png */ \"./src/artwork/refresh.png\");\n/* harmony import */ var _artwork_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artwork/add.png */ \"./src/artwork/add.png\");\n/* harmony import */ var _artwork_drag_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artwork/drag.png */ \"./src/artwork/drag.png\");\n/* harmony import */ var _artwork_delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artwork/delete.png */ \"./src/artwork/delete.png\");\n/* harmony import */ var _artwork_edit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artwork/edit.png */ \"./src/artwork/edit.png\");\n/* harmony import */ var _artwork_ok_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artwork/ok.png */ \"./src/artwork/ok.png\");\n/* harmony import */ var _ToDoLibrary_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToDoLibrary.js */ \"./src/ToDoLibrary.js\");\n/* eslint-disable no-use-before-define */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst refreshBtn = document.querySelector('#refreshBtn');\r\nconst addBtn = document.querySelector('#addBtn');\r\nconst addBt = document.querySelector('#addBt');\r\nconst addInput = document.querySelector('#addInput');\r\nconst todoContainer = document.querySelector('#todoContainer');\r\nconst clearBtn = document.querySelector('#clearBtn');\r\n\r\nconst tasks = new _ToDoLibrary_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\r\n\r\nconst setChks = () => {\r\n  const allChks = document.querySelectorAll('.task-Chk');\r\n  const xallChks = Array.from(allChks);\r\n\r\n  for (let i = 0; i < xallChks.length; i += 1) {\r\n    xallChks[i].addEventListener('change', () => {\r\n      if (tasks.arrToDos[i].done === false) {\r\n        tasks.arrToDos[i].done = true;\r\n        xallChks[i].checked = true;\r\n      } else {\r\n        tasks.arrToDos[i].done = false;\r\n        xallChks[i].checked = false;\r\n      }\r\n      window.localStorage.setItem('tasks', JSON.stringify(tasks.arrToDos));\r\n    });\r\n  }\r\n};\r\n\r\nconst setDels = () => {\r\n  const allDels = document.querySelectorAll('.task-Del');\r\n  const xallDels = Array.from(allDels);\r\n\r\n  for (let i = 0; i < xallDels.length; i += 1) {\r\n    xallDels[i].addEventListener('click', () => {\r\n      tasks.remove(i);\r\n      refreshList();\r\n    });\r\n  }\r\n};\r\n\r\nconst setEdits = () => {\r\n  const allEdits = document.querySelectorAll('.task-Edit');\r\n  const allTaskEditDivs = document.querySelectorAll('.task-Edit-Div');\r\n  const xallEdits = Array.from(allEdits);\r\n  const xallTaskEditDivs = Array.from(allTaskEditDivs);\r\n\r\n  for (let i = 0; i < xallEdits.length; i += 1) {\r\n    xallEdits[i].addEventListener('click', () => {\r\n      xallTaskEditDivs[i].style.display = 'flex';\r\n    });\r\n  }\r\n};\r\n\r\nconst setOKs = () => {\r\n  const allOKs = document.querySelectorAll('.task-Edit-OK');\r\n  const allTaskEditDivs = document.querySelectorAll('.task-Edit-Div');\r\n  const allTaskEditInputs = document.querySelectorAll('.task-Edit-Input');\r\n  const xallOKs = Array.from(allOKs);\r\n  const xallTaskEditDivs = Array.from(allTaskEditDivs);\r\n  const xallTaskEditInputs = Array.from(allTaskEditInputs);\r\n\r\n  for (let i = 0; i < xallOKs.length; i += 1) {\r\n    xallOKs[i].addEventListener('click', () => {\r\n      tasks.rename(i, xallTaskEditInputs[i].value);\r\n      xallTaskEditDivs[i].style.display = 'none';\r\n      refreshList();\r\n    });\r\n  }\r\n};\r\n\r\nconst refreshList = () => {\r\n  todoContainer.innerHTML = '';\r\n  let c = 0;\r\n\r\n  tasks.arrToDos.forEach((task) => {\r\n    task.index = c;\r\n    c += 1;\r\n\r\n    const taskDiv = document.createElement('div');\r\n    const taskLi = document.createElement('li');\r\n    const taskDivInner = document.createElement('div');\r\n    const taskChk = document.createElement('input');\r\n    const taskLbl = document.createElement('label');\r\n    const taskDrag = new Image();\r\n    const taskDel = new Image();\r\n    const taskEditBtn = new Image();\r\n    const taskEditDiv = document.createElement('div');\r\n    const taskEditInput = document.createElement('input');\r\n    const taskEditOK = new Image();\r\n\r\n    taskChk.setAttribute('type', 'checkbox');\r\n    taskChk.setAttribute('id', `chk${task.index}`);\r\n\r\n    if (task.done === true) {\r\n      taskChk.checked = true;\r\n    }\r\n\r\n    taskLbl.setAttribute('for', `chk${task.index}`);\r\n    taskLbl.innerText = task.desc;\r\n\r\n    taskDrag.src = _artwork_drag_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    taskDrag.setAttribute('alt', 'Drag');\r\n\r\n    taskDel.src = _artwork_delete_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    taskDel.setAttribute('alt', 'Delete');\r\n\r\n    taskEditBtn.src = _artwork_edit_png__WEBPACK_IMPORTED_MODULE_5__;\r\n    taskEditBtn.setAttribute('alt', 'Edit');\r\n\r\n    taskEditOK.src = _artwork_ok_png__WEBPACK_IMPORTED_MODULE_6__;\r\n    taskEditBtn.setAttribute('alt', 'OK');\r\n\r\n    taskDiv.classList.add('task-Div');\r\n    taskLi.classList.add('task-Li');\r\n    taskDivInner.classList.add('task-Div-Inner');\r\n    taskChk.classList.add('task-Chk');\r\n    taskLbl.classList.add('task-Lbl');\r\n    taskDrag.classList.add('task-Drag');\r\n    taskDel.classList.add('task-Del');\r\n    taskEditBtn.classList.add('task-Edit');\r\n    taskEditDiv.classList.add('task-Edit-Div');\r\n    taskEditInput.classList.add('task-Edit-Input');\r\n    taskEditOK.classList.add('task-Edit-OK');\r\n\r\n    taskDivInner.append(taskDel);\r\n    taskDivInner.append(taskEditBtn);\r\n    taskEditDiv.append(taskEditInput);\r\n    taskEditDiv.append(taskEditOK);\r\n    taskDivInner.append(taskEditDiv);\r\n    taskDivInner.append(taskChk);\r\n    taskDivInner.append(taskLbl);\r\n    taskLi.append(taskDivInner);\r\n    taskLi.append(taskDrag);\r\n    taskDiv.append(taskLi);\r\n\r\n    todoContainer.append(taskDiv);\r\n  });\r\n\r\n  window.localStorage.setItem('tasks', JSON.stringify(tasks.arrToDos));\r\n  setChks();\r\n  setDels();\r\n  setEdits();\r\n  setOKs();\r\n};\r\n\r\nwindow.addEventListener('load', () => {\r\n  refreshBtn.src = _artwork_refresh_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  addBt.src = _artwork_add_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n  const localStorageItem = window.localStorage.getItem('tasks');\r\n\r\n  if (localStorageItem) {\r\n    tasks.arrToDos = JSON.parse(localStorageItem);\r\n  }\r\n\r\n  refreshList();\r\n});\r\n\r\naddBtn.addEventListener('click', () => {\r\n  tasks.add(addInput.value);\r\n  addInput.value = '';\r\n  refreshList();\r\n});\r\n\r\nclearBtn.addEventListener('click', () => {\r\n  const xtasks = [];\r\n\r\n  for (let i = 0; i < tasks.arrToDos.length; i += 1) {\r\n    if (tasks.arrToDos[i].done === false) {\r\n      xtasks.push(tasks.arrToDos[i]);\r\n    }\r\n  }\r\n\r\n  tasks.arrToDos = xtasks;\r\n\r\n  refreshList();\r\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/artwork/add.png":
/*!*****************************!*\
  !*** ./src/artwork/add.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8835a517234a229acd4a.png\";\n\n//# sourceURL=webpack://to-do-list/./src/artwork/add.png?");

/***/ }),

/***/ "./src/artwork/delete.png":
/*!********************************!*\
  !*** ./src/artwork/delete.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e53ddc1dedb256ae54e.png\";\n\n//# sourceURL=webpack://to-do-list/./src/artwork/delete.png?");

/***/ }),

/***/ "./src/artwork/drag.png":
/*!******************************!*\
  !*** ./src/artwork/drag.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0831c8f47f63f474b403.png\";\n\n//# sourceURL=webpack://to-do-list/./src/artwork/drag.png?");

/***/ }),

/***/ "./src/artwork/edit.png":
/*!******************************!*\
  !*** ./src/artwork/edit.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9539a6abc84f7a30352a.png\";\n\n//# sourceURL=webpack://to-do-list/./src/artwork/edit.png?");

/***/ }),

/***/ "./src/artwork/ok.png":
/*!****************************!*\
  !*** ./src/artwork/ok.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2b4bba181f6ccf84f84.png\";\n\n//# sourceURL=webpack://to-do-list/./src/artwork/ok.png?");

/***/ }),

/***/ "./src/artwork/refresh.png":
/*!*********************************!*\
  !*** ./src/artwork/refresh.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47713291635150c481f4.png\";\n\n//# sourceURL=webpack://to-do-list/./src/artwork/refresh.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;