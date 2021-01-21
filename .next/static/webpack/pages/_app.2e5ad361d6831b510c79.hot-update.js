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
      className: item.active == "Y" ? "active navbarText" : _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbarText,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vUmlnaHRTaWRlQmFyLmpzIl0sIm5hbWVzIjpbIlJpZ2h0U2lkZUJhciIsInMiLCJuYXYiLCJSaWdodFNpZGViYXJEYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYWN0aXZlIiwibmF2YmFyVGV4dCIsInBhdGgiLCJpbWFnZSIsInNpZGViYXJUZXh0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLGlFQUFDLENBQUNDLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLGlFQUFnQixDQUFDQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDckMsV0FDRTtBQUFJLGVBQVMsRUFBRUQsSUFBSSxDQUFDRSxNQUFMLElBQWEsR0FBYixHQUFtQixtQkFBbkIsR0FBeUNOLGlFQUFDLENBQUNPLFVBQTFEO0FBQXVFLFNBQUcsRUFBRUYsS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVELElBQUksQ0FBQ0ksSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsdUNBQWdDSixJQUFJLENBQUNLLEtBQXJDLENBREw7QUFFRSxTQUFHLEVBQUMsTUFGTjtBQUdFLGVBQVMsRUFBQyxnQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFPRTtBQUFHLGVBQVMsRUFBRVQsaUVBQUMsQ0FBQ1UsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE4Qk4sSUFBSSxDQUFDTyxLQUFuQyxDQVBGLENBREYsQ0FERixDQURGO0FBZUQsR0FoQkEsQ0FESCxDQURGLENBREYsQ0FERjtBQXlCRCxDQTFCRDs7S0FBTVosWTtBQTRCU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yZTVhZDM2MWQ2ODMxYjUxMGM3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2lkZWJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBSaWdodFNpZGViYXJEYXRhIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgUmlnaHRTaWRlQmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzLm5hdn0+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1tZW51LWl0ZW1zXCI+XHJcbiAgICAgICAgICB7UmlnaHRTaWRlYmFyRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aXRlbS5hY3RpdmU9PVwiWVwiID8gXCJhY3RpdmUgbmF2YmFyVGV4dFwiIDogcy5uYXZiYXJUZXh0IH0ga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5wYXRofT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvJHtpdGVtLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnNpZGViYXJUZXh0fT57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWdodFNpZGVCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=