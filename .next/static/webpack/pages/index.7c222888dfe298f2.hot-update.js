"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TransactionStatus.js":
/*!*****************************************!*\
  !*** ./components/TransactionStatus.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionStatus; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction TransactionStatus() {\n    var handleClose = function handleClose() {\n        setOpen(true);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), open = ref[0], setOpen = ref[1];\n    return;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {\n        show: open,\n        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n            as: \"div\",\n            className: \"fixed z-[99999] inset-0 overflow-y-auto\",\n            onClose: handleClose,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {\n                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                    enter: \"ease-out duration-300\",\n                    enterFrom: \"opacity-0\",\n                    enterTo: \"opacity-100\",\n                    leave: \"ease-in duration-200\",\n                    leaveFrom: \"opacity-100\",\n                    leaveTo: \"opacity-0\"\n                }, void 0, false, {\n                    fileName: \"/Users/smraddhi/Documents/uniswap/components/TransactionStatus.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/smraddhi/Documents/uniswap/components/TransactionStatus.js\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/smraddhi/Documents/uniswap/components/TransactionStatus.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/smraddhi/Documents/uniswap/components/TransactionStatus.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n};\n_s(TransactionStatus, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = TransactionStatus;\n;\nvar _c;\n$RefreshReg$(_c, \"TransactionStatus\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uU3RhdHVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ1I7QUFDVzs7QUFDckMsU0FBU00saUJBQWlCLEdBQUk7UUFFbENDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFFO1FBQ3BCQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7SUFIRCxJQUFxQk4sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUE3Qk8sSUFBSSxHQUFXUCxHQUFjLEdBQXpCLEVBQUNNLE9BQU8sR0FBR04sR0FBYyxHQUFqQjtJQUlsQixPQUFNO2tCQUVKLDhEQUFDRyw4REFBZTtRQUFDTSxJQUFJLEVBQUVGLElBQUk7UUFBRUcsRUFBRSxFQUFFWiwyQ0FBUTtrQkFDdkMsNEVBQUNJLHFEQUFNO1lBQ0xRLEVBQUUsRUFBQyxLQUFLO1lBQ1JDLFNBQVMsRUFBRSx5Q0FBeUM7WUFDcERDLE9BQU8sRUFBRVAsV0FBVztzQkFFbEIsNEVBQUNRLEtBQUc7Z0JBQUNGLFNBQVMsRUFBQywyRkFBMkY7MEJBQ3hHLDRFQUFDUiwrREFBZ0I7b0JBQ2hCTyxFQUFFLEVBQUVaLDJDQUFRO29CQUNaaUIsS0FBSyxFQUFDLHVCQUF1QjtvQkFDN0JDLFNBQVMsRUFBQyxXQUFXO29CQUNyQkMsT0FBTyxFQUFDLGFBQWE7b0JBQ3JCQyxLQUFLLEVBQUMsc0JBQXNCO29CQUM1QkMsU0FBUyxFQUFDLGFBQWE7b0JBQ3ZCQyxPQUFPLEVBQUMsV0FBVzs7Ozs7d0JBRUE7Ozs7O29CQUNoQjs7Ozs7Z0JBQ0M7Ozs7O1lBQ0ssQ0FDbEI7Q0FDSDtHQTVCdUJoQixpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uU3RhdHVzLmpzPzUyYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGcmFnbWVudCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xvYWRpbmd9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiXG5pbXBvcnQge0RpYWxvZyxUcmFuc2l0aW9ufSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uU3RhdHVzKCkgIHtcbiAgY29uc3Rbb3BlbixzZXRPcGVuXT0gdXNlU3RhdGUodHJ1ZSk7XG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCl7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfVxuICByZXR1cm4gXG4gIChcbiAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e29wZW59IGFzPXtGcmFnbWVudH0+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIGFzPVwiZGl2XCJcbiAgICAgICAgY2xhc3NOYW1lPSBcImZpeGVkIHotWzk5OTk5XSBpbnNldC0wIG92ZXJmbG93LXktYXV0b1wiXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHQtNCBweC00IHBiLTIwIHRleHQtY2VudGVyIHNtOmJsb2NrIHNtOnAtMFwiPlxuICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgIDwvVHJhbnNpdGlvbi5Sb290PlxuICApO1xufTtcblxuXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxvYWRpbmciLCJEaWFsb2ciLCJUcmFuc2l0aW9uIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJoYW5kbGVDbG9zZSIsInNldE9wZW4iLCJvcGVuIiwiUm9vdCIsInNob3ciLCJhcyIsImNsYXNzTmFtZSIsIm9uQ2xvc2UiLCJkaXYiLCJDaGlsZCIsImVudGVyIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TransactionStatus.js\n"));

/***/ })

});