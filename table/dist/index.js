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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import {addToHtml} from './src/addToHtml';\n// import { checkAll, checkItemList, getChecked } from \"./src/check\";\n// import {getData} from './src/getData';\n// import {sourceData} from './src/ife31data';\nlet addToHtml = __webpack_require__(/*! ./src/addToHtml */ \"./src/addToHtml.js\");\nlet getData = __webpack_require__(/*! ./src/getData */ \"./src/getData.js\");\nlet sourceData = __webpack_require__(/*! ./src/ife31data */ \"./src/ife31data.js\");\nlet checkAll = __webpack_require__(/*! ./src/check */ \"./src/check.js\").checkAll;\nlet checkItemList = __webpack_require__(/*! ./src/check */ \"./src/check.js\").checkItemList;\nlet getChecked = __webpack_require__(/*! ./src/check */ \"./src/check.js\").getChecked;\n\n\n\nlet regionCheckAll = document.getElementById(\"region-check-all\");\nlet regionCheckItems = document.querySelectorAll(\"#region-check-item\");\nlet productCheckAll = document.getElementById(\"product-check-all\");\nlet productCheckItems = document.querySelectorAll(\"#product-check-item\");\nlet btnSubmit = document.getElementById(\"btn\");\nlet tbody = document.getElementById(\"tbody\");\n\nregionCheckAll.onclick = function(e) {\n  checkAll(regionCheckAll, regionCheckItems);\n}; //end of regionCheckAll.onclick\n\nregionCheckItems.forEach((value, index) => {\n  value.onclick = function(e) {\n    checkItemList(regionCheckAll, regionCheckItems);\n  };\n}); //end of forEach\nproductCheckAll.onclick = function(e) {\n  checkAll(productCheckAll, productCheckItems);\n}; //end of productCheckAll.onclick\n\nproductCheckItems.forEach((value, index) => {\n  value.onclick = function(e) {\n    checkItemList(productCheckAll, productCheckItems);\n  };\n}); //end of forEach\n\nbtnSubmit.onclick = function(e) {\n  let regions = getChecked(regionCheckItems);\n  let products = getChecked(productCheckItems);\n  let regionArr = getData(regions, sourceData, \"region\");\n  let productArr = getData(products, regionArr, \"product\");\n  console.log(addToHtml);\n  addToHtml(productArr, tbody);\n}; //end of btnSubmit.onclick\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/addToHtml.js":
/*!**************************!*\
  !*** ./src/addToHtml.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function addToHtml(dataList, targetEle) {\n  let temp = \"\";\n  dataList.forEach((value, index) => {\n    temp += `<tr>\n                <td>${value.product}</td>\n                <td>${value.region}</td>\n                <td>${value.sale[0]}</td>\n                <td>${value.sale[1]}</td>\n                <td>${value.sale[2]}</td>\n                <td>${value.sale[3]}</td>\n                <td>${value.sale[4]}</td>\n                <td>${value.sale[5]}</td>\n                <td>${value.sale[6]}</td>\n                <td>${value.sale[7]}</td>\n                <td>${value.sale[8]}</td>\n                <td>${value.sale[9]}</td>\n                <td>${value.sale[10]}</td>\n                <td>${value.sale[11]}</td>\n             </tr>`;\n  });\n  targetEle.innerHTML = temp;\n};\n\nmodule.exports = addToHtml;\n\n\n//# sourceURL=webpack:///./src/addToHtml.js?");

/***/ }),

/***/ "./src/check.js":
/*!**********************!*\
  !*** ./src/check.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.checkAll = function(checkall, checkItemList) {\n  if (checkall.checked) {\n    checkItemList.forEach((value, index) => {\n      value.checked = true;\n    }); //end of forEach\n  } else {\n    checkItemList.forEach((value, index) => {\n      value.checked = false;\n    }); //end of forEach\n  } //end of if\n}; // end of checkAll\n\nexports.checkItemList = function(checkall, checkItemList) {\n  let trueNum = 0;\n  checkItemList.forEach((value, index) => {\n    if (value.checked) {\n      trueNum += 1;\n    }\n  });\n  if (trueNum == checkItemList.length) {\n    checkall.checked = true;\n  } else {\n    checkall.checked = false;\n  }\n}; // end of checkItemList\n\nexports.getChecked = function(checkboxList) {\n  let checkedList = [];\n  checkboxList.forEach((value, index) => {\n    if (value.checked) {\n      checkedList.push(value.value);\n    }\n  });\n  return checkedList;\n}; //end of getChecked\n\n\n//# sourceURL=webpack:///./src/check.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getData(targetArr, sourceArr, targetVal) {\n  let checkeData = [];\n  targetArr.forEach((value, index) => {\n    for (let i = 0; i < sourceArr.length; i++) {\n      if (sourceArr[i][targetVal] == value) {\n        checkeData.push(sourceArr[i]);\n      }\n    }\n  });\n  return checkeData;\n}; // end of getData\n\nmodule.exports = getData;\n\n//# sourceURL=webpack:///./src/getData.js?");

/***/ }),

/***/ "./src/ife31data.js":
/*!**************************!*\
  !*** ./src/ife31data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let sourceData = [\n  {\n    product: \"手机\",\n    region: \"华东\",\n    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]\n  },\n  {\n    product: \"手机\",\n    region: \"华北\",\n    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]\n  },\n  {\n    product: \"手机\",\n    region: \"华南\",\n    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]\n  },\n  {\n    product: \"笔记本\",\n    region: \"华东\",\n    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]\n  },\n  {\n    product: \"笔记本\",\n    region: \"华北\",\n    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]\n  },\n  {\n    product: \"笔记本\",\n    region: \"华南\",\n    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]\n  },\n  {\n    product: \"智能音箱\",\n    region: \"华东\",\n    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]\n  },\n  {\n    product: \"智能音箱\",\n    region: \"华北\",\n    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]\n  },\n  {\n    product: \"智能音箱\",\n    region: \"华南\",\n    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]\n  }\n];\n\nmodule.exports = sourceData;\n\n\n//# sourceURL=webpack:///./src/ife31data.js?");

/***/ })

/******/ });
