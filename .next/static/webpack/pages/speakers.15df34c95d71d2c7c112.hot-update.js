webpackHotUpdate_N_E("pages/speakers",{

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: SidebarData, RightSidebarData, UserDropDownOption, FollowersData, SpeakerData, OurPartners, UpComingSessions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SidebarData\", function() { return SidebarData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightSidebarData\", function() { return RightSidebarData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserDropDownOption\", function() { return UserDropDownOption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FollowersData\", function() { return FollowersData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpeakerData\", function() { return SpeakerData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OurPartners\", function() { return OurPartners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpComingSessions\", function() { return UpComingSessions; });\nvar SidebarData = [{\n  title: \"Agenda\",\n  path: \"/agenda\",\n  image: \"note.svg\"\n}, {\n  title: \"Community\",\n  path: \"/community\",\n  image: \"community.svg\"\n}, {\n  title: \"Speakers\",\n  path: \"/speakers\",\n  image: \"profile.png\"\n}, {\n  title: \"Partners\",\n  path: \"/partners\",\n  image: \"partners.svg\"\n}];\nvar RightSidebarData = [{\n  title: \"Chat\",\n  path: \"/\",\n  image: \"chat.png\"\n}, {\n  title: \"People\",\n  path: \"/\",\n  image: \"people.png\"\n}, {\n  title: \"Studio\",\n  path: \"/\",\n  image: \"studio.png\"\n}];\nvar UserDropDownOption = [{\n  title: \"Logout\",\n  path: \"/\"\n}];\nvar FollowersData = [{\n  image: \"picture-1.png\"\n}, {\n  image: \"picture-2.png\"\n}, {\n  image: \"picture-1.png\"\n}, {\n  image: \"picture-2.png\"\n}, {\n  image: \"picture-1.png\"\n}, {\n  image: \"picture-2.png\"\n}, {\n  image: \"picture-1.png\"\n}, {\n  image: \"picture-2.png\"\n}];\nvar SpeakerData = [{\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"Master Speaker\",\n  subTitle: \"Makerbot\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"Master Speaker\",\n  subTitle: \"Makerbot\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"Master Speaker\",\n  subTitle: \"Makerbot\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"Master Speaker\",\n  subTitle: \"Makerbot\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"Master Speaker\",\n  subTitle: \"Makerbot\"\n}, {\n  image: \"speaker.jpg\",\n  name: \"Jerome Ternynck\",\n  title: \"Master Speaker\",\n  subTitle: \"Makerbot\"\n}];\nvar OurPartners = [{\n  image: \"jazz.png\"\n}, {\n  image: \"hbl.png\"\n}, {\n  image: \"zong.svg\"\n}, {\n  image: \"google.png\"\n}];\nvar UpComingSessions = [{\n  session: \"How to come up with ideas\",\n  time: \"8th Oct - 8:00pm (PST)\"\n}, {\n  session: \"How to select your confounders\",\n  time: \"8th Oct - 8:00pm (PST)\"\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29uc3RhbnRzLmpzP2MzMjAiXSwibmFtZXMiOlsiU2lkZWJhckRhdGEiLCJ0aXRsZSIsInBhdGgiLCJpbWFnZSIsIlJpZ2h0U2lkZWJhckRhdGEiLCJVc2VyRHJvcERvd25PcHRpb24iLCJGb2xsb3dlcnNEYXRhIiwiU3BlYWtlckRhdGEiLCJuYW1lIiwic3ViVGl0bGUiLCJPdXJQYXJ0bmVycyIsIlVwQ29taW5nU2Vzc2lvbnMiLCJzZXNzaW9uIiwidGltZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFdBQVcsR0FBRyxDQUN6QjtBQUNFQyxPQUFLLEVBQUUsUUFEVDtBQUVFQyxNQUFJLEVBQUUsU0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQUR5QixFQU16QjtBQUNFRixPQUFLLEVBQUUsV0FEVDtBQUVFQyxNQUFJLEVBQUUsWUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQU55QixFQVd6QjtBQUNFRixPQUFLLEVBQUUsVUFEVDtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVh5QixFQWdCekI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsTUFBSSxFQUFFLFdBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FoQnlCLENBQXBCO0FBdUJBLElBQU1DLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VILE9BQUssRUFBRSxNQURUO0FBRUVDLE1BQUksRUFBRSxHQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRDhCLEVBTTlCO0FBQ0VGLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRSxHQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTjhCLEVBVzlCO0FBQ0VGLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRSxHQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWDhCLENBQXpCO0FBa0JBLElBQU1FLGtCQUFrQixHQUFHLENBQ2hDO0FBQ0VKLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGdDLENBQTNCO0FBT0EsSUFBTUksYUFBYSxHQUFHLENBQzNCO0FBQUVILE9BQUssRUFBRTtBQUFULENBRDJCLEVBRTNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBRjJCLEVBRzNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBSDJCLEVBSTNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBSjJCLEVBSzNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBTDJCLEVBTTNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBTjJCLEVBTzNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBUDJCLEVBUTNCO0FBQUVBLE9BQUssRUFBRTtBQUFULENBUjJCLENBQXRCO0FBV0EsSUFBTUksV0FBVyxHQUFHLENBQ3pCO0FBQ0VKLE9BQUssRUFBRSxhQURUO0FBRUVLLE1BQUksRUFBRSxpQkFGUjtBQUdFUCxPQUFLLEVBQUUsZ0JBSFQ7QUFJRVEsVUFBUSxFQUFFO0FBSlosQ0FEeUIsRUFPekI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUssTUFBSSxFQUFFLGlCQUZSO0FBR0VQLE9BQUssRUFBRSxnQkFIVDtBQUlFUSxVQUFRLEVBQUU7QUFKWixDQVB5QixFQWF6QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFSyxNQUFJLEVBQUUsaUJBRlI7QUFHRVAsT0FBSyxFQUFFLGdCQUhUO0FBSUVRLFVBQVEsRUFBRTtBQUpaLENBYnlCLEVBbUJ6QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFSyxNQUFJLEVBQUUsaUJBRlI7QUFHRVAsT0FBSyxFQUFFLGdCQUhUO0FBSUVRLFVBQVEsRUFBRTtBQUpaLENBbkJ5QixFQXlCekI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUssTUFBSSxFQUFFLGlCQUZSO0FBR0VQLE9BQUssRUFBRSxnQkFIVDtBQUlFUSxVQUFRLEVBQUU7QUFKWixDQXpCeUIsRUErQnpCO0FBQ0VOLE9BQUssRUFBRSxhQURUO0FBRUVLLE1BQUksRUFBRSxpQkFGUjtBQUdFUCxPQUFLLEVBQUUsZ0JBSFQ7QUFJRVEsVUFBUSxFQUFFO0FBSlosQ0EvQnlCLENBQXBCO0FBdUNBLElBQU1DLFdBQVcsR0FBRyxDQUN6QjtBQUFFUCxPQUFLLEVBQUU7QUFBVCxDQUR5QixFQUV6QjtBQUFFQSxPQUFLLEVBQUU7QUFBVCxDQUZ5QixFQUd6QjtBQUFFQSxPQUFLLEVBQUU7QUFBVCxDQUh5QixFQUl6QjtBQUFFQSxPQUFLLEVBQUU7QUFBVCxDQUp5QixDQUFwQjtBQU9BLElBQU1RLGdCQUFnQixHQUFHLENBQzlCO0FBQUVDLFNBQU8sRUFBRSwyQkFBWDtBQUF3Q0MsTUFBSSxFQUFFO0FBQTlDLENBRDhCLEVBRTlCO0FBQUVELFNBQU8sRUFBRSxnQ0FBWDtBQUE2Q0MsTUFBSSxFQUFFO0FBQW5ELENBRjhCLENBQXpCIiwiZmlsZSI6Ii4vdXRpbHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNpZGViYXJEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQWdlbmRhXCIsXG4gICAgcGF0aDogXCIvYWdlbmRhXCIsXG4gICAgaW1hZ2U6IFwibm90ZS5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvbW11bml0eVwiLFxuICAgIHBhdGg6IFwiL2NvbW11bml0eVwiLFxuICAgIGltYWdlOiBcImNvbW11bml0eS5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwZWFrZXJzXCIsXG4gICAgcGF0aDogXCIvc3BlYWtlcnNcIixcbiAgICBpbWFnZTogXCJwcm9maWxlLnBuZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUGFydG5lcnNcIixcbiAgICBwYXRoOiBcIi9wYXJ0bmVyc1wiLFxuICAgIGltYWdlOiBcInBhcnRuZXJzLnN2Z1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZWJhckRhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJDaGF0XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaW1hZ2U6IFwiY2hhdC5wbmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBlb3BsZVwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGltYWdlOiBcInBlb3BsZS5wbmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlN0dWRpb1wiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGltYWdlOiBcInN0dWRpby5wbmdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBVc2VyRHJvcERvd25PcHRpb24gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJMb2dvdXRcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBGb2xsb3dlcnNEYXRhID0gW1xuICB7IGltYWdlOiBcInBpY3R1cmUtMS5wbmdcIiB9LFxuICB7IGltYWdlOiBcInBpY3R1cmUtMi5wbmdcIiB9LFxuICB7IGltYWdlOiBcInBpY3R1cmUtMS5wbmdcIiB9LFxuICB7IGltYWdlOiBcInBpY3R1cmUtMi5wbmdcIiB9LFxuICB7IGltYWdlOiBcInBpY3R1cmUtMS5wbmdcIiB9LFxuICB7IGltYWdlOiBcInBpY3R1cmUtMi5wbmdcIiB9LFxuICB7IGltYWdlOiBcInBpY3R1cmUtMS5wbmdcIiB9LFxuICB7IGltYWdlOiBcInBpY3R1cmUtMi5wbmdcIiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFNwZWFrZXJEYXRhID0gW1xuICB7XG4gICAgaW1hZ2U6IFwic3BlYWtlci5qcGdcIixcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxuICAgIHRpdGxlOiBcIk1hc3RlciBTcGVha2VyXCIsXG4gICAgc3ViVGl0bGU6IFwiTWFrZXJib3RcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXG4gICAgbmFtZTogXCJKZXJvbWUgVGVybnluY2tcIixcbiAgICB0aXRsZTogXCJNYXN0ZXIgU3BlYWtlclwiLFxuICAgIHN1YlRpdGxlOiBcIk1ha2VyYm90XCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJzcGVha2VyLmpwZ1wiLFxuICAgIG5hbWU6IFwiSmVyb21lIFRlcm55bmNrXCIsXG4gICAgdGl0bGU6IFwiTWFzdGVyIFNwZWFrZXJcIixcbiAgICBzdWJUaXRsZTogXCJNYWtlcmJvdFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IFwic3BlYWtlci5qcGdcIixcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxuICAgIHRpdGxlOiBcIk1hc3RlciBTcGVha2VyXCIsXG4gICAgc3ViVGl0bGU6IFwiTWFrZXJib3RcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXG4gICAgbmFtZTogXCJKZXJvbWUgVGVybnluY2tcIixcbiAgICB0aXRsZTogXCJNYXN0ZXIgU3BlYWtlclwiLFxuICAgIHN1YlRpdGxlOiBcIk1ha2VyYm90XCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJzcGVha2VyLmpwZ1wiLFxuICAgIG5hbWU6IFwiSmVyb21lIFRlcm55bmNrXCIsXG4gICAgdGl0bGU6IFwiTWFzdGVyIFNwZWFrZXJcIixcbiAgICBzdWJUaXRsZTogXCJNYWtlcmJvdFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IE91clBhcnRuZXJzID0gW1xuICB7IGltYWdlOiBcImphenoucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJoYmwucG5nXCIgfSxcbiAgeyBpbWFnZTogXCJ6b25nLnN2Z1wiIH0sXG4gIHsgaW1hZ2U6IFwiZ29vZ2xlLnBuZ1wiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVXBDb21pbmdTZXNzaW9ucyA9IFtcbiAgeyBzZXNzaW9uOiBcIkhvdyB0byBjb21lIHVwIHdpdGggaWRlYXNcIiwgdGltZTogXCI4dGggT2N0IC0gODowMHBtIChQU1QpXCIgfSxcbiAgeyBzZXNzaW9uOiBcIkhvdyB0byBzZWxlY3QgeW91ciBjb25mb3VuZGVyc1wiLCB0aW1lOiBcIjh0aCBPY3QgLSA4OjAwcG0gKFBTVClcIiB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/constants.js\n");

/***/ })

})