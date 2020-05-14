webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card */ \"./components/card.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/noahmaizels/Desktop/wan-guide/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nfunction HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      data = _useState[0],\n      setData = _useState[1];\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(\"section\", {\n    className: \"jsx-800209845\" + \" \" + \"hero\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-800209845\" + \" \" + \"hero-body hero-body-padding-large\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-800209845\" + \" \" + \"container has-text-centered\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-800209845\" + \" \" + \"title has-text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"Welcome to Wanchain.guide\"), __jsx(\"h2\", {\n    className: \"jsx-800209845\" + \" \" + \"subtitle has-text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"This website features video guides and instructions for Wanchain software\")))), __jsx(\"section\", {\n    className: \"jsx-800209845\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-800209845\" + \" \" + \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/lightwallet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-800209845\" + \" \" + \"light-link preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-800209845\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"Light Wallet Guide\"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/crosschain\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-800209845\" + \" \" + \"cross-link preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-800209845\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"Crosschain Transaction Guide\"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/dappstore\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-800209845\" + \" \" + \"dapp-link preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-800209845\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, \"DApp Store Guide\"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/mywanwallet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-800209845\" + \" \" + \"preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-800209845\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, \"MyWanWallet Guide\"), __jsx(\"img\", {\n    src: \"/mww.png\",\n    alt: \"MyWanWallet Guide\",\n    className: \"jsx-800209845\" + \" \" + \"preview-image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/staking\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-800209845\" + \" \" + \"preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/staking.png\",\n    alt: \"Staking Guide\",\n    className: \"jsx-800209845\" + \" \" + \"preview-image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"800209845\",\n    __self: this\n  }, \".title.jsx-800209845{text-align:center;margin-bottom:50px;}.subtitle.jsx-800209845{max-width:500px;margin:auto;}.info.jsx-800209845{max-width:600px;margin:30px auto;font-size:1.3rem;}.home.jsx-800209845{margin-top:50px;text-align:center;margin-bottom:100px;}.home.jsx-800209845 p.jsx-800209845{font-size:2rem;}.preview-image.jsx-800209845{width:300px;margin:20px;opacity:.5;border:10px solid black;border-radius:20px;}@media (max-width:1150px){.preview-link.jsx-800209845{display:block;}.flex-container.jsx-800209845{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:fixed;right:0px;top:70px;background-color:#031464;padding:20px;border-radius:5px;z-index:10;border:3px solid rgb(18,54,100);display:none;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3dhbi1ndWlkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGMsQUFHeUIsQUFJRixBQUlBLEFBTUEsQUFNRCxBQUdILEFBU0EsQUFJUSxZQVpSLEVBU2hCLENBWkUsQ0FoQmMsQUFJSyxBQU1DLEVBZEMsTUF3QlIsSUFuQmIsS0FJbUIsQ0FNRyxDQVVJLEVBeEIxQixhQVNBLElBTUEsS0FVcUIsbUJBQ3JCLEFBU2UsZUFDTCxVQUNELFNBQ2dCLHlCQUNaLGFBQ0ssa0JBQ1AsV0FDcUIsZ0NBQ25CLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3Avd2FuLWd1aWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cblxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIilcbiAgXG4gIFxuICByZXR1cm4gKFxuICA8TGF5b3V0PlxuICBcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5IGhlcm8tYm9keS1wYWRkaW5nLWxhcmdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaGFzLXRleHQtd2hpdGVcIj5cbiAgICAgICAgICBXZWxjb21lIHRvIFdhbmNoYWluLmd1aWRlXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBoYXMtdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFRoaXMgd2Vic2l0ZSBmZWF0dXJlcyB2aWRlbyBndWlkZXMgYW5kIGluc3RydWN0aW9ucyBmb3IgV2FuY2hhaW4gc29mdHdhcmVcbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9saWdodHdhbGxldFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsaWdodC1saW5rIHByZXZpZXctbGlua1wiPlxuICAgICAgICAgIDxoMT5MaWdodCBXYWxsZXQgR3VpZGU8L2gxPlxuICAgICAgICA8L2E+IFxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9jcm9zc2NoYWluXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImNyb3NzLWxpbmsgcHJldmlldy1saW5rXCI+XG4gICAgICAgICAgPGgxPkNyb3NzY2hhaW4gVHJhbnNhY3Rpb24gR3VpZGU8L2gxPlxuICAgICAgICA8L2E+IFxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9kYXBwc3RvcmVcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGFwcC1saW5rIHByZXZpZXctbGlua1wiPlxuICAgICAgICAgIDxoMT5EQXBwIFN0b3JlIEd1aWRlPC9oMT5cbiAgICAgICAgPC9hPiBcbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvbXl3YW53YWxsZXRcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJldmlldy1saW5rXCI+XG4gICAgICAgICAgPGgxPk15V2FuV2FsbGV0IEd1aWRlPC9oMT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIiBzcmM9XCIvbXd3LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJNeVdhbldhbGxldCBHdWlkZVwiLz5cbiAgICAgICAgPC9hPiBcbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc3Rha2luZ1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwcmV2aWV3LWxpbmtcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIiBzcmM9XCIvc3Rha2luZy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU3Rha2luZyBHdWlkZVwiLz5cbiAgICAgICAgPC9hPiBcbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICA8c3R5bGUganN4PntgXG4gICAgLnRpdGxlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuaW5mbyB7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICAuaG9tZSB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgfVxuXG4gICAgLmhvbWUgcCB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5wcmV2aWV3LWltYWdlIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgLnByZXZpZXctbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZmxleC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiA3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzE0NjQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE4LDU0LDEwMCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbn1cbiAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdfQ== */\\n/*@ sourceURL=/Users/noahmaizels/Desktop/wan-guide/pages/index.js */\"));\n}\n\n_s(HomePage, \"avaWeDctHFwWP+lC5+N1mkv/uq8=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNYQyxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFJbEIsU0FDQSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUFBLHVDQUFtQixNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSxtQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBYyxzQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBSUU7QUFBQSx1Q0FBYyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlGQUpGLENBREYsQ0FERixDQUZBLEVBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWEseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLENBREYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWEseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixDQURGLENBTkYsRUFXRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWEsd0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLENBWEYsRUFnQkUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHVDQUFhLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQStCLE9BQUcsRUFBQyxVQUFuQztBQUNFLE9BQUcsRUFBQyxtQkFETjtBQUFBLHVDQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FoQkYsRUF1QkUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHVDQUFhLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQStCLE9BQUcsRUFBQyxjQUFuQztBQUNFLE9BQUcsRUFBQyxlQUROO0FBQUEsdUNBQWUsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQXZCRixDQURGLENBZEE7QUFBQTtBQUFBO0FBQUEsbTRKQURBO0FBcUdEOztHQXpHUUgsUTs7S0FBQUEsUTtBQTJHTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFwiXCIpXG4gIFxuICBcbiAgcmV0dXJuIChcbiAgPExheW91dD5cbiAgXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keSBoZXJvLWJvZHktcGFkZGluZy1sYXJnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGhhcy10ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgV2VsY29tZSB0byBXYW5jaGFpbi5ndWlkZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGUgaGFzLXRleHQtd2hpdGVcIj5cbiAgICAgICAgICBUaGlzIHdlYnNpdGUgZmVhdHVyZXMgdmlkZW8gZ3VpZGVzIGFuZCBpbnN0cnVjdGlvbnMgZm9yIFdhbmNoYWluIHNvZnR3YXJlXG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvbGlnaHR3YWxsZXRcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlnaHQtbGluayBwcmV2aWV3LWxpbmtcIj5cbiAgICAgICAgICA8aDE+TGlnaHQgV2FsbGV0IEd1aWRlPC9oMT5cbiAgICAgICAgPC9hPiBcbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY3Jvc3NjaGFpblwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJjcm9zcy1saW5rIHByZXZpZXctbGlua1wiPlxuICAgICAgICAgIDxoMT5Dcm9zc2NoYWluIFRyYW5zYWN0aW9uIEd1aWRlPC9oMT5cbiAgICAgICAgPC9hPiBcbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvZGFwcHN0b3JlXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImRhcHAtbGluayBwcmV2aWV3LWxpbmtcIj5cbiAgICAgICAgICA8aDE+REFwcCBTdG9yZSBHdWlkZTwvaDE+XG4gICAgICAgIDwvYT4gXG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL215d2Fud2FsbGV0XCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInByZXZpZXctbGlua1wiPlxuICAgICAgICAgIDxoMT5NeVdhbldhbGxldCBHdWlkZTwvaDE+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCIgc3JjPVwiL213dy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiTXlXYW5XYWxsZXQgR3VpZGVcIi8+XG4gICAgICAgIDwvYT4gXG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3N0YWtpbmdcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJldmlldy1saW5rXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCIgc3JjPVwiL3N0YWtpbmcucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlN0YWtpbmcgR3VpZGVcIi8+XG4gICAgICAgIDwvYT4gXG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC50aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICAuc3VidGl0bGUge1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmluZm8ge1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuXG4gICAgLmhvbWUge1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cblxuICAgIC5ob21lIHAge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAucHJldmlldy1pbWFnZSB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gIC5wcmV2aWV3LWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmZsZXgtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxNDY0O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxOCw1NCwxMDApO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG59XG4gIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})