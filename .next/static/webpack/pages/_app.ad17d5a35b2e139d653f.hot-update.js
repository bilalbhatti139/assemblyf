webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Common/RightSideBar.js":
/*!*******************************************!*\
  !*** ./components/Common/RightSideBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/sidebar.module.css */ "./styles/sidebar.module.css");
/* harmony import */ var _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
var _this = undefined,
    _jsxFileName = "F:\\dev\\assemblyf\\components\\Common\\RightSideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var RightSideBar = function RightSideBar() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "nav-menu-items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["RightSidebarData"].map(function (item, index) {
    return __jsx("li", {
      className: item.active == "Y" ? _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.active & _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbarText : _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbarText,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 19
      }
    }, __jsx("img", {
      src: "../../static/assets/images/".concat(item.image),
      alt: "live",
      className: "img-fluid mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }), __jsx("p", {
      className: _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }, item.title))));
  }))));
};

_c = RightSideBar;
/* harmony default export */ __webpack_exports__["default"] = (RightSideBar);

var _c;

$RefreshReg$(_c, "RightSideBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vUmlnaHRTaWRlQmFyLmpzIl0sIm5hbWVzIjpbIlJpZ2h0U2lkZUJhciIsInMiLCJuYXYiLCJSaWdodFNpZGViYXJEYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYWN0aXZlIiwibmF2YmFyVGV4dCIsInBhdGgiLCJpbWFnZSIsInNpZGViYXJUZXh0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLGlFQUFDLENBQUNDLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLGlFQUFnQixDQUFDQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDckMsV0FDRTtBQUFJLGVBQVMsRUFBRUQsSUFBSSxDQUFDRSxNQUFMLElBQWEsR0FBYixHQUFtQk4saUVBQUMsQ0FBQ00sTUFBRixHQUFXTixpRUFBQyxDQUFDTyxVQUFoQyxHQUE2Q1AsaUVBQUMsQ0FBQ08sVUFBOUQ7QUFBMkUsU0FBRyxFQUFFRixLQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsSUFBSSxDQUFDSSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyx1Q0FBZ0NKLElBQUksQ0FBQ0ssS0FBckMsQ0FETDtBQUVFLFNBQUcsRUFBQyxNQUZOO0FBR0UsZUFBUyxFQUFDLGdCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU9FO0FBQUcsZUFBUyxFQUFFVCxpRUFBQyxDQUFDVSxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQThCTixJQUFJLENBQUNPLEtBQW5DLENBUEYsQ0FERixDQURGLENBREY7QUFlRCxHQWhCQSxDQURILENBREYsQ0FERixDQURGO0FBeUJELENBMUJEOztLQUFNWixZO0FBNEJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFkMTdkNWEzNWIyZTEzOWQ2NTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaWRlYmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFJpZ2h0U2lkZWJhckRhdGEgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBSaWdodFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e3MubmF2fT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LW1lbnUtaXRlbXNcIj5cclxuICAgICAgICAgIHtSaWdodFNpZGViYXJEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtpdGVtLmFjdGl2ZT09XCJZXCIgPyBzLmFjdGl2ZSAmIHMubmF2YmFyVGV4dCA6IHMubmF2YmFyVGV4dCB9IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ucGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uLy4uL3N0YXRpYy9hc3NldHMvaW1hZ2VzLyR7aXRlbS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zaWRlYmFyVGV4dH0+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlnaHRTaWRlQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9