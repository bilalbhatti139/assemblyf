webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: SidebarData, RightSidebarData, UserDropDownOption, FollowersData, SpeakerData, OurPartners, UpComingSessions, ReplayAndClips, ChannelList, LearningJourneyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarData", function() { return SidebarData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarData", function() { return RightSidebarData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropDownOption", function() { return UserDropDownOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersData", function() { return FollowersData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerData", function() { return SpeakerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPartners", function() { return OurPartners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpComingSessions", function() { return UpComingSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayAndClips", function() { return ReplayAndClips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelList", function() { return ChannelList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningJourneyList", function() { return LearningJourneyList; });
var SidebarData = [{
  title: "Live",
  path: "/live",
  image: "live.png"
}, {
  title: "Replays",
  path: "/replay",
  image: "replay.png"
}, {
  title: "Profile",
  path: "/profile",
  image: "profile.png"
}, {
  title: "Community",
  path: "/community",
  image: "community.png"
}];
var RightSidebarData = [{
  title: "Chat",
  path: "/",
  image: "chat.png",
  active: "N"
}, {
  title: "People",
  path: "/",
  image: "people.png",
  active: "N"
}, {
  title: "Studio",
  path: "/",
  image: "studio.png",
  active: "Y"
}];
var UserDropDownOption = [{
  title: "Logout",
  path: "/"
}];
var FollowersData = [{
  image: "picture-1.png"
}, {
  image: "picture-2.png"
}, {
  image: "picture-1.png"
}, {
  image: "picture-2.png"
}, {
  image: "picture-1.png"
}, {
  image: "picture-2.png"
}, {
  image: "picture-1.png"
}, {
  image: "picture-2.png"
}];
var SpeakerData = [{
  image: "speaker.jpg",
  name: "Jerome Ternynck",
  title: "Master Speaker Makerbot"
}, {
  image: "speaker.jpg",
  name: "Jerome Ternynck",
  title: "Master Speaker Makerbot"
}, {
  image: "speaker.jpg",
  name: "Jerome Ternynck",
  title: "Master Speaker Makerbot"
}, {
  image: "speaker.jpg",
  name: "Jerome Ternynck",
  title: "Master Speaker Makerbot"
}, {
  image: "speaker.jpg",
  name: "Jerome Ternynck",
  title: "Master Speaker Makerbot"
}, {
  image: "speaker.jpg",
  name: "Jerome Ternynck",
  title: "Master Speaker Makerbot"
}];
var OurPartners = [{
  image: "jazz.png"
}, {
  image: "hbl.png"
}, {
  image: "zong.svg"
}, {
  image: "google.png"
}];
var UpComingSessions = [{
  session: "How to come up with ideas",
  time: "8th Oct - 8:00pm (PST)"
}, {
  session: "How to select your confounders",
  time: "8th Oct - 8:00pm (PST)"
}, {
  session: "How to build marketplaces",
  time: "8th Oct - 8:00pm (PST)"
}, {
  session: "How to build products as a startup",
  time: "8th Oct - 8:00pm (PST)"
}, {
  session: "How to build marketplaces",
  time: "8th Oct - 8:00pm (PST)"
}];
var ReplayAndClips = [{
  image: "thumbnail.jpg"
}, {
  image: "thumbnail.jpg"
}, {
  image: "thumbnail.jpg"
}, {
  image: "thumbnail.jpg"
}, {
  image: "thumbnail.jpg"
}, {
  image: "thumbnail.jpg"
}];
var ChannelList = [{
  title: "HTML/CSS Academy"
}, {
  title: "Backend Academy"
}];
var LearningJourneyList = [{
  title: "How to come up with ideas?"
}, {
  title: "How to select your co founders?"
}, {
  title: "How to build marketplace?"
}, {
  title: "how to build product as a startup?"
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIlNpZGViYXJEYXRhIiwidGl0bGUiLCJwYXRoIiwiaW1hZ2UiLCJSaWdodFNpZGViYXJEYXRhIiwiYWN0aXZlIiwiVXNlckRyb3BEb3duT3B0aW9uIiwiRm9sbG93ZXJzRGF0YSIsIlNwZWFrZXJEYXRhIiwibmFtZSIsIk91clBhcnRuZXJzIiwiVXBDb21pbmdTZXNzaW9ucyIsInNlc3Npb24iLCJ0aW1lIiwiUmVwbGF5QW5kQ2xpcHMiLCJDaGFubmVsTGlzdCIsIkxlYXJuaW5nSm91cm5leUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFHLENBQ3pCO0FBQ0VDLE9BQUssRUFBRSxNQURUO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRHlCLEVBTXpCO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxTQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTnlCLEVBV3pCO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxVQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWHlCLEVBZ0J6QjtBQUNFRixPQUFLLEVBQUUsV0FEVDtBQUVFQyxNQUFJLEVBQUUsWUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQWhCeUIsQ0FBcEI7QUF1QkEsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FDOUI7QUFDRUgsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFLEdBRlI7QUFHRUMsT0FBSyxFQUFFLFVBSFQ7QUFJRUUsUUFBTSxFQUFFO0FBSlYsQ0FEOEIsRUFPOUI7QUFDRUosT0FBSyxFQUFFLFFBRFQ7QUFFRUMsTUFBSSxFQUFFLEdBRlI7QUFHRUMsT0FBSyxFQUFFLFlBSFQ7QUFJRUUs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Q0FDakM7QUFDRWYsT0FBSyxFQUFFO0FBRFQsQ0FEaUMsRUFJakM7QUFDRUEsT0FBSyxFQUFFO0FBRFQsQ0FKaUMsRUFPakM7QUFDRUEsT0FBSyxFQUFFO0FBRFQsQ0FQaUMsRUFVakM7QUFDRUEsT0FBSyxFQUFFO0FBRFQsQ0FWaUMsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Y4ODA0ZWFhZDdiMDY2ZmE4NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTaWRlYmFyRGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJMaXZlXCIsXHJcbiAgICBwYXRoOiBcIi9saXZlXCIsXHJcbiAgICBpbWFnZTogXCJsaXZlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUmVwbGF5c1wiLFxyXG4gICAgcGF0aDogXCIvcmVwbGF5XCIsXHJcbiAgICBpbWFnZTogXCJyZXBsYXkucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9maWxlXCIsXHJcbiAgICBwYXRoOiBcIi9wcm9maWxlXCIsXHJcbiAgICBpbWFnZTogXCJwcm9maWxlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ29tbXVuaXR5XCIsXHJcbiAgICBwYXRoOiBcIi9jb21tdW5pdHlcIixcclxuICAgIGltYWdlOiBcImNvbW11bml0eS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZWJhckRhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ2hhdFwiLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBpbWFnZTogXCJjaGF0LnBuZ1wiLFxyXG4gICAgYWN0aXZlOiBcIk5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUGVvcGxlXCIsXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIGltYWdlOiBcInBlb3BsZS5wbmdcIixcclxuICAgIGFjdGl2ZTogXCJOXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlN0dWRpb1wiLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBpbWFnZTogXCJzdHVkaW8ucG5nXCIsXHJcbiAgICBhY3RpdmU6IFwiWVwiXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyRHJvcERvd25PcHRpb24gPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTG9nb3V0XCIsXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvbGxvd2Vyc0RhdGEgPSBbXHJcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTEucG5nXCIgfSxcclxuICB7IGltYWdlOiBcInBpY3R1cmUtMi5wbmdcIiB9LFxyXG4gIHsgaW1hZ2U6IFwicGljdHVyZS0xLnBuZ1wiIH0sXHJcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTIucG5nXCIgfSxcclxuICB7IGltYWdlOiBcInBpY3R1cmUtMS5wbmdcIiB9LFxyXG4gIHsgaW1hZ2U6IFwicGljdHVyZS0yLnBuZ1wiIH0sXHJcbiAgeyBpbWFnZTogXCJwaWN0dXJlLTEucG5nXCIgfSxcclxuICB7IGltYWdlOiBcInBpY3R1cmUtMi5wbmdcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwZWFrZXJEYXRhID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXHJcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxyXG4gICAgdGl0bGU6IFwiTWFzdGVyIFNwZWFrZXIgTWFrZXJib3RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXHJcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxyXG4gICAgdGl0bGU6IFwiTWFzdGVyIFNwZWFrZXIgTWFrZXJib3RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXHJcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxyXG4gICAgdGl0bGU6IFwiTWFzdGVyIFNwZWFrZXIgTWFrZXJib3RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXHJcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxyXG4gICAgdGl0bGU6IFwiTWFzdGVyIFNwZWFrZXIgTWFrZXJib3RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXHJcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxyXG4gICAgdGl0bGU6IFwiTWFzdGVyIFNwZWFrZXIgTWFrZXJib3RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcInNwZWFrZXIuanBnXCIsXHJcbiAgICBuYW1lOiBcIkplcm9tZSBUZXJueW5ja1wiLFxyXG4gICAgdGl0bGU6IFwiTWFzdGVyIFNwZWFrZXIgTWFrZXJib3RcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91clBhcnRuZXJzID0gW1xyXG4gIHsgaW1hZ2U6IFwiamF6ei5wbmdcIiB9LFxyXG4gIHsgaW1hZ2U6IFwiaGJsLnBuZ1wiIH0sXHJcbiAgeyBpbWFnZTogXCJ6b25nLnN2Z1wiIH0sXHJcbiAgeyBpbWFnZTogXCJnb29nbGUucG5nXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVcENvbWluZ1Nlc3Npb25zID0gW1xyXG4gIHsgc2Vzc2lvbjogXCJIb3cgdG8gY29tZSB1cCB3aXRoIGlkZWFzXCIsIHRpbWU6IFwiOHRoIE9jdCAtIDg6MDBwbSAoUFNUKVwiIH0sXHJcbiAgeyBzZXNzaW9uOiBcIkhvdyB0byBzZWxlY3QgeW91ciBjb25mb3VuZGVyc1wiLCB0aW1lOiBcIjh0aCBPY3QgLSA4OjAwcG0gKFBTVClcIiB9LFxyXG4gIHsgc2Vzc2lvbjogXCJIb3cgdG8gYnVpbGQgbWFya2V0cGxhY2VzXCIsIHRpbWU6IFwiOHRoIE9jdCAtIDg6MDBwbSAoUFNUKVwiIH0sXHJcbiAge1xyXG4gICAgc2Vzc2lvbjogXCJIb3cgdG8gYnVpbGQgcHJvZHVjdHMgYXMgYSBzdGFydHVwXCIsXHJcbiAgICB0aW1lOiBcIjh0aCBPY3QgLSA4OjAwcG0gKFBTVClcIixcclxuICB9LFxyXG4gIHsgc2Vzc2lvbjogXCJIb3cgdG8gYnVpbGQgbWFya2V0cGxhY2VzXCIsIHRpbWU6IFwiOHRoIE9jdCAtIDg6MDBwbSAoUFNUKVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUmVwbGF5QW5kQ2xpcHMgPSBbXHJcbiAgeyBpbWFnZTogXCJ0aHVtYm5haWwuanBnXCIgfSxcclxuICB7IGltYWdlOiBcInRodW1ibmFpbC5qcGdcIiB9LFxyXG4gIHsgaW1hZ2U6IFwidGh1bWJuYWlsLmpwZ1wiIH0sXHJcbiAgeyBpbWFnZTogXCJ0aHVtYm5haWwuanBnXCIgfSxcclxuICB7IGltYWdlOiBcInRodW1ibmFpbC5qcGdcIiB9LFxyXG4gIHsgaW1hZ2U6IFwidGh1bWJuYWlsLmpwZ1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbm5lbExpc3QgPSBbXHJcbiAgeyB0aXRsZTogXCJIVE1ML0NTUyBBY2FkZW15XCIgfSxcclxuICB7IHRpdGxlOiBcIkJhY2tlbmQgQWNhZGVteVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTGVhcm5pbmdKb3VybmV5TGlzdCA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJIb3cgdG8gY29tZSB1cCB3aXRoIGlkZWFzP1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSG93IHRvIHNlbGVjdCB5b3VyIGNvIGZvdW5kZXJzP1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSG93IHRvIGJ1aWxkIG1hcmtldHBsYWNlP1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiaG93IHRvIGJ1aWxkIHByb2R1Y3QgYXMgYSBzdGFydHVwP1wiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=