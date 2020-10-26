webpackHotUpdate_N_E("pages/agenda",{

/***/ "./components/agenda/index.js":
/*!************************************!*\
  !*** ./components/agenda/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _channelHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channelHeader */ \"./components/channelHeader/index.js\");\n/* harmony import */ var _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/agenda.module.css */ \"./styles/agenda.module.css\");\n/* harmony import */ var _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/bilal/dev/assemblyf/components/agenda/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n // import styles\n\n // import constants\n\n\n\nvar OurAgenda = function OurAgenda() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.AgendaWrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(_channelHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \"Upcoming Sessions\")), __jsx(\"div\", {\n    className: _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.AgendaContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.UpcomingSessions,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"UpComingSessions\"].map(function (item, index) {\n    return __jsx(\"div\", {\n      className: _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Session,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 19\n      }\n    }, item.session), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 19\n      }\n    }, item.time));\n  })), __jsx(\"div\", {\n    className: _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SessionContent,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = OurAgenda;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OurAgenda);\n\nvar _c;\n\n$RefreshReg$(_c, \"OurAgenda\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZ2VuZGEvaW5kZXguanM/ODIwOCJdLCJuYW1lcyI6WyJPdXJBZ2VuZGEiLCJzIiwiQWdlbmRhV3JhcHBlciIsInRpdGxlIiwiQWdlbmRhQ29udGFpbmVyIiwiVXBjb21pbmdTZXNzaW9ucyIsIlVwQ29taW5nU2Vzc2lvbnMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJTZXNzaW9uIiwic2Vzc2lvbiIsInRpbWUiLCJTZXNzaW9uQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Q0FFQTs7Q0FHQTs7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLGdFQUFDLENBQUNDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFRCxnRUFBQyxDQUFDRSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQUZGLEVBS0U7QUFBSyxhQUFTLEVBQUVGLGdFQUFDLENBQUNHLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsZ0VBQUMsQ0FBQ0ksZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsaUVBQWdCLENBQUNDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNyQyxXQUNFO0FBQUssZUFBUyxFQUFFUixnRUFBQyxDQUFDUyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRixJQUFJLENBQUNHLE9BQVQsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0gsSUFBSSxDQUFDSSxJQUFaLENBRkYsQ0FERjtBQU1ELEdBUEEsQ0FESCxDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUVYLGdFQUFDLENBQUNZLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQUxGLENBREYsQ0FERjtBQXVCRCxDQXhCRDs7S0FBTWIsUztBQTBCU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2FnZW5kYS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IENoYW5uZWxIZWFkZXIgZnJvbSBcIi4uL2NoYW5uZWxIZWFkZXJcIjtcblxuLy8gaW1wb3J0IHN0eWxlc1xuaW1wb3J0IHMgZnJvbSBcIi4uLy4uL3N0eWxlcy9hZ2VuZGEubW9kdWxlLmNzc1wiO1xuXG4vLyBpbXBvcnQgY29uc3RhbnRzXG5pbXBvcnQgeyBVcENvbWluZ1Nlc3Npb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBPdXJBZ2VuZGEgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuQWdlbmRhV3JhcHBlcn0+XG4gICAgICAgIDxDaGFubmVsSGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRpdGxlfT5cbiAgICAgICAgICA8aDI+VXBjb21pbmcgU2Vzc2lvbnM8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuQWdlbmRhQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5VcGNvbWluZ1Nlc3Npb25zfT5cbiAgICAgICAgICAgIHtVcENvbWluZ1Nlc3Npb25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5TZXNzaW9ufT5cbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnNlc3Npb259PC9wPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5TZXNzaW9uQ29udGVudH0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE91ckFnZW5kYTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/agenda/index.js\n");

/***/ })

})