webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Common/RightSideBar.js":
/*!*******************************************!*\
  !*** ./components/Common/RightSideBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/sidebar.module.css */ \"./styles/sidebar.module.css\");\n/* harmony import */ var _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/bilal/dev/assemblyf/components/Common/RightSideBar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar RightSideBar = function RightSideBar() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nav,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"nav-menu-items\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"RightSidebarData\"].map(function (item, index) {\n    return __jsx(\"li\", {\n      className: _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbarText,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: item.path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      src: \"../../static/assets/images/\".concat(item.image),\n      alt: \"live\",\n      className: \"img-fluid mb-2\",\n      width: \"30\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 21\n      }\n    }), __jsx(\"p\", {\n      className: _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 21\n      }\n    }, item.title))));\n  }))));\n};\n\n_c = RightSideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RightSideBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"RightSideBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vUmlnaHRTaWRlQmFyLmpzP2VhZWMiXSwibmFtZXMiOlsiUmlnaHRTaWRlQmFyIiwicyIsIm5hdiIsIlJpZ2h0U2lkZWJhckRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYXZiYXJUZXh0IiwicGF0aCIsImltYWdlIiwic2lkZWJhclRleHQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFQyxpRUFBQyxDQUFDQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxpRUFBZ0IsQ0FBQ0MsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3JDLFdBQ0U7QUFBSSxlQUFTLEVBQUVMLGlFQUFDLENBQUNNLFVBQWpCO0FBQTZCLFNBQUcsRUFBRUQsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVELElBQUksQ0FBQ0csSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsdUNBQWdDSCxJQUFJLENBQUNJLEtBQXJDLENBREw7QUFFRSxTQUFHLEVBQUMsTUFGTjtBQUdFLGVBQVMsRUFBQyxnQkFIWjtBQUlFLFdBQUssRUFBQyxJQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU9FO0FBQUcsZUFBUyxFQUFFUixpRUFBQyxDQUFDUyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQThCTCxJQUFJLENBQUNNLEtBQW5DLENBUEYsQ0FERixDQURGLENBREY7QUFlRCxHQWhCQSxDQURILENBREYsQ0FERixDQURGO0FBeUJELENBMUJEOztLQUFNWCxZO0FBNEJTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbW9uL1JpZ2h0U2lkZUJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpZGViYXIubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBSaWdodFNpZGViYXJEYXRhIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBSaWdodFNpZGVCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3MubmF2fT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1tZW51LWl0ZW1zXCI+XG4gICAgICAgICAge1JpZ2h0U2lkZWJhckRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cy5uYXZiYXJUZXh0fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy8ke2l0ZW0uaW1hZ2V9YH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zaWRlYmFyVGV4dH0+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRTaWRlQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Common/RightSideBar.js\n");

/***/ })

})