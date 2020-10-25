module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/speakers/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/channelHeader/index.js":
/*!*******************************************!*\
  !*** ./components/channelHeader/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_channelHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/channelHeader.module.css */ \"./styles/channelHeader.module.css\");\n/* harmony import */ var _styles_channelHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_channelHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/bilal/dev/assemblyf/components/channelHeader/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import styles\n\n\n\nconst ChannelHeader = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_channelHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.channelHeaderContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_channelHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.channelLogo,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/logo.png\",\n    className: \"img-fluid\",\n    width: \"150\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: _styles_channelHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.channelName,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \"Channel Name\")), __jsx(\"div\", {\n    className: _styles_channelHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.channelJoin,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/members.svg\",\n    className: \"img-fluid mr-2\",\n    width: \"30\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), \"484 Members\"), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, \"Join Us\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChannelHeader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYW5uZWxIZWFkZXIvaW5kZXguanM/OTk2NSJdLCJuYW1lcyI6WyJDaGFubmVsSGVhZGVyIiwicyIsImNoYW5uZWxIZWFkZXJDb250YWluZXIiLCJjaGFubmVsTG9nbyIsImNoYW5uZWxOYW1lIiwiY2hhbm5lbEpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQixTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFQyx1RUFBQyxDQUFDQyxzQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCx1RUFBQyxDQUFDRSxXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMscUNBRE47QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUdFLFNBQUssRUFBQyxLQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUVGLHVFQUFDLENBQUNHLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBUkYsRUFXRTtBQUFLLGFBQVMsRUFBRUgsdUVBQUMsQ0FBQ0ksV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyx3Q0FETjtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUdFLFNBQUssRUFBQyxJQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixnQkFERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixDQVhGLENBREYsQ0FERjtBQTJCRCxDQTVCRDs7QUE4QmVMLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jaGFubmVsSGVhZGVyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGltcG9ydCBzdHlsZXNcbmltcG9ydCBzIGZyb20gXCIuLi8uLi9zdHlsZXMvY2hhbm5lbEhlYWRlci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IENoYW5uZWxIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2hhbm5lbEhlYWRlckNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNoYW5uZWxMb2dvfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jaGFubmVsTmFtZX0+XG4gICAgICAgICAgPGgxPkNoYW5uZWwgTmFtZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jaGFubmVsSm9pbn0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9hc3NldHMvaW1hZ2VzL21lbWJlcnMuc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1yLTJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA0ODQgTWVtYmVyc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnV0dG9uPkpvaW4gVXM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/channelHeader/index.js\n");

/***/ }),

/***/ "./components/speaker/index.js":
/*!*************************************!*\
  !*** ./components/speaker/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _channelHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channelHeader */ \"./components/channelHeader/index.js\");\n/* harmony import */ var _styles_speakers_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/speakers.module.css */ \"./styles/speakers.module.css\");\n/* harmony import */ var _styles_speakers_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_speakers_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\nvar _jsxFileName = \"/home/bilal/dev/assemblyf/components/speaker/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n // import styles\n\n // import static data\n\n\n\nconst Speaker = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_speakers_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SpeakerWrapper,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(_channelHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_speakers_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SpeakerContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_speakers_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"They will teach you\"), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, \"Meet The Speakers\")), __jsx(\"div\", {\n    className: _styles_speakers_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ourSpeakers,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"SpeakerData\"].map((item, index) => {\n    return __jsx(\"div\", {\n      className: _styles_speakers_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.speaker,\n      key: index,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: `../../static/assets/images/${item.image}`,\n      alt: \"speaker\",\n      className: \"img-fluid\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 19\n      }\n    }), __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 19\n      }\n    }, item.name), __jsx(\"span\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 19\n      }\n    }, item.title));\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWFrZXIvaW5kZXguanM/MDBlMSJdLCJuYW1lcyI6WyJTcGVha2VyIiwicyIsIlNwZWFrZXJXcmFwcGVyIiwiU3BlYWtlckNvbnRhaW5lciIsInRpdGxlIiwib3VyU3BlYWtlcnMiLCJTcGVha2VyRGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNwZWFrZXIiLCJpbWFnZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztDQUVBOztDQUdBOztDQUdBOztBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLGtFQUFDLENBQUNDLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFRCxrRUFBQyxDQUFDRSxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRixrRUFBQyxDQUFDRyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFFSCxrRUFBQyxDQUFDSSxXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLDREQUFXLENBQUNDLEdBQVosQ0FBZ0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQ2hDLFdBQ0U7QUFBSyxlQUFTLEVBQUVSLGtFQUFDLENBQUNTLE9BQWxCO0FBQTJCLFNBQUcsRUFBRUQsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFHLDhCQUE2QkQsSUFBSSxDQUFDRyxLQUFNLEVBRGhEO0FBRUUsU0FBRyxFQUFDLFNBRk47QUFHRSxlQUFTLEVBQUMsV0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlILElBQUksQ0FBQ0ksSUFBVCxDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPSixJQUFJLENBQUNKLEtBQVosQ0FQRixDQURGO0FBV0QsR0FaQSxDQURILENBTEYsQ0FGRixDQURGLENBREY7QUE0QkQsQ0E3QkQ7O0FBK0JlSixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3BlYWtlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IENoYW5uZWxIZWFkZXIgZnJvbSBcIi4uL2NoYW5uZWxIZWFkZXJcIjtcblxuLy8gaW1wb3J0IHN0eWxlc1xuaW1wb3J0IHMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zcGVha2Vycy5tb2R1bGUuY3NzXCI7XG5cbi8vIGltcG9ydCBzdGF0aWMgZGF0YVxuaW1wb3J0IHsgU3BlYWtlckRhdGEgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFNwZWFrZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuU3BlYWtlcldyYXBwZXJ9PlxuICAgICAgICA8Q2hhbm5lbEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5TcGVha2VyQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50aXRsZX0+XG4gICAgICAgICAgICA8cD5UaGV5IHdpbGwgdGVhY2ggeW91PC9wPlxuICAgICAgICAgICAgPGgxPk1lZXQgVGhlIFNwZWFrZXJzPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5vdXJTcGVha2Vyc30+XG4gICAgICAgICAgICB7U3BlYWtlckRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNwZWFrZXJ9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2AuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy8ke2l0ZW0uaW1hZ2V9YH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwic3BlYWtlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/speaker/index.js\n");

/***/ }),

/***/ "./pages/speakers/index.js":
/*!*********************************!*\
  !*** ./pages/speakers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/speaker */ \"./components/speaker/index.js\");\nvar _jsxFileName = \"/home/bilal/dev/assemblyf/pages/speakers/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // Import components\n\n\n\nconst Speakers = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(_components_speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVha2Vycy9pbmRleC5qcz9lNzNhIl0sIm5hbWVzIjpbIlNwZWFrZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQU5EOztBQVFlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NwZWFrZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIEltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgU3BlYWtlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zcGVha2VyXCI7XG5cbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxTcGVha2VyIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/speakers/index.js\n");

/***/ }),

/***/ "./styles/channelHeader.module.css":
/*!*****************************************!*\
  !*** ./styles/channelHeader.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"channelHeaderContainer\": \"channelHeader_channelHeaderContainer__-IWsg\",\n\t\"channelLogo\": \"channelHeader_channelLogo__2YlXy\",\n\t\"channelName\": \"channelHeader_channelName__2a6QD\",\n\t\"channelJoin\": \"channelHeader_channelJoin__3r0uk\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY2hhbm5lbEhlYWRlci5tb2R1bGUuY3NzPzgzZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvY2hhbm5lbEhlYWRlci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hhbm5lbEhlYWRlckNvbnRhaW5lclwiOiBcImNoYW5uZWxIZWFkZXJfY2hhbm5lbEhlYWRlckNvbnRhaW5lcl9fLUlXc2dcIixcblx0XCJjaGFubmVsTG9nb1wiOiBcImNoYW5uZWxIZWFkZXJfY2hhbm5lbExvZ29fXzJZbFh5XCIsXG5cdFwiY2hhbm5lbE5hbWVcIjogXCJjaGFubmVsSGVhZGVyX2NoYW5uZWxOYW1lX18yYTZRRFwiLFxuXHRcImNoYW5uZWxKb2luXCI6IFwiY2hhbm5lbEhlYWRlcl9jaGFubmVsSm9pbl9fM3IwdWtcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/channelHeader.module.css\n");

/***/ }),

/***/ "./styles/speakers.module.css":
/*!************************************!*\
  !*** ./styles/speakers.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"SpeakerWrapper\": \"speakers_SpeakerWrapper__27lEf\",\n\t\"SpeakerContainer\": \"speakers_SpeakerContainer__1DkOP\",\n\t\"speaker\": \"speakers_speaker__39DVa\",\n\t\"title\": \"speakers_title__SAQZS\",\n\t\"ourSpeakers\": \"speakers_ourSpeakers__10Jpy\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3BlYWtlcnMubW9kdWxlLmNzcz9lMTY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvc3BlYWtlcnMubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlNwZWFrZXJXcmFwcGVyXCI6IFwic3BlYWtlcnNfU3BlYWtlcldyYXBwZXJfXzI3bEVmXCIsXG5cdFwiU3BlYWtlckNvbnRhaW5lclwiOiBcInNwZWFrZXJzX1NwZWFrZXJDb250YWluZXJfXzFEa09QXCIsXG5cdFwic3BlYWtlclwiOiBcInNwZWFrZXJzX3NwZWFrZXJfXzM5RFZhXCIsXG5cdFwidGl0bGVcIjogXCJzcGVha2Vyc190aXRsZV9fU0FRWlNcIixcblx0XCJvdXJTcGVha2Vyc1wiOiBcInNwZWFrZXJzX291clNwZWFrZXJzX18xMEpweVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/speakers.module.css\n");

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: SidebarData, RightSidebarData, UserDropDownOption, FollowersData, SpeakerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SidebarData\", function() { return SidebarData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightSidebarData\", function() { return RightSidebarData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserDropDownOption\", function() { return UserDropDownOption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FollowersData\", function() { return FollowersData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpeakerData\", function() { return SpeakerData; });\nconst SidebarData = [{\n  title: \"Agenda\",\n  path: \"/\",\n  image: \"note.svg\"\n}, {\n  title: \"Community\",\n  path: \"/\",\n  image: \"community.svg\"\n}, {\n  title: \"Speakers\",\n  path: \"/speakers\",\n  image: \"profile.png\"\n}, {\n  title: \"Partners\",\n  path: \"/\",\n  image: \"partners.svg\"\n}];\nconst RightSidebarData = [{\n  title: \"Chat\",\n  path: \"/\",\n  image: \"chat.png\"\n}, {\n  title: \"People\",\n  path: \"/\",\n  image: \"people.png\"\n}, {\n  title: \"Studio\",\n  path: \"/\",\n  image: \"studio.png\"\n}];\nconst UserDropDownOption = [{\n  title: \"Logout\",\n  path: \"/\"\n}];\nconst FollowersData = [{\n  image: \"picture-1.png\"\n}, {\n  image: \"picture-2.png\"\n}, {\n  image: \"picture-1.png\"\n}, {\n  image: \"picture-2.png\"\n}, {\n  image: \"picture-1.png\"\n}, {\n  image: \"picture-2.png\"\n}, {\n  image: \"picture-1.png\"\n}, {\n  image: \"picture-2.png\"\n}];\nconst SpeakerData = [{\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"javascript Expert\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"javascript Expert\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"javascript Expert\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"javascript Expert\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"javascript Expert\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"javascript Expert\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanM/YzMyMCJdLCJuYW1lcyI6WyJTaWRlYmFyRGF0YSIsInRpdGxlIiwicGF0aCIsImltYWdlIiwiUmlnaHRTaWRlYmFyRGF0YSIsIlVzZXJEcm9wRG93bk9wdGlvbiIsIkZvbGxvd2Vyc0RhdGEiLCJTcGVha2VyRGF0YSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLFdBQVcsR0FBRyxDQUN6QjtBQUNFQyxPQUFLLEVBQUUsUUFEVDtBQUVFQyxNQUFJLEVBQUUsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQUR5QixFQU16QjtBQUNFRixPQUFLLEVBQUUsV0FEVDtBQUVFQyxNQUFJLEVBQUUsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQU55QixFQVd6QjtBQUNFRixPQUFLLEVBQUUsVUFEVDtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVh5QixFQWdCekI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsTUFBSSxFQUFFLEdBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FoQnlCLENBQXBCO0FBdUJBLE1BQU1DLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VILE9BQUssRUFBRSxNQURUO0FBRUVDLE1BQUksRUFBRSxHQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRDhCLEVBTTlCO0FBQ0VGLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRSxHQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTjhCLEVBVzlCO0FBQ0VGLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRSxHQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWDhCLENBQXpCO0FBa0JBLE1BQU1FLGtCQUFrQixHQUFHLENBQ2hDO0FBQ0VKLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGdDLENBQTNCO0FBT0EsTUFBTUksYUFBYSxHQUFHLENBQzNCO0FBQUVILE9BQUssRUFBRTtBQUFULENBRDJCLEVBRTNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBRjJCLEVBRzNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBSDJCLEVBSTNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBSjJCLEVBSzNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBTDJCLEVBTTNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBTjJCLEVBTzNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBUDJCLEVBUTNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBUjJCLENBQXRCO0FBV0EsTUFBTUksV0FBVyxHQUFHLENBQ3pCO0FBQ0VKLE9BQUssRUFBRSxhQURUO0FBRUVLLE1BQUksRUFBRSxpQkFGUjtBQUdFUCxPQUFLLEVBQUU7QUFIVCxDQUR5QixFQU16QjtBQUNFRSxPQUFLLEVBQUUsYUFEVDtBQUVFSyxNQUFJLEVBQUUsaUJBRlI7QUFHRVAsT0FBSyxFQUFFO0FBSFQsQ0FOeUIsRUFXekI7QUFDRUUsT0FBSyxFQUFFLGFBRFQ7QUFFRUssTUFBSSxFQUFFLGlCQUZSO0FBR0VQLE9BQUssRUFBRTtBQUhULENBWHlCLEVBZ0J6QjtBQUNFRSxPQUFLLEVBQUUsYUFEVDtBQUVFSyxNQUFJLEVBQUUsaUJBRlI7QUFHRVAsT0FBSyxFQUFFO0FBSFQsQ0FoQnlCLEVBcUJ6QjtBQUNFRSxPQUFLLEVBQUUsYUFEVDtBQUVFSyxNQUFJLEVBQUUsaUJBRlI7QUFHRVAsT0FBSyxFQUFFO0FBSFQsQ0FyQnlCLEVBMEJ6QjtBQUNFRSxPQUFLLEVBQUUsYUFEVDtBQUVFSyxNQUFJLEVBQUUsaUJBRlI7QUFHRVAsT0FBSyxFQUFFO0FBSFQsQ0ExQnlCLENBQXBCIiwiZmlsZSI6Ii4vdXRpbHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNpZGViYXJEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQWdlbmRhXCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaW1hZ2U6IFwibm90ZS5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvbW11bml0eVwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGltYWdlOiBcImNvbW11bml0eS5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwZWFrZXJzXCIsXG4gICAgcGF0aDogXCIvc3BlYWtlcnNcIixcbiAgICBpbWFnZTogXCJwcm9maWxlLnBuZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUGFydG5lcnNcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBpbWFnZTogXCJwYXJ0bmVycy5zdmdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSaWdodFNpZGViYXJEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQ2hhdFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGltYWdlOiBcImNoYXQucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQZW9wbGVcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBpbWFnZTogXCJwZW9wbGUucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTdHVkaW9cIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBpbWFnZTogXCJzdHVkaW8ucG5nXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVXNlckRyb3BEb3duT3B0aW9uID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTG9nb3V0XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRm9sbG93ZXJzRGF0YSA9IFtcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTEucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTIucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTEucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTIucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTEucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTIucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTEucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTIucG5nXCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBTcGVha2VyRGF0YSA9IFtcbiAge1xuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXG4gICAgbmFtZTogXCJKZXJvbWUgVGVybnluY2tcIixcbiAgICB0aXRsZTogXCJqYXZhc2NyaXB0IEV4cGVydFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IFwic3BlYWtlci5qcGdcIixcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxuICAgIHRpdGxlOiBcImphdmFzY3JpcHQgRXhwZXJ0XCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJzcGVha2VyLmpwZ1wiLFxuICAgIG5hbWU6IFwiSmVyb21lIFRlcm55bmNrXCIsXG4gICAgdGl0bGU6IFwiamF2YXNjcmlwdCBFeHBlcnRcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXG4gICAgbmFtZTogXCJKZXJvbWUgVGVybnluY2tcIixcbiAgICB0aXRsZTogXCJqYXZhc2NyaXB0IEV4cGVydFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IFwic3BlYWtlci5qcGdcIixcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxuICAgIHRpdGxlOiBcImphdmFzY3JpcHQgRXhwZXJ0XCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJzcGVha2VyLmpwZ1wiLFxuICAgIG5hbWU6IFwiSmVyb21lIFRlcm55bmNrXCIsXG4gICAgdGl0bGU6IFwiamF2YXNjcmlwdCBFeHBlcnRcIixcbiAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/constants.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });