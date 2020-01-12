(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/base.js":
/*!***************************!*\
  !*** ./src/array/base.js ***!
  \***************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n//map,reduce,filter,find,findIndex,every,some\r\nfunction map(array,callback) {\r\n  let arr = [];\r\n  array.forEach((item,index) => {\r\n    let result = callback(item,index);\r\n    arr.push(result);\r\n  });\r\n  return arr;\r\n}\r\n\r\nfunction reduce(array,callback,initValue) {\r\n  let total = initValue;\r\n  array.forEach((item,index) => {\r\n    total = callback(total,item,index);\r\n  })\r\n  return total;\r\n}\r\n\r\nfunction filter(array,callback) {\r\n  let arr = [];\r\n  array.forEach((item,index) => {\r\n    if(callback(item,index)){\r\n      arr.push(item);\r\n    }\r\n  })\r\n  return arr;\r\n}\r\nfunction find(array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n\r\n    if(callback(array[index],index)){\r\n      return array[index];\r\n    }\r\n  }\r\n  return undefined;\r\n}\r\nfunction findIndex(array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n\r\n    if(callback(array[index],index)){\r\n      return index;\r\n    }\r\n  }\r\n  return -1;\r\n}\r\n\r\nfunction every(array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if(!callback(array[index],index)){\r\n      return false\r\n    }\r\n    \r\n  }\r\n  return true;\r\n}\r\n\r\nfunction some(array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if(callback(array[index],index)){\r\n      return true\r\n    }\r\n    \r\n  }\r\n  return false;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/base.js?");

/***/ }),

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk1, chunk2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk1\", function() { return chunk1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk2\", function() { return chunk2; });\n//将一位数组拆成固定大小的二维数组\r\n\r\nfunction chunk1(array,size) {\r\n  let bigArray = [];\r\n  let smallArray = [];\r\n  if(array.length === 0){\r\n    return [];\r\n  }\r\n  if(size<1 || !size){\r\n    size = 1\r\n  }\r\n  if(size>array.length){\r\n    size = array.length;\r\n  }\r\n  array.forEach(item => {\r\n    if(smallArray.length===0){\r\n      bigArray.push(smallArray);\r\n    }\r\n    smallArray.push(item);\r\n    if(smallArray.length === size){\r\n      smallArray = [];\r\n    }\r\n  });\r\n  return bigArray;\r\n}\r\n\r\nfunction chunk2(array,size) {\r\n  \r\n}\n\n//# sourceURL=webpack://utils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return compact; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/array/base.js\");\n//去除数组中所有真值\r\n\r\nfunction compact(array) {\r\n  return Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array,item => item);\r\n}\n\n//# sourceURL=webpack://utils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n//合并数组\r\nfunction concat(array,...args) {\r\n  let arr = [...array];\r\n  args.forEach((item,index) => {\r\n    if(item instanceof Array){\r\n      arr.push(...item);\r\n    }else{\r\n      arr.push(item);\r\n    }\r\n    \r\n  })\r\n  return arr;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/differences.js":
/*!**********************************!*\
  !*** ./src/array/differences.js ***!
  \**********************************/
/*! exports provided: differences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return differences; });\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n\r\nfunction differences(array,...arrays) {\r\n  if(array.length===0){\r\n    return []\r\n  }\r\n  if(arrays.length===0){\r\n    return [...array];\r\n  }\r\n  \r\n  let arr = Object(_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([],...arrays);\r\n  //console.log(arr);\r\n  return array.filter(item => {\r\n    return arr.indexOf(item)===-1\r\n  })\r\n   \r\n}\n\n//# sourceURL=webpack://utils/./src/array/differences.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/array/base.js\");\n// 1. drop(array, count): \r\n//     得到数组过滤掉左边count个后剩余元素组成的数组\r\n//     说明: 不改变当前数组, count默认是1\r\n//     如: drop([1,3,5,7], 2) ===> [5, 7]\r\n// 2. dropRight(array, count): \r\n//     得到数组过滤掉右边count个后剩余元素组成的数组\r\n//     说明: 不改变数组, count默认是1\r\n//     如: dropRight([1,3,5,7], 2) ===> [1, 3]\r\n\r\nfunction drop(array,count=1) {\r\n  if(count<1){\r\n    count = 1;\r\n  }\r\n  if(array.length===0){\r\n    return []\r\n  }\r\n  return Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array,(item,index) => index>=count)\r\n  \r\n}\r\nfunction dropRight(array,count=1) {\r\n  count = count || 1;\r\n  if(count<1){\r\n    count = 1;\r\n  }\r\n  if(array.length===0){\r\n    return []\r\n  }\r\n  \r\n  return Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array,(item,index) => index<array.length-count)\r\n}\n\n//# sourceURL=webpack://utils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2, flatten3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten3\", function() { return flatten3; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/array/base.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n//数组扁平化，将多维数组转换成一位数组\r\n\r\n\r\n\r\n\r\nfunction flatten1(array) {\r\n  let arr = [];\r\n  array.forEach((item,index) => {\r\n    if(item instanceof Array){\r\n      arr.push(...flatten1(item));\r\n    }else{\r\n      arr.push(item);\r\n    }\r\n  })\r\n  return arr;\r\n}\r\n\r\nfunction flatten2(array) {\r\n  let arr = []\r\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"reduce\"])(array,(pre,item,index) => {\r\n    if(item instanceof Array){\r\n      arr.push(...flatten2(item));\r\n    }else{\r\n      arr.push(item);\r\n    }\r\n  })\r\n  return arr;\r\n  \r\n}\r\nfunction flatten3(array) {\r\n  let arr = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])([],...array);\r\n  while(Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"some\"])(arr,(item) => Array.isArray(item))){\r\n    arr = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])([],...arr);\r\n  }\r\n  return arr;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/mergeArray.js":
/*!*********************************!*\
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/*! exports provided: mergeArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return mergeArray; });\nfunction mergeArray(array,...arrays) {\r\n  let result = [...array];\r\n  arrays.forEach(itemArr => {\r\n    itemArr.forEach(item => {\r\n      if(result.indexOf(item)===-1){\r\n        result.push(item);\r\n      }\r\n    })\r\n  })\r\n  return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/*! exports provided: pull, pullAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return pullAll; });\nfunction pull(array,...values) {\r\n  let result = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    if(values.indexOf(element) !== -1){\r\n      array.splice(index,1)\r\n      result.push(element);\r\n      index--;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction pullAll(array,values){\r\n  return pull(array,...values);\r\n}\n\n//# sourceURL=webpack://utils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n//实现切片，截取数组的一部分\r\nfunction slice(array,start,end) {\r\n  let arr = [];\r\n  if(array.length===0){\r\n    return arr;\r\n  }\r\n  start = start || 0;\r\n  end = end || array.length;\r\n  if(start < 0){\r\n    start = 0;\r\n  }\r\n  if(end > array.length){\r\n    end = array.length;\r\n  }\r\n  \r\n  for (let index = start; index < end; index++) {\r\n    arr.push(array[index]);\r\n  }\r\n  return arr;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\nfunction unique1(array) {\r\n  let arr = [];\r\n  let cotainer = {};\r\n  array.forEach((item,index) => {\r\n    if(!cotainer.hasOwnProperty(item)){\r\n      arr.push(item);\r\n      cotainer[item] = true;\r\n    }\r\n  });\r\n  return arr;\r\n}\r\nfunction unique2(array) {\r\n  return Array.from(new Set(array));\r\n}\n\n//# sourceURL=webpack://utils/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction apply(fn,obj,...args1) {\r\n  return (...args2) => {\r\n    Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(fn,obj,...args1,...args2)\r\n  }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\nfunction bind(fn,obj,args) {\r\n  if(obj === undefined || obj === null){\r\n    obj = window\r\n  }\r\n  obj.tempFn = fn;\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn;\r\n  return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return call; });\nfunction call(fn,obj,...args) {\r\n  if(obj===undefined || obj === null){\r\n    obj = window;\r\n  }\r\n  obj.tempFn = fn;\r\n  const result = obj.tempFn(...args);\r\n  delete obj.tempFn;\r\n  return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction debounce(callback,delay) {\r\n  return () => {\r\n\r\n    if(this.hasOwnProperty('timeId')){\r\n      clearTimeout(this.timeId);\r\n    }\r\n    \r\n    this.timeId = setTimeout(() => {\r\n      console.log(this);\r\n      Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(callback,this,arguments);\r\n      delete this.timeId;//当该回调函数执行完需要将timeId删除，不然this上回多一个timeId属性\r\n      //如果回调函数没有执行timeId不能删除，设置该属性就是为了清除定时器（每一次都对timeId重新赋值）\r\n    }, delay);\r\n    \r\n    \r\n  }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n//函数节流（间隔一定事件执行一次）\r\n\r\nfunction throttle(callback,delay) {\r\n  let pre = 0;\r\n  return () => {\r\n    let current = Date.now();\r\n    if(current-pre>delay){\r\n      Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(callback,this,arguments);\r\n      //callback(event);//这样this发生了改变\r\n      pre = current;\r\n    }  \r\n  }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: unique1, unique2, call, bind, apply, throttle, debounce, concat, slice, flatten1, flatten2, flatten3, compact, chunk1, differences, mergeArray, pull, pullAll, drop, dropRight, map, reduce, filter, find, findIndex, every, some, mergeObject, newInstance, myInstanceOf, clone, reverseString, palindrome, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_0__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_0__[\"unique2\"]; });\n\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_1__[\"call\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_3__[\"apply\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_5__[\"debounce\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_6__[\"concat\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_7__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_8__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_8__[\"flatten2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten3\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_8__[\"flatten3\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_9__[\"compact\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk1\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_10__[\"chunk1\"]; });\n\n/* harmony import */ var _array_differences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/differences */ \"./src/array/differences.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return _array_differences__WEBPACK_IMPORTED_MODULE_11__[\"differences\"]; });\n\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return _array_mergeArray__WEBPACK_IMPORTED_MODULE_12__[\"mergeArray\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_13__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_13__[\"pullAll\"]; });\n\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_14__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_14__[\"dropRight\"]; });\n\n/* harmony import */ var _array_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/base */ \"./src/array/base.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_base__WEBPACK_IMPORTED_MODULE_15__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_base__WEBPACK_IMPORTED_MODULE_15__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_base__WEBPACK_IMPORTED_MODULE_15__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_base__WEBPACK_IMPORTED_MODULE_15__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_base__WEBPACK_IMPORTED_MODULE_15__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_base__WEBPACK_IMPORTED_MODULE_15__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_base__WEBPACK_IMPORTED_MODULE_15__[\"some\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_16__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_17__[\"newInstance\"]; });\n\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_18__[\"myInstanceOf\"]; });\n\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone\"]; });\n\n/* harmony import */ var _string_base__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./string/base */ \"./src/string/base.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return _string_base__WEBPACK_IMPORTED_MODULE_20__[\"reverseString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return _string_base__WEBPACK_IMPORTED_MODULE_20__[\"palindrome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _string_base__WEBPACK_IMPORTED_MODULE_20__[\"truncate\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://utils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone\", function() { return clone; });\n//由于for  in可以用于数组和对象，但效率比较低\r\nfunction clone(target) {\r\n  let result;\r\n  if(target instanceof Array){\r\n    result = [];\r\n    target.forEach(item => {\r\n      result.push(item);\r\n    })\r\n    \r\n  }else if(typeof target === 'object' && target !== null){\r\n    result = {};\r\n    // Object.keys(target).forEach(key => {\r\n    //   result[key] = target[key];\r\n    // })\r\n    result = {...target};\r\n  }else{\r\n    return target;\r\n  }\r\n  return result;\r\n\r\n  \r\n\r\n}\n\n//# sourceURL=webpack://utils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/concat */ \"./src/array/concat.js\");\n//合并对象\r\n\r\nfunction mergeObject(...objs) {\r\n  let result = {};\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key => {\r\n      if(!result.hasOwnProperty(key)){\r\n        result[key] = obj[key];\r\n      }else{\r\n        result[key] = Object(_array_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([],result[key],obj[key]);\r\n      }\r\n    }) \r\n  })\r\n  return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/*! exports provided: myInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return myInstanceOf; });\nfunction myInstanceOf(target,Type) {\r\n  let protoObj = target.__proto__;\r\n  while(protoObj !== null){\r\n    if(protoObj === Type.prototype){\r\n      return true\r\n    }else{\r\n      protoObj = protoObj.__proto__;\r\n    }\r\n  }\r\n  return false;\r\n}\n\n//# sourceURL=webpack://utils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function/call */ \"./src/function/call.js\");\n\r\nfunction newInstance(Fn,...args) {\r\n  let obj = {};\r\n  let result = Object(_function_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(Fn,obj,...args);\r\n  obj.__proto__ = Fn.prototype;\r\n  if(result instanceof Object){\r\n    return result;\r\n  }else{\r\n    return obj;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://utils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/string/base.js":
/*!****************************!*\
  !*** ./src/string/base.js ***!
  \****************************/
/*! exports provided: reverseString, palindrome, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return reverseString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return palindrome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return truncate; });\n// reverseString(str)  字符串反转 \r\n// palindrome(str)   判断字符串是不是回文\r\n// truncate(str,num)   截取字符串（如果字符串的长度超过了num，截取前面num长度，并以...结束）\r\nfunction reverseString(str) {\r\n  return str.split('').reverse().join('');\r\n}\r\n\r\nfunction palindrome(str) {\r\n  return str === reverseString(str)\r\n}\r\n\r\nfunction truncate(str,num) {\r\n  if(str.length<=num){\r\n    return str;\r\n  }else{\r\n    return str.slice(0,num) + '...'\r\n  }\r\n}\n\n//# sourceURL=webpack://utils/./src/string/base.js?");

/***/ })

/******/ });
});