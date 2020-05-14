webpackHotUpdate("static/development/pages/wan-army.js",{

/***/ "./pages/wan-army.js":
/*!***************************!*\
  !*** ./pages/wan-army.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_videoGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/videoGuide */ \"./components/videoGuide.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/noahmaizels/Desktop/wan-guide/pages/wan-army.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar CrossChain = function CrossChain() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    ranks: {\n      generals: \"\",\n      // > 10 million\n      colonels: \"\",\n      // 10 million to 1 million\n      majors: \"\",\n      // 1 million to 500 thousand\n      captains: \"\",\n      // 500 thousand to 100 thousand\n      lieutenants: \"\",\n      // 100 thousand to 50 thousand\n      sergeants: \"\",\n      // 50 thousand to 10 thousand\n      corporal: \"\",\n      // 10 thousand to 5 thousand\n      specialist: \"\",\n      // 5 thousand to 1 thousand\n      \"private\": \"\" // 1 thousand to 500\n\n    },\n    updateTime: \"\"\n  }),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"https://vast-stream-09242.herokuapp.com/\").then(function (rawData) {\n      return rawData.json();\n    }).then(function (json) {\n      setData(json);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, []);\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    className: \"jsx-3675564994\" + \" \" + \"hero\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3675564994\" + \" \" + \"hero-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3675564994\" + \" \" + \"container has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3675564994\" + \" \" + \"has-text-white title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"Wan Army\"), __jsx(\"h2\", {\n    className: \"jsx-3675564994\" + \" \" + \"has-text-white subtitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Wan Troops Unite!\"), __jsx(\"h2\", {\n    className: \"jsx-3675564994\" + \" \" + \"has-text-white is-size-7 subtitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \"Updated at: \", data.updateTime), __jsx(\"div\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"table\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, __jsx(\"th\", {\n    className: \"jsx-3675564994\" + \" \" + \"has-text-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, \"Rank\"), __jsx(\"th\", {\n    className: \"jsx-3675564994\" + \" \" + \"has-text-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, \"Comrades\"), __jsx(\"th\", {\n    className: \"jsx-3675564994\" + \" \" + \"has-text-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, \"WAN Held\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, \"General\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, data.ranks.generals), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, \"> 10 million WAN\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, \"Colonel\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, data.ranks.colonels), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }, \"10 million to 1 million WAN\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, \"Major\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, data.ranks.majors), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"1 million to 500 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, \"Captain\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, data.ranks.captains), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }, \"500 thousand to 100 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, \"Lieutenant\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, data.ranks.lieutenants), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, \"100 thousand to 50 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, \"Sergeant\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }, data.ranks.sergeants), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, \"50 thousand to 10 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, \"Corporal\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, data.ranks.corporal), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, \"10 thousand to 5 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, \"Specialist\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, data.ranks.specialist), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 17\n    }\n  }, \"5 thousand to 1 thousand WAN\")), __jsx(\"tr\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }, \"Private\"), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, data.ranks[\"private\"]), __jsx(\"td\", {\n    className: \"jsx-3675564994\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, \"1 thousand to 500 WAN\"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3675564994\",\n    __self: _this\n  }, \".title.jsx-3675564994{text-align:center;margin-bottom:50px;}th.jsx-3675564994{font-size:1.5rem;}table.jsx-3675564994,th.jsx-3675564994,td.jsx-3675564994{border:1px solid white;}th.jsx-3675564994,td.jsx-3675564994{padding:7px;}table.jsx-3675564994{margin:auto;}@media(max-width:800px){th.jsx-3675564994,td.jsx-3675564994{padding-left:px;}td.jsx-3675564994{font-size:.8rem;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3dhbi1ndWlkZS9wYWdlcy93YW4tYXJteS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R1MsQUFHNkIsQUFJRCxBQUdNLEFBSVgsQUFHQSxBQUlNLEFBR0EsWUFUcEIsQUFHQSxJQUlFLEFBR0EsQ0FqQkYsQ0FKcUIsS0FRckIsY0FQQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC93YW4tZ3VpZGUvcGFnZXMvd2FuLWFybXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgVmlkZW9HdWlkZSBmcm9tIFwiLi4vY29tcG9uZW50cy92aWRlb0d1aWRlXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5cblxuY29uc3QgQ3Jvc3NDaGFpbiA9ICgpID0+e1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7IHJhbmtzOiBcbiAgICB7XG4gICAgICBnZW5lcmFsczogXCJcIiwgLy8gPiAxMCBtaWxsaW9uXG4gICAgICBjb2xvbmVsczogXCJcIiwgLy8gMTAgbWlsbGlvbiB0byAxIG1pbGxpb25cbiAgICAgIG1ham9yczogXCJcIiwgICAvLyAxIG1pbGxpb24gdG8gNTAwIHRob3VzYW5kXG4gICAgICBjYXB0YWluczogXCJcIiwgLy8gNTAwIHRob3VzYW5kIHRvIDEwMCB0aG91c2FuZFxuICAgICAgbGlldXRlbmFudHM6IFwiXCIsIC8vIDEwMCB0aG91c2FuZCB0byA1MCB0aG91c2FuZFxuICAgICAgc2VyZ2VhbnRzOiBcIlwiLCAvLyA1MCB0aG91c2FuZCB0byAxMCB0aG91c2FuZFxuICAgICAgY29ycG9yYWw6IFwiXCIsIC8vIDEwIHRob3VzYW5kIHRvIDUgdGhvdXNhbmRcbiAgICAgIHNwZWNpYWxpc3Q6IFwiXCIsIC8vIDUgdGhvdXNhbmQgdG8gMSB0aG91c2FuZFxuICAgICAgcHJpdmF0ZTogXCJcIiAvLyAxIHRob3VzYW5kIHRvIDUwMFxuICAgIH0sXG4gICAgdXBkYXRlVGltZTogXCJcIixcbiAgfSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vdmFzdC1zdHJlYW0tMDkyNDIuaGVyb2t1YXBwLmNvbS9cIilcbiAgICAgIC50aGVuKHJhd0RhdGEgPT4gcmF3RGF0YS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgc2V0RGF0YShqc29uKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgdGl0bGVcIj5cbiAgICAgICAgICAgICAgV2FuIEFybXlcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgV2FuIFRyb29wcyBVbml0ZSFcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgaXMtc2l6ZS03IHN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgIFVwZGF0ZWQgYXQ6IHtkYXRhLnVwZGF0ZVRpbWV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZVwiPlJhbms8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZVwiPkNvbXJhZGVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGVcIj5XQU4gSGVsZDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+R2VuZXJhbDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLmdlbmVyYWxzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPj4gMTAgbWlsbGlvbiBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPkNvbG9uZWw8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5jb2xvbmVsc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4xMCBtaWxsaW9uIHRvIDEgbWlsbGlvbiBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPk1ham9yPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3MubWFqb3JzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjEgbWlsbGlvbiB0byA1MDAgdGhvdXNhbmQgV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5DYXB0YWluPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3MuY2FwdGFpbnN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+NTAwIHRob3VzYW5kIHRvIDEwMCB0aG91c2FuZCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPkxpZXV0ZW5hbnQ8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5saWV1dGVuYW50c308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4xMDAgdGhvdXNhbmQgdG8gNTAgdGhvdXNhbmQgV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5TZXJnZWFudDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLnNlcmdlYW50c308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD41MCB0aG91c2FuZCB0byAxMCB0aG91c2FuZCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPkNvcnBvcmFsPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3MuY29ycG9yYWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MTAgdGhvdXNhbmQgdG8gNSB0aG91c2FuZCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlNwZWNpYWxpc3Q8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5zcGVjaWFsaXN0fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjUgdGhvdXNhbmQgdG8gMSB0aG91c2FuZCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlByaXZhdGU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5wcml2YXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjEgdGhvdXNhbmQgdG8gNTAwIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdGgge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLCB0aCwgdGQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGgsIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgIHRoLCB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NDaGFpbiJdfQ== */\\n/*@ sourceURL=/Users/noahmaizels/Desktop/wan-guide/pages/wan-army.js */\"));\n};\n\n_s(CrossChain, \"Mr4XlvYXacaR7UcrAYyLHjSsb4Q=\");\n\n_c = CrossChain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrossChain);\n\nvar _c;\n\n$RefreshReg$(_c, \"CrossChain\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YW4tYXJteS5qcz80NTk1Il0sIm5hbWVzIjpbIkNyb3NzQ2hhaW4iLCJ1c2VTdGF0ZSIsInJhbmtzIiwiZ2VuZXJhbHMiLCJjb2xvbmVscyIsIm1ham9ycyIsImNhcHRhaW5zIiwibGlldXRlbmFudHMiLCJzZXJnZWFudHMiLCJjb3Jwb3JhbCIsInNwZWNpYWxpc3QiLCJ1cGRhdGVUaW1lIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyYXdEYXRhIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUN0QztBQUNFQyxjQUFRLEVBQUUsRUFEWjtBQUNnQjtBQUNkQyxjQUFRLEVBQUUsRUFGWjtBQUVnQjtBQUNkQyxZQUFNLEVBQUUsRUFIVjtBQUdnQjtBQUNkQyxjQUFRLEVBQUUsRUFKWjtBQUlnQjtBQUNkQyxpQkFBVyxFQUFFLEVBTGY7QUFLbUI7QUFDakJDLGVBQVMsRUFBRSxFQU5iO0FBTWlCO0FBQ2ZDLGNBQVEsRUFBRSxFQVBaO0FBT2dCO0FBQ2RDLGdCQUFVLEVBQUUsRUFSZDtBQVFrQjtBQUNoQixpQkFBUyxFQVRYLENBU2M7O0FBVGQsS0FEK0I7QUFZL0JDLGNBQVUsRUFBRTtBQVptQixHQUFELENBRFY7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFldEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxxREFBSyxDQUFDLDBDQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNDLElBQVIsRUFBSjtBQUFBLEtBRGYsRUFFR0YsSUFGSCxDQUVRLFVBQUFFLElBQUksRUFBSTtBQUNa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SUFBSSxDQUFDVixLQUFMLENBQVdRLFVBQWhCLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBSEYsQ0F6Q0YsRUE4Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0UsSUFBSSxDQUFDVixLQUFMLFdBQUwsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIRixDQTlDRixDQURBLENBVkYsQ0FERixDQURGLENBREY7QUFBQTtBQUFBO0FBQUEsb3FNQURGO0FBdUdELENBL0hEOztHQUFNRixVOztLQUFBQSxVO0FBaUlTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3dhbi1hcm15LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFZpZGVvR3VpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlkZW9HdWlkZVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuXG5cbmNvbnN0IENyb3NzQ2hhaW4gPSAoKSA9PntcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyByYW5rczogXG4gICAge1xuICAgICAgZ2VuZXJhbHM6IFwiXCIsIC8vID4gMTAgbWlsbGlvblxuICAgICAgY29sb25lbHM6IFwiXCIsIC8vIDEwIG1pbGxpb24gdG8gMSBtaWxsaW9uXG4gICAgICBtYWpvcnM6IFwiXCIsICAgLy8gMSBtaWxsaW9uIHRvIDUwMCB0aG91c2FuZFxuICAgICAgY2FwdGFpbnM6IFwiXCIsIC8vIDUwMCB0aG91c2FuZCB0byAxMDAgdGhvdXNhbmRcbiAgICAgIGxpZXV0ZW5hbnRzOiBcIlwiLCAvLyAxMDAgdGhvdXNhbmQgdG8gNTAgdGhvdXNhbmRcbiAgICAgIHNlcmdlYW50czogXCJcIiwgLy8gNTAgdGhvdXNhbmQgdG8gMTAgdGhvdXNhbmRcbiAgICAgIGNvcnBvcmFsOiBcIlwiLCAvLyAxMCB0aG91c2FuZCB0byA1IHRob3VzYW5kXG4gICAgICBzcGVjaWFsaXN0OiBcIlwiLCAvLyA1IHRob3VzYW5kIHRvIDEgdGhvdXNhbmRcbiAgICAgIHByaXZhdGU6IFwiXCIgLy8gMSB0aG91c2FuZCB0byA1MDBcbiAgICB9LFxuICAgIHVwZGF0ZVRpbWU6IFwiXCIsXG4gIH0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwczovL3Zhc3Qtc3RyZWFtLTA5MjQyLmhlcm9rdWFwcC5jb20vXCIpXG4gICAgICAudGhlbihyYXdEYXRhID0+IHJhd0RhdGEuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHNldERhdGEoanNvbilcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIHRpdGxlXCI+XG4gICAgICAgICAgICAgIFdhbiBBcm15XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIHN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgIFdhbiBUcm9vcHMgVW5pdGUhXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIGlzLXNpemUtNyBzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICBVcGRhdGVkIGF0OiB7ZGF0YS51cGRhdGVUaW1lfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGVcIj5SYW5rPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGVcIj5Db21yYWRlczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlXCI+V0FOIEhlbGQ8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPkdlbmVyYWw8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5nZW5lcmFsc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4+IDEwIG1pbGxpb24gV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5Db2xvbmVsPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3MuY29sb25lbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MTAgbWlsbGlvbiB0byAxIG1pbGxpb24gV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5NYWpvcjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLm1ham9yc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4xIG1pbGxpb24gdG8gNTAwIHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+Q2FwdGFpbjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLmNhcHRhaW5zfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjUwMCB0aG91c2FuZCB0byAxMDAgdGhvdXNhbmQgV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5MaWV1dGVuYW50PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3MubGlldXRlbmFudHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MTAwIHRob3VzYW5kIHRvIDUwIHRob3VzYW5kIFdBTjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+U2VyZ2VhbnQ8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yYW5rcy5zZXJnZWFudHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+NTAgdGhvdXNhbmQgdG8gMTAgdGhvdXNhbmQgV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5Db3Jwb3JhbDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnJhbmtzLmNvcnBvcmFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjEwIHRob3VzYW5kIHRvIDUgdGhvdXNhbmQgV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5TcGVjaWFsaXN0PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3Muc3BlY2lhbGlzdH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD41IHRob3VzYW5kIHRvIDEgdGhvdXNhbmQgV0FOPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5Qcml2YXRlPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucmFua3MucHJpdmF0ZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4xIHRob3VzYW5kIHRvIDUwMCBXQU48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIHRoIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSwgdGgsIHRkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblxuICAgICAgICB9XG4gICAgICAgIHRoLCB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICB0aCwgdGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3NzQ2hhaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/wan-army.js\n");

/***/ })

})