webpackHotUpdate("static/development/pages/wan-army.js",{

/***/ "./pages/wan-army.js":
/*!***************************!*\
  !*** ./pages/wan-army.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_videoGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/videoGuide */ \"./components/videoGuide.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/noahmaizels/Desktop/wan-guide/pages/wan-army.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar CrossChain = function CrossChain() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"https://vast-stream-09242.herokuapp.com/\").then(function (rawData) {\n      return rawData.json();\n    }).then(function (json) {\n      console.log(json.ranks.generals);\n      setData(json.ranks.generals);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, []);\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    className: \"jsx-2759603909\" + \" \" + \"hero\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2759603909\" + \" \" + \"hero-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2759603909\" + \" \" + \"container has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-2759603909\" + \" \" + \"has-text-white title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, \"Wan Army\"), __jsx(\"h2\", {\n    className: \"jsx-2759603909\" + \" \" + \"has-text-white subtitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"Wan Troops Unite!\"), __jsx(\"div\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"table\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, __jsx(\"th\", {\n    className: \"jsx-2759603909\" + \" \" + \"has-text-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, \"Rank\"), __jsx(\"th\", {\n    className: \"jsx-2759603909\" + \" \" + \"has-text-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, \"Comrades\"), __jsx(\"th\", {\n    className: \"jsx-2759603909\" + \" \" + \"has-text-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, \"WAN Held\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, \"General\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, data.ranks.generals), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, \"> 10 million WAN\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, \"Colonel\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, data.ranks.colonels), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, \"10 million to 1 million WAN\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, \"Major\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, data.ranks.majors), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, \"1 million to 500 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, \"Captain\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, data.ranks.captains), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, \"500 thousand to 100 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, \"Lieutenant\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, data.ranks.lieutenants), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }, \"100 thousand to 50 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, \"Sergeant\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, data.ranks.sergeants), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"50 thousand to 10 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, \"Corporal\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, data.ranks.corporal), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }, \"10 thousand to 5 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, \"Specialist\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, data.ranks.specialist), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, \"5 thousand to 1 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, \"Private\"), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }, data.ranks[\"private\"]), __jsx(\"td\", {\n    className: \"jsx-2759603909\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, \"1 thousand to 500 WAN\"))), data)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2759603909\",\n    __self: _this\n  }, \".title.jsx-2759603909{text-align:center;margin-bottom:50px;}th.jsx-2759603909{font-size:1.5rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3dhbi1ndWlkZS9wYWdlcy93YW4tYXJteS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RlMsQUFHNkIsQUFJRCxpQkFDbkIsQ0FKcUIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3dhbi1ndWlkZS9wYWdlcy93YW4tYXJteS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBWaWRlb0d1aWRlIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZGVvR3VpZGVcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcblxuXG5jb25zdCBDcm9zc0NoYWluID0gKCkgPT57XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vdmFzdC1zdHJlYW0tMDkyNDIuaGVyb2t1YXBwLmNvbS9cIilcbiAgICAgIC50aGVuKHJhd0RhdGEgPT4gcmF3RGF0YS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbi5yYW5rcy5nZW5lcmFscylcbiAgICAgICAgc2V0RGF0YShqc29uLnJhbmtzLmdlbmVyYWxzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgdGl0bGVcIj5cbiAgICAgICAgICAgICAgV2FuIEFybXlcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgV2FuIFRyb29wcyBVbml0ZSFcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlXCI+UmFuazwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlXCI+Q29tcmFkZXM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZVwiPldBTiBIZWxkPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5HZW5lcmFsPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3MuZ2VuZXJhbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PiAxMCBtaWxsaW9uIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+Q29sb25lbDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLmNvbG9uZWxzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjEwIG1pbGxpb24gdG8gMSBtaWxsaW9uIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+TWFqb3I8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5tYWpvcnN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MSBtaWxsaW9uIHRvIDUwMCB0aG91c2FuZCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPkNhcHRhaW48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5jYXB0YWluc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD41MDAgdGhvdXNhbmQgdG8gMTAwIHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+TGlldXRlbmFudDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLmxpZXV0ZW5hbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjEwMCB0aG91c2FuZCB0byA1MCB0aG91c2FuZCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlNlcmdlYW50PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3Muc2VyZ2VhbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjUwIHRob3VzYW5kIHRvIDEwIHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+Q29ycG9yYWw8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5jb3Jwb3JhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4xMCB0aG91c2FuZCB0byA1IHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+U3BlY2lhbGlzdDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLnNwZWNpYWxpc3R9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+NSB0aG91c2FuZCB0byAxIHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+UHJpdmF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLnByaXZhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MSB0aG91c2FuZCB0byA1MDAgV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIHtkYXRhfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuICAgICAgICB0aCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3NzQ2hhaW4iXX0= */\\n/*@ sourceURL=/Users/noahmaizels/Desktop/wan-guide/pages/wan-army.js */\"));\n};\n\n_s(CrossChain, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n\n_c = CrossChain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrossChain);\n\nvar _c;\n\n$RefreshReg$(_c, \"CrossChain\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YW4tYXJteS5qcz80NTk1Il0sIm5hbWVzIjpbIkNyb3NzQ2hhaW4iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmF3RGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmFua3MiLCJnZW5lcmFscyIsImVyciIsImNvbG9uZWxzIiwibWFqb3JzIiwiY2FwdGFpbnMiLCJsaWV1dGVuYW50cyIsInNlcmdlYW50cyIsImNvcnBvcmFsIiwic3BlY2lhbGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsRUFEVjtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUV0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHFEQUFLLENBQUMsMENBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQUMsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ0MsSUFBUixFQUFKO0FBQUEsS0FEZixFQUVHRixJQUZILENBRVEsVUFBQUUsSUFBSSxFQUFJO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsUUFBdkI7QUFDQVQsYUFBTyxDQUFDSyxJQUFJLENBQUNHLEtBQUwsQ0FBV0MsUUFBWixDQUFQO0FBQ0QsS0FMSCxXQU1TLFVBQUFDLEdBQUc7QUFBQSxhQUFJSixPQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWixDQUFKO0FBQUEsS0FOWjtBQU9ELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQW1CLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QURBLEVBcURHVCxJQXJESCxDQVBGLENBREYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLDJuSkFERjtBQWtGRCxDQTlGRDs7R0FBTUYsVTs7S0FBQUEsVTtBQWdHU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy93YW4tYXJteS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBWaWRlb0d1aWRlIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZGVvR3VpZGVcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcblxuXG5jb25zdCBDcm9zc0NoYWluID0gKCkgPT57XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vdmFzdC1zdHJlYW0tMDkyNDIuaGVyb2t1YXBwLmNvbS9cIilcbiAgICAgIC50aGVuKHJhd0RhdGEgPT4gcmF3RGF0YS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbi5yYW5rcy5nZW5lcmFscylcbiAgICAgICAgc2V0RGF0YShqc29uLnJhbmtzLmdlbmVyYWxzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgdGl0bGVcIj5cbiAgICAgICAgICAgICAgV2FuIEFybXlcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgV2FuIFRyb29wcyBVbml0ZSFcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlXCI+UmFuazwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlXCI+Q29tcmFkZXM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZVwiPldBTiBIZWxkPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5HZW5lcmFsPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3MuZ2VuZXJhbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PiAxMCBtaWxsaW9uIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+Q29sb25lbDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLmNvbG9uZWxzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjEwIG1pbGxpb24gdG8gMSBtaWxsaW9uIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+TWFqb3I8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5tYWpvcnN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MSBtaWxsaW9uIHRvIDUwMCB0aG91c2FuZCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPkNhcHRhaW48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5jYXB0YWluc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD41MDAgdGhvdXNhbmQgdG8gMTAwIHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+TGlldXRlbmFudDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLmxpZXV0ZW5hbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjEwMCB0aG91c2FuZCB0byA1MCB0aG91c2FuZCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlNlcmdlYW50PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3Muc2VyZ2VhbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjUwIHRob3VzYW5kIHRvIDEwIHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+Q29ycG9yYWw8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5jb3Jwb3JhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4xMCB0aG91c2FuZCB0byA1IHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+U3BlY2lhbGlzdDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLnNwZWNpYWxpc3R9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+NSB0aG91c2FuZCB0byAxIHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+UHJpdmF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLnByaXZhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MSB0aG91c2FuZCB0byA1MDAgV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIHtkYXRhfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuICAgICAgICB0aCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3NzQ2hhaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/wan-army.js\n");

/***/ })

})