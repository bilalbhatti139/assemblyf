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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/video/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/video/index.js":
/*!***********************************!*\
  !*** ./components/video/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/video.module.css */ \"./styles/video.module.css\");\n/* harmony import */ var _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_video_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/bilal/dev/assemblyf/components/video/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import styles\n\n\n\nconst VideoContainer = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.VideoSection,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainVideoWrapper,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Video,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainVideoFourPerson,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Video,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Video,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Video,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Video,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 15\n    }\n  }))))), __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.videoMembersBottom,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/video-placeholder.jpg\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvL2luZGV4LmpzP2RjZWUiXSwibmFtZXMiOlsiVmlkZW9Db250YWluZXIiLCJzIiwiVmlkZW9TZWN0aW9uIiwiTWFpblZpZGVvV3JhcHBlciIsIlZpZGVvIiwiTWFpblZpZGVvRm91clBlcnNvbiIsInZpZGVvTWVtYmVyc0JvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztDQUVBOztBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFDLENBQUNDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsK0RBQUMsQ0FBQ0UsZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsK0RBQUMsQ0FBQ0csS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGtEQUROO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxhQUFTLEVBQUMsV0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFFSCwrREFBQyxDQUFDSSxtQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFSiwrREFBQyxDQUFDRyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsa0RBRE47QUFFRSxPQUFHLEVBQUMsS0FGTjtBQUdFLGFBQVMsRUFBQyxXQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUVILCtEQUFDLENBQUNHLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxrREFETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkYsRUFlRTtBQUFLLGFBQVMsRUFBRUgsK0RBQUMsQ0FBQ0csS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGtEQUROO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxhQUFTLEVBQUMsV0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FmRixFQXNCRTtBQUFLLGFBQVMsRUFBRUgsK0RBQUMsQ0FBQ0csS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGtEQUROO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxhQUFTLEVBQUMsV0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F0QkYsQ0FSRixDQURGLENBREYsRUEwQ0U7QUFBSyxhQUFTLEVBQUVILCtEQUFDLENBQUNLLGtCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsa0RBRE47QUFFRSxPQUFHLEVBQUMsS0FGTjtBQUdFLGFBQVMsRUFBQyxXQUhaO0FBSUUsU0FBSyxFQUFDLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFDRSxPQUFHLEVBQUMsa0RBRE47QUFFRSxPQUFHLEVBQUMsS0FGTjtBQUdFLGFBQVMsRUFBQyxXQUhaO0FBSUUsU0FBSyxFQUFDLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBYUU7QUFDRSxPQUFHLEVBQUMsa0RBRE47QUFFRSxPQUFHLEVBQUMsS0FGTjtBQUdFLGFBQVMsRUFBQyxXQUhaO0FBSUUsU0FBSyxFQUFDLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBbUJFO0FBQ0UsT0FBRyxFQUFDLGtEQUROO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxhQUFTLEVBQUMsV0FIWjtBQUlFLFNBQUssRUFBQyxLQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0ExQ0YsQ0FERjtBQXVFRCxDQXhFRDs7QUEwRWVOLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy92aWRlby9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgc3R5bGVzXG5pbXBvcnQgcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3ZpZGVvLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgVmlkZW9Db250YWluZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuVmlkZW9TZWN0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuTWFpblZpZGVvV3JhcHBlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuVmlkZW99PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy92aWRlby1wbGFjZWhvbGRlci5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5NYWluVmlkZW9Gb3VyUGVyc29ufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLlZpZGVvfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9hc3NldHMvaW1hZ2VzL3ZpZGVvLXBsYWNlaG9sZGVyLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5WaWRlb30+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy92aWRlby1wbGFjZWhvbGRlci5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuVmlkZW99PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvdmlkZW8tcGxhY2Vob2xkZXIuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLlZpZGVvfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9hc3NldHMvaW1hZ2VzL3ZpZGVvLXBsYWNlaG9sZGVyLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy52aWRlb01lbWJlcnNCb3R0b219PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvdmlkZW8tcGxhY2Vob2xkZXIuanBnXCJcbiAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvdmlkZW8tcGxhY2Vob2xkZXIuanBnXCJcbiAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvdmlkZW8tcGxhY2Vob2xkZXIuanBnXCJcbiAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvdmlkZW8tcGxhY2Vob2xkZXIuanBnXCJcbiAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/video/index.js\n");

/***/ }),

/***/ "./pages/video/index.js":
/*!******************************!*\
  !*** ./pages/video/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/video */ \"./components/video/index.js\");\nvar _jsxFileName = \"/home/bilal/dev/assemblyf/pages/video/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // Import components\n\n\n\nconst Video = () => {\n  return __jsx(_components_video__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 10\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92aWRlby9pbmRleC5qcz81ZDE2Il0sIm5hbWVzIjpbIlZpZGVvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNsQixTQUFPLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FGRDs7QUFJZUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy92aWRlby9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gSW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBWaWRlb0NvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy92aWRlb1wiO1xuXG5jb25zdCBWaWRlbyA9ICgpID0+IHtcbiAgcmV0dXJuIDxWaWRlb0NvbnRhaW5lciAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/video/index.js\n");

/***/ }),

/***/ "./styles/video.module.css":
/*!*********************************!*\
  !*** ./styles/video.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"VideoSection\": \"video_VideoSection__2v2QG\",\n\t\"MainVideoWrapper\": \"video_MainVideoWrapper__1a8gw\",\n\t\"MainVideoFourPerson\": \"video_MainVideoFourPerson__2p9ac\",\n\t\"videoMembersBottom\": \"video_videoMembersBottom__3rMue\",\n\t\"Video\": \"video_Video__yOtMt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdmlkZW8ubW9kdWxlLmNzcz81NTgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvdmlkZW8ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlZpZGVvU2VjdGlvblwiOiBcInZpZGVvX1ZpZGVvU2VjdGlvbl9fMnYyUUdcIixcblx0XCJNYWluVmlkZW9XcmFwcGVyXCI6IFwidmlkZW9fTWFpblZpZGVvV3JhcHBlcl9fMWE4Z3dcIixcblx0XCJNYWluVmlkZW9Gb3VyUGVyc29uXCI6IFwidmlkZW9fTWFpblZpZGVvRm91clBlcnNvbl9fMnA5YWNcIixcblx0XCJ2aWRlb01lbWJlcnNCb3R0b21cIjogXCJ2aWRlb192aWRlb01lbWJlcnNCb3R0b21fXzNyTXVlXCIsXG5cdFwiVmlkZW9cIjogXCJ2aWRlb19WaWRlb19feU90TXRcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/video.module.css\n");

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