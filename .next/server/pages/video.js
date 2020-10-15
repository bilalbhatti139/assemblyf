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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/video.module.css */ \"./styles/video.module.css\");\n/* harmony import */ var _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_video_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/bilal/dev/assemblyf/components/video/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import styles\n\n\n\nconst VideoContainer = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.VideoSection,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainVideoWrapper,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainVideo,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainVideoFourPerson,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"150\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"150\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"150\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"150\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_video_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.videoMembersBottom,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"../../static/assets/images/placeholder.png\",\n    alt: \"img\",\n    className: \"img-fluid\",\n    width: \"100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvL2luZGV4LmpzP2RjZWUiXSwibmFtZXMiOlsiVmlkZW9Db250YWluZXIiLCJzIiwiVmlkZW9TZWN0aW9uIiwiTWFpblZpZGVvV3JhcHBlciIsIk1haW5WaWRlbyIsIk1haW5WaWRlb0ZvdXJQZXJzb24iLCJ2aWRlb01lbWJlcnNCb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUMzQixTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFQywrREFBQyxDQUFDQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELCtEQUFDLENBQUNFLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVGLCtEQUFDLENBQUNHLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyw0Q0FETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBRUgsK0RBQUMsQ0FBQ0ksbUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyw0Q0FETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFJRSxTQUFLLEVBQUMsS0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUNFLE9BQUcsRUFBQyw0Q0FETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFJRSxTQUFLLEVBQUMsS0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFhRTtBQUNFLE9BQUcsRUFBQyw0Q0FETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFJRSxTQUFLLEVBQUMsS0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFtQkU7QUFDRSxPQUFHLEVBQUMsNENBRE47QUFFRSxPQUFHLEVBQUMsS0FGTjtBQUdFLGFBQVMsRUFBQyxXQUhaO0FBSUUsU0FBSyxFQUFDLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixDQVJGLENBREYsQ0FERixFQXNDRTtBQUFLLGFBQVMsRUFBRUosK0RBQUMsQ0FBQ0ssa0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyw0Q0FETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFJRSxTQUFLLEVBQUMsS0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUNFLE9BQUcsRUFBQyw0Q0FETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFJRSxTQUFLLEVBQUMsS0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFhRTtBQUNFLE9BQUcsRUFBQyw0Q0FETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFJRSxTQUFLLEVBQUMsS0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFtQkU7QUFDRSxPQUFHLEVBQUMsNENBRE47QUFFRSxPQUFHLEVBQUMsS0FGTjtBQUdFLGFBQVMsRUFBQyxXQUhaO0FBSUUsU0FBSyxFQUFDLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixDQXRDRixDQURGO0FBbUVELENBcEVEOztBQXNFZU4sNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpZGVvL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGltcG9ydCBzdHlsZXNcbmltcG9ydCBzIGZyb20gXCIuLi8uLi9zdHlsZXMvdmlkZW8ubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBWaWRlb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5WaWRlb1NlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5NYWluVmlkZW9XcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5NYWluVmlkZW99PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5NYWluVmlkZW9Gb3VyUGVyc29ufT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnZpZGVvTWVtYmVyc0JvdHRvbX0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9Db250YWluZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/video/index.js\n");

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

eval("// Exports\nmodule.exports = {\n\t\"VideoSection\": \"video_VideoSection__2v2QG\",\n\t\"MainVideoWrapper\": \"video_MainVideoWrapper__1a8gw\",\n\t\"MainVideoFourPerson\": \"video_MainVideoFourPerson__2p9ac\",\n\t\"videoMembersBottom\": \"video_videoMembersBottom__3rMue\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdmlkZW8ubW9kdWxlLmNzcz81NTgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL3ZpZGVvLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJWaWRlb1NlY3Rpb25cIjogXCJ2aWRlb19WaWRlb1NlY3Rpb25fXzJ2MlFHXCIsXG5cdFwiTWFpblZpZGVvV3JhcHBlclwiOiBcInZpZGVvX01haW5WaWRlb1dyYXBwZXJfXzFhOGd3XCIsXG5cdFwiTWFpblZpZGVvRm91clBlcnNvblwiOiBcInZpZGVvX01haW5WaWRlb0ZvdXJQZXJzb25fXzJwOWFjXCIsXG5cdFwidmlkZW9NZW1iZXJzQm90dG9tXCI6IFwidmlkZW9fdmlkZW9NZW1iZXJzQm90dG9tX18zck11ZVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/video.module.css\n");

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