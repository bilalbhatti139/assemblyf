webpackHotUpdate_N_E("pages/agenda",{

/***/ "./components/agenda/index.js":
/*!************************************!*\
  !*** ./components/agenda/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _channelHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channelHeader */ \"./components/channelHeader/index.js\");\n/* harmony import */ var _UpComingSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpComingSession */ \"./components/agenda/UpComingSession.js\");\n/* harmony import */ var _ReplaysAndClips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReplaysAndClips */ \"./components/agenda/ReplaysAndClips.js\");\n/* harmony import */ var _LearningJourney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LearningJourney */ \"./components/agenda/LearningJourney.js\");\n/* harmony import */ var _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/agenda.module.css */ \"./styles/agenda.module.css\");\n/* harmony import */ var _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/home/bilal/dev/assemblyf/components/agenda/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n\n\n\n // import styles\n\n\n\nvar OurAgenda = function OurAgenda() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showLearningJourney = _useState[0],\n      setShowLearningJourney = _useState[1];\n\n  var test = function test() {\n    setShowLearningJourney(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.AgendaWrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(_channelHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), __jsx(_UpComingSession__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    onClick: _LearningJourney__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"bilal\"), !showLearningJourney && __jsx(_ReplaysAndClips__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    LearningJourney: _LearningJourney__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }), showLearningJourney && __jsx(_LearningJourney__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 33\n    }\n  })));\n};\n\n_s(OurAgenda, \"e6TeU8TgA3hL7B2uPV6HJ9pO1vg=\");\n\n_c = OurAgenda;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OurAgenda);\n\nvar _c;\n\n$RefreshReg$(_c, \"OurAgenda\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZ2VuZGEvaW5kZXguanM/ODIwOCJdLCJuYW1lcyI6WyJPdXJBZ2VuZGEiLCJ1c2VTdGF0ZSIsInNob3dMZWFybmluZ0pvdXJuZXkiLCJzZXRTaG93TGVhcm5pbmdKb3VybmV5IiwidGVzdCIsInMiLCJBZ2VuZGFXcmFwcGVyIiwiTGVhcm5pbmdKb3VybmV5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUR4QztBQUFBLE1BQ2ZDLG1CQURlO0FBQUEsTUFDTUMsc0JBRE47O0FBRXRCLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakJELDBCQUFzQixDQUFDLElBQUQsQ0FBdEI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVFLGdFQUFDLENBQUNDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxXQUFPLEVBQUVDLHdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQUlHLENBQUNMLG1CQUFELElBQ0MsTUFBQyx3REFBRDtBQUFpQixtQkFBZSxFQUFFSyx3REFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBT0dMLG1CQUFtQixJQUFJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVAxQixDQURGLENBREY7QUFhRCxDQW5CRDs7R0FBTUYsUzs7S0FBQUEsUztBQXFCU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2FnZW5kYS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBDaGFubmVsSGVhZGVyIGZyb20gXCIuLi9jaGFubmVsSGVhZGVyXCI7XG5pbXBvcnQgVXBDb21pbmdTZXNzaW9uIGZyb20gXCIuL1VwQ29taW5nU2Vzc2lvblwiO1xuaW1wb3J0IFJlcGxheXNBbmRDbGlwcyBmcm9tIFwiLi9SZXBsYXlzQW5kQ2xpcHNcIjtcbmltcG9ydCBMZWFybmluZ0pvdXJuZXkgZnJvbSBcIi4vTGVhcm5pbmdKb3VybmV5XCI7XG5cbi8vIGltcG9ydCBzdHlsZXNcbmltcG9ydCBzIGZyb20gXCIuLi8uLi9zdHlsZXMvYWdlbmRhLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgT3VyQWdlbmRhID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd0xlYXJuaW5nSm91cm5leSwgc2V0U2hvd0xlYXJuaW5nSm91cm5leV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRlc3QgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0xlYXJuaW5nSm91cm5leSh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLkFnZW5kYVdyYXBwZXJ9PlxuICAgICAgICA8Q2hhbm5lbEhlYWRlciAvPlxuICAgICAgICA8VXBDb21pbmdTZXNzaW9uIC8+XG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e0xlYXJuaW5nSm91cm5leX0+YmlsYWw8L3NwYW4+XG4gICAgICAgIHshc2hvd0xlYXJuaW5nSm91cm5leSAmJiAoXG4gICAgICAgICAgPFJlcGxheXNBbmRDbGlwcyBMZWFybmluZ0pvdXJuZXk9e0xlYXJuaW5nSm91cm5leX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nob3dMZWFybmluZ0pvdXJuZXkgJiYgPExlYXJuaW5nSm91cm5leSAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdXJBZ2VuZGE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/agenda/index.js\n");

/***/ })

})