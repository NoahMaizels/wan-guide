webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card */ \"./components/card.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/noahmaizels/Desktop/wan-guide/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      data = _useState[0],\n      setData = _useState[1];\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 3\n    }\n  }, __jsx(\"section\", {\n    className: \"jsx-3506018248\" + \" \" + \"hero\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3506018248\" + \" \" + \"hero-body hero-body-padding-large\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3506018248\" + \" \" + \"container has-text-centered\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3506018248\" + \" \" + \"title has-text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Welcome to Wanchain.guide\"), __jsx(\"h2\", {\n    className: \"jsx-3506018248\" + \" \" + \"subtitle has-text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"This website features video guides and instructions for Wanchain software\")))), __jsx(\"section\", {\n    className: \"jsx-3506018248\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3506018248\" + \" \" + \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(Link, {\n    href: \"/lightwallet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"/#/light-wallet\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: betaImage,\n    alt: \"Light Wallet Instructions Video\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }))), __jsx(\"a\", {\n    href: \"/#/my-wan-wallet\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: mwwImage,\n    alt: \"MyWanWallet.io Instructions Video\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  })), __jsx(\"a\", {\n    href: \"/#/light-wallet\",\n    className: \"jsx-3506018248\" + \" \" + \"light-link preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: lightImage,\n    alt: \"Light Wallet Instructions Video\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  })), __jsx(\"a\", {\n    href: \"/#/dapp-store\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: lightImage,\n    alt: \"DApp Store Instructions Video\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  })), __jsx(\"a\", {\n    href: \"/#/cross-chain\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: lightImage,\n    alt: \"Cross Chain Transaction Instructions Video\",\n    className: \"jsx-3506018248\" + \" \" + \"preview-image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3506018248\",\n    __self: this\n  }, \".title.jsx-3506018248{text-align:center;margin-bottom:50px;}.subtitle.jsx-3506018248{max-width:500px;margin:auto;}.info.jsx-3506018248{max-width:600px;margin:30px auto;font-size:1.3rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3dhbi1ndWlkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmMsQUFHeUIsQUFJRixBQUlBLGdCQUhKLEFBSUssRUFSRSxVQUtyQixLQUltQixJQVJuQixhQVNBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3dhbi1ndWlkZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKVxuICBcbiAgXG4gIHJldHVybiAoXG4gIDxMYXlvdXQ+XG4gIFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHkgaGVyby1ib2R5LXBhZGRpbmctbGFyZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBoYXMtdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFdlbGNvbWUgdG8gV2FuY2hhaW4uZ3VpZGVcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGhhcy10ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgVGhpcyB3ZWJzaXRlIGZlYXR1cmVzIHZpZGVvIGd1aWRlcyBhbmQgaW5zdHJ1Y3Rpb25zIGZvciBXYW5jaGFpbiBzb2Z0d2FyZVxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICA8TGluayBocmVmPVwiL2xpZ2h0d2FsbGV0XCI+XG4gICAgICA8YSBcbiAgICAgICAgaHJlZj1cIi8jL2xpZ2h0LXdhbGxldFwiIFxuICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWxpbmtcIlxuICAgICAgPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIiBcbiAgICAgICAgICBzcmM9e2JldGFJbWFnZX1cbiAgICAgICAgICBhbHQ9XCJMaWdodCBXYWxsZXQgSW5zdHJ1Y3Rpb25zIFZpZGVvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT4gXG4gICAgICBcbiAgICAgIDwvTGluaz5cbiAgICAgICBcbiAgICAgIDxhIFxuICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWxpbmtcIiBcbiAgICAgICAgaHJlZj1cIi8jL215LXdhbi13YWxsZXRcIlxuICAgICAgPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIiBcbiAgICAgICAgICBzcmM9e213d0ltYWdlfSBcbiAgICAgICAgICBhbHQ9XCJNeVdhbldhbGxldC5pbyBJbnN0cnVjdGlvbnMgVmlkZW9cIlxuICAgICAgICAvPlxuICAgICAgPC9hPlxuICAgICAgPGEgXG4gICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0LWxpbmsgcHJldmlldy1saW5rXCIgXG4gICAgICAgIGhyZWY9XCIvIy9saWdodC13YWxsZXRcIlxuICAgICAgPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIiBcbiAgICAgICAgICBzcmM9e2xpZ2h0SW1hZ2V9IFxuICAgICAgICAgIGFsdD1cIkxpZ2h0IFdhbGxldCBJbnN0cnVjdGlvbnMgVmlkZW9cIlxuICAgICAgICAvPlxuICAgICAgPC9hPlxuICAgICAgPGEgXG4gICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctbGlua1wiIFxuICAgICAgICBocmVmPVwiLyMvZGFwcC1zdG9yZVwiXG4gICAgICA+XG4gICAgICAgIDxpbWcgXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZVwiIFxuICAgICAgICAgIHNyYz17bGlnaHRJbWFnZX0gXG4gICAgICAgICAgYWx0PVwiREFwcCBTdG9yZSBJbnN0cnVjdGlvbnMgVmlkZW9cIlxuICAgICAgICAvPlxuICAgICAgPC9hPlxuICAgICAgPGEgXG4gICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctbGlua1wiIFxuICAgICAgICBocmVmPVwiLyMvY3Jvc3MtY2hhaW5cIlxuICAgICAgPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIiBcbiAgICAgICAgICBzcmM9e2xpZ2h0SW1hZ2V9IFxuICAgICAgICAgIGFsdD1cIkNyb3NzIENoYWluIFRyYW5zYWN0aW9uIEluc3RydWN0aW9ucyBWaWRlb1wiXG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC50aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICAuc3VidGl0bGUge1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmluZm8ge1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl19 */\\n/*@ sourceURL=/Users/noahmaizels/Desktop/wan-guide/pages/index.js */\"));\n}\n\n_s(HomePage, \"avaWeDctHFwWP+lC5+N1mkv/uq8=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImJldGFJbWFnZSIsIm13d0ltYWdlIiwibGlnaHRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ1hDLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUlsQixTQUNBLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQUEsd0NBQW1CLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFjLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsRUFJRTtBQUFBLHdDQUFjLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUZBSkYsQ0FERixDQURGLENBRkEsRUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUNFLFFBQUksRUFBQyxpQkFEUDtBQUFBLHdDQUVZLGNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBRUUsT0FBRyxFQUFFQyxTQUZQO0FBR0UsT0FBRyxFQUFDLGlDQUhOO0FBQUEsd0NBQ1ksZUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FEQSxDQURGLEVBZUU7QUFFRSxRQUFJLEVBQUMsa0JBRlA7QUFBQSx3Q0FDWSxjQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUVFLE9BQUcsRUFBRUMsUUFGUDtBQUdFLE9BQUcsRUFBQyxtQ0FITjtBQUFBLHdDQUNZLGVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBZkYsRUF5QkU7QUFFRSxRQUFJLEVBQUMsaUJBRlA7QUFBQSx3Q0FDWSx5QkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFFRSxPQUFHLEVBQUVDLFVBRlA7QUFHRSxPQUFHLEVBQUMsaUNBSE47QUFBQSx3Q0FDWSxlQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQXpCRixFQW1DRTtBQUVFLFFBQUksRUFBQyxlQUZQO0FBQUEsd0NBQ1ksY0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFFRSxPQUFHLEVBQUVBLFVBRlA7QUFHRSxPQUFHLEVBQUMsK0JBSE47QUFBQSx3Q0FDWSxlQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQW5DRixFQTZDRTtBQUVFLFFBQUksRUFBQyxnQkFGUDtBQUFBLHdDQUNZLGNBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBRUUsT0FBRyxFQUFFQSxVQUZQO0FBR0UsT0FBRyxFQUFDLDRDQUhOO0FBQUEsd0NBQ1ksZUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0E3Q0YsQ0FERixDQWRBO0FBQUE7QUFBQTtBQUFBLGt6SEFEQTtBQTBGRDs7R0E5RlFOLFE7O0tBQUFBLFE7QUFnR01BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIilcbiAgXG4gIFxuICByZXR1cm4gKFxuICA8TGF5b3V0PlxuICBcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5IGhlcm8tYm9keS1wYWRkaW5nLWxhcmdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaGFzLXRleHQtd2hpdGVcIj5cbiAgICAgICAgICBXZWxjb21lIHRvIFdhbmNoYWluLmd1aWRlXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBoYXMtdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFRoaXMgd2Vic2l0ZSBmZWF0dXJlcyB2aWRlbyBndWlkZXMgYW5kIGluc3RydWN0aW9ucyBmb3IgV2FuY2hhaW4gc29mdHdhcmVcbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9saWdodHdhbGxldFwiPlxuICAgICAgPGEgXG4gICAgICAgIGhyZWY9XCIvIy9saWdodC13YWxsZXRcIiBcbiAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldy1saW5rXCJcbiAgICAgID5cbiAgICAgICAgPGltZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCIgXG4gICAgICAgICAgc3JjPXtiZXRhSW1hZ2V9XG4gICAgICAgICAgYWx0PVwiTGlnaHQgV2FsbGV0IEluc3RydWN0aW9ucyBWaWRlb1wiXG4gICAgICAgIC8+XG4gICAgICA8L2E+IFxuICAgICAgXG4gICAgICA8L0xpbms+XG4gICAgICAgXG4gICAgICA8YSBcbiAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldy1saW5rXCIgXG4gICAgICAgIGhyZWY9XCIvIy9teS13YW4td2FsbGV0XCJcbiAgICAgID5cbiAgICAgICAgPGltZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCIgXG4gICAgICAgICAgc3JjPXttd3dJbWFnZX0gXG4gICAgICAgICAgYWx0PVwiTXlXYW5XYWxsZXQuaW8gSW5zdHJ1Y3Rpb25zIFZpZGVvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIFxuICAgICAgICBjbGFzc05hbWU9XCJsaWdodC1saW5rIHByZXZpZXctbGlua1wiIFxuICAgICAgICBocmVmPVwiLyMvbGlnaHQtd2FsbGV0XCJcbiAgICAgID5cbiAgICAgICAgPGltZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCIgXG4gICAgICAgICAgc3JjPXtsaWdodEltYWdlfSBcbiAgICAgICAgICBhbHQ9XCJMaWdodCBXYWxsZXQgSW5zdHJ1Y3Rpb25zIFZpZGVvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIFxuICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWxpbmtcIiBcbiAgICAgICAgaHJlZj1cIi8jL2RhcHAtc3RvcmVcIlxuICAgICAgPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIiBcbiAgICAgICAgICBzcmM9e2xpZ2h0SW1hZ2V9IFxuICAgICAgICAgIGFsdD1cIkRBcHAgU3RvcmUgSW5zdHJ1Y3Rpb25zIFZpZGVvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIFxuICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWxpbmtcIiBcbiAgICAgICAgaHJlZj1cIi8jL2Nyb3NzLWNoYWluXCJcbiAgICAgID5cbiAgICAgICAgPGltZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCIgXG4gICAgICAgICAgc3JjPXtsaWdodEltYWdlfSBcbiAgICAgICAgICBhbHQ9XCJDcm9zcyBDaGFpbiBUcmFuc2FjdGlvbiBJbnN0cnVjdGlvbnMgVmlkZW9cIlxuICAgICAgICAvPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAudGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})