webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/noahmaizels/Desktop/wan-guide/components/layout.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction Layout(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"hidden\"),\n      dropdown = _useState2[0],\n      setDropdown = _useState2[1];\n\n  var menuClickHandler = function menuClickHandler() {\n    menu === null ? setMenu(\"is-active\") : setMenu(null);\n  };\n\n  var dropdownClickHandler = function dropdownClickHandler() {\n    dropdown === null ? setDropdown(\"hidden\") : setDropdown(null);\n  };\n\n  return __jsx(\"div\", {\n    className: \"jsx-708323698\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap\",\n    rel: \"stylesheet\",\n    className: \"jsx-708323698\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })), __jsx(\"nav\", {\n    role: \"navigation\",\n    \"aria-label\": \"main navigation\",\n    className: \"jsx-708323698\" + \" \" + \"navbar is-black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-brand\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"/logo.png\",\n    width: \"112\",\n    height: \"28\",\n    className: \"jsx-708323698\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  }))), __jsx(\"a\", {\n    role: \"button\",\n    onClick: menuClickHandler,\n    \"aria-label\": \"menu\",\n    \"aria-expanded\": \"false\",\n    \"data-target\": \"navbarBasicExample\",\n    className: \"jsx-708323698\" + \" \" + \"navbar-burger burger\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    \"aria-hidden\": \"true\",\n    className: \"jsx-708323698\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }), __jsx(\"span\", {\n    \"aria-hidden\": \"true\",\n    className: \"jsx-708323698\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }), __jsx(\"span\", {\n    \"aria-hidden\": \"true\",\n    className: \"jsx-708323698\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    id: \"navbarBasicExample\",\n    className: \"jsx-708323698\" + \" \" + \"navbar-menu \".concat(menu),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-start\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-end\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, \"Home\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"Documentation\")), __jsx(\"div\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item has-dropdown is-hoverable\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    onClick: dropdownClickHandler,\n    className: \"jsx-708323698\" + \" \" + \"navbar-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }, \"Video Guides\"), __jsx(\"div\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-dropdown is-right \".concat(dropdown),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/crosschain\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }, \"Cross Chain\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/dappstore\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, \"DApp Store\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/lightwallet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }, \"Light Wallet\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mywanwallet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, \"MyWanWallet\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/staking\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 21\n    }\n  }, \"Staking\")), __jsx(\"hr\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-divider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    className: \"jsx-708323698\" + \" \" + \"navbar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, \"Report an issue\")))))), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"708323698\",\n    __self: this\n  }, \".hidden.jsx-708323698{display:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3dhbi1ndWlkZS9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RmtCLEFBR3dCLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3Avd2FuLWd1aWRlL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG5cbiAgY29uc3QgW21lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2Ryb3Bkb3duLCBzZXREcm9wZG93bl0gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxuXG4gIGNvbnN0IG1lbnVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgbWVudSA9PT0gbnVsbCA/IHNldE1lbnUoXCJpcy1hY3RpdmVcIikgOiBzZXRNZW51KG51bGwpXG4gIH1cblxuICBjb25zdCBkcm9wZG93bkNsaWNrSGFuZGxlciA9ICgpID0+IHtcblxuICAgIGRyb3Bkb3duID09PSBudWxsID8gc2V0RHJvcGRvd24oXCJoaWRkZW5cIikgOiBzZXREcm9wZG93bihudWxsKVxuICB9XG4gXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NDAwLDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaXMtYmxhY2tcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiB3aWR0aD1cIjExMlwiIGhlaWdodD1cIjI4XCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgb25DbGljaz17bWVudUNsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPVwibmF2YmFyLWJ1cmdlciBidXJnZXJcIiBhcmlhLWxhYmVsPVwibWVudVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGRhdGEtdGFyZ2V0PVwibmF2YmFyQmFzaWNFeGFtcGxlXCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwibmF2YmFyQmFzaWNFeGFtcGxlXCIgY2xhc3NOYW1lPXtgbmF2YmFyLW1lbnUgJHttZW51fWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLWRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtkcm9wZG93bkNsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtcIj5cbiAgICAgICAgICAgICAgICBWaWRlbyBHdWlkZXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmJhci1kcm9wZG93biBpcy1yaWdodCAke2Ryb3Bkb3dufWB9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcm9zc2NoYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+Q3Jvc3MgQ2hhaW48L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RhcHBzdG9yZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkRBcHAgU3RvcmU8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xpZ2h0d2FsbGV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+TGlnaHQgV2FsbGV0PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXdhbndhbGxldFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPk15V2FuV2FsbGV0PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdGFraW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+U3Rha2luZzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibmF2YmFyLWRpdmlkZXJcIi8+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIFJlcG9ydCBhbiBpc3N1ZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2AgICAgXG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICBcbiAgICA8L2Rpdj5cbiAgKSAgXG59Il19 */\\n/*@ sourceURL=/Users/noahmaizels/Desktop/wan-guide/components/layout.js */\"));\n}\n\n_s(Layout, \"ugWjBWd9JkkPj0qlD6GADvD7xQc=\");\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJtZW51Iiwic2V0TWVudSIsImRyb3Bkb3duIiwic2V0RHJvcGRvd24iLCJtZW51Q2xpY2tIYW5kbGVyIiwiZHJvcGRvd25DbGlja0hhbmRsZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQUEsa0JBRVpDLHNEQUFRLENBQUMsSUFBRCxDQUZJO0FBQUEsTUFFN0JDLElBRjZCO0FBQUEsTUFFdkJDLE9BRnVCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLFFBQUQsQ0FISjtBQUFBLE1BRzdCRyxRQUg2QjtBQUFBLE1BR25CQyxXQUhtQjs7QUFLcEMsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCSixRQUFJLEtBQUssSUFBVCxHQUFnQkMsT0FBTyxDQUFDLFdBQUQsQ0FBdkIsR0FBdUNBLE9BQU8sQ0FBQyxJQUFELENBQTlDO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFFakNILFlBQVEsS0FBSyxJQUFiLEdBQW9CQyxXQUFXLENBQUMsUUFBRCxDQUEvQixHQUE0Q0EsV0FBVyxDQUFDLElBQUQsQ0FBdkQ7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsMEVBQVg7QUFBc0YsT0FBRyxFQUFDLFlBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFpQyxRQUFJ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O0FBQUE7QUFBQTtBQUFBLG9CQURGLENBUEosRUFVSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWEsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBVkosRUFhSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWEsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FiSixFQWlCRTtBQUFBLHVDQUFjLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkU7QUFBQSx1Q0FBYSxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJGLENBSkYsQ0FiRixDQUxGLENBZEYsQ0FKRixFQWtFR0osS0FBSyxDQUFDUSxRQWxFVDtBQUFBO0FBQUE7QUFBQSw4a0pBREY7QUE0RUQ7O0dBMUZ1QlQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG5cbiAgY29uc3QgW21lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2Ryb3Bkb3duLCBzZXREcm9wZG93bl0gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxuXG4gIGNvbnN0IG1lbnVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgbWVudSA9PT0gbnVsbCA/IHNldE1lbnUoXCJpcy1hY3RpdmVcIikgOiBzZXRNZW51KG51bGwpXG4gIH1cblxuICBjb25zdCBkcm9wZG93bkNsaWNrSGFuZGxlciA9ICgpID0+IHtcblxuICAgIGRyb3Bkb3duID09PSBudWxsID8gc2V0RHJvcGRvd24oXCJoaWRkZW5cIikgOiBzZXREcm9wZG93bihudWxsKVxuICB9XG4gXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NDAwLDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaXMtYmxhY2tcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiB3aWR0aD1cIjExMlwiIGhlaWdodD1cIjI4XCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgb25DbGljaz17bWVudUNsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPVwibmF2YmFyLWJ1cmdlciBidXJnZXJcIiBhcmlhLWxhYmVsPVwibWVudVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGRhdGEtdGFyZ2V0PVwibmF2YmFyQmFzaWNFeGFtcGxlXCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwibmF2YmFyQmFzaWNFeGFtcGxlXCIgY2xhc3NOYW1lPXtgbmF2YmFyLW1lbnUgJHttZW51fWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLWRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtkcm9wZG93bkNsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtcIj5cbiAgICAgICAgICAgICAgICBWaWRlbyBHdWlkZXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmJhci1kcm9wZG93biBpcy1yaWdodCAke2Ryb3Bkb3dufWB9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcm9zc2NoYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+Q3Jvc3MgQ2hhaW48L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RhcHBzdG9yZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkRBcHAgU3RvcmU8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xpZ2h0d2FsbGV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+TGlnaHQgV2FsbGV0PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXdhbndhbGxldFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPk15V2FuV2FsbGV0PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdGFraW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+U3Rha2luZzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibmF2YmFyLWRpdmlkZXJcIi8+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIFJlcG9ydCBhbiBpc3N1ZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2AgICAgXG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICBcbiAgICA8L2Rpdj5cbiAgKSAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

})