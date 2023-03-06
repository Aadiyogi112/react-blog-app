"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst App = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"FIRST JSX ELEMENT\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Public\\\\Documents\\\\JS Fundamentals\\\\ReactBlogApp\\\\pages\\\\App.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE1BQU0sSUFBTTtJQUNoQixxQkFBTyw4REFBQ0M7a0JBQUc7Ozs7OztBQUNiO0FBRUEsaUVBQWVELEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdGJsb2dhcHAvLi9wYWdlcy9BcHAuanM/Y2M5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxoMT5GSVJTVCBKU1ggRUxFTUVOVDwvaDE+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsicmVhY3QiLCJBcHAiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/App.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./pages/App.js\");\n/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/configureStore */ \"./pages/redux/configureStore.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n// import \"./index.css\";\n\n// REDUX\n\n\nconst store = (0,_redux_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst RootElement = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Public\\\\Documents\\\\JS Fundamentals\\\\ReactBlogApp\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Public\\\\Documents\\\\JS Fundamentals\\\\ReactBlogApp\\\\pages\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Public\\\\Documents\\\\JS Fundamentals\\\\ReactBlogApp\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootElement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNqQyx3QkFBd0I7QUFDQTtBQUV4QixRQUFRO0FBQzRDO0FBQ0k7QUFFeEQsTUFBTU0sUUFBUUgsaUVBQWNBO0FBRTVCLE1BQU1JLGNBQWMsSUFBTTtJQUN4QixxQkFDRSw4REFBQ0YsaURBQWFBO1FBQUNDLE9BQU9BO2tCQUNwQiw0RUFBQ04seURBQWdCO3NCQUNiLDRFQUFDRSw0Q0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQUlkO0FBRUEsaUVBQWVLLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdGJsb2dhcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuLy8gaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuXHJcbi8vIFJFRFVYXHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwiLi9yZWR1eC9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciBhcyBSZWR1eFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XHJcblxyXG5jb25zdCBSb290RWxlbWVudCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlZHV4UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cclxuICAgIDwvUmVkdXhQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vdEVsZW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwiY29uZmlndXJlU3RvcmUiLCJQcm92aWRlciIsIlJlZHV4UHJvdmlkZXIiLCJzdG9yZSIsIlJvb3RFbGVtZW50IiwiU3RyaWN0TW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/redux/configureStore.js":
/*!***************************************!*\
  !*** ./pages/redux/configureStore.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ configureStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./pages/redux/reducers/index.js\");\n/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-immutable-state-invariant */ \"redux-immutable-state-invariant\");\n/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction configureStore(initialState) {\n    const composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__.compose; // add support for redux dev tools\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], initialState, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2___default()())));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWR1eC9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEQ7QUFDekI7QUFDdUM7QUFFN0QsU0FBU0ssZUFBZUMsWUFBWSxFQUFFO0lBQ2pELE1BQU1DLG1CQUFpQkwsMENBQU9BLEVBQUMsa0NBQWtDO0lBQ25FLE9BQU9GLGtEQUFXQSxDQUNoQkcsaURBQVdBLEVBQ1hHLGNBQ0FDLGlCQUFrQk4sc0RBQWVBLENBQUNHLHNFQUE0QkE7QUFFbEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0YmxvZ2FwcC8uL3BhZ2VzL3JlZHV4L2NvbmZpZ3VyZVN0b3JlLmpzPzE5OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0ICByZWR1eEltbXV0YWJsZVN0YXRlSW52YXJpYW50IGZyb20gXCJyZWR1eC1pbW11dGFibGUtc3RhdGUtaW52YXJpYW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAgIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnM9Y29tcG9zZTsvLyBhZGQgc3VwcG9ydCBmb3IgcmVkdXggZGV2IHRvb2xzXHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcm9vdFJlZHVjZXIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICBjb21wb3NlRW5oYW5jZXJzKCBhcHBseU1pZGRsZXdhcmUocmVkdXhJbW11dGFibGVTdGF0ZUludmFyaWFudCgpKSlcclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2UiLCJyb290UmVkdWNlciIsInJlZHV4SW1tdXRhYmxlU3RhdGVJbnZhcmlhbnQiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNvbXBvc2VFbmhhbmNlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/redux/configureStore.js\n");

/***/ }),

/***/ "./pages/redux/reducers/index.js":
/*!***************************************!*\
  !*** ./pages/redux/reducers/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postReducer */ \"./pages/redux/reducers/postReducer.js\");\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    post: _postReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ0E7QUFFeEMsTUFBTUUsY0FBY0Ysc0RBQWVBLENBQUM7SUFDbENHLE1BQU1GLG9EQUFXQTtBQUNuQjtBQUVBLGlFQUFlQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3RibG9nYXBwLy4vcGFnZXMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanM/ZGYyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHBvc3RSZWR1Y2VyIGZyb20gXCIuL3Bvc3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcG9zdDogcG9zdFJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJwb3N0UmVkdWNlciIsInJvb3RSZWR1Y2VyIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/redux/reducers/index.js\n");

/***/ }),

/***/ "./pages/redux/reducers/postReducer.js":
/*!*********************************************!*\
  !*** ./pages/redux/reducers/postReducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ counterReducer)\n/* harmony export */ });\nfunction counterReducer(state = [], action) {\n    switch(action.type){\n        case \"INCREASE_COUNTER_BY_ONE\":\n            return [\n                ...state,\n                {\n                    ...action.count + 1\n                }\n            ];\n        case \"INCREASE_COUNTER_BY_TWO\":\n            return [\n                ...state,\n                {\n                    ...action.count + 2\n                }\n            ];\n        case \"DECREASE_COUNTER_BY_ONE\":\n            return [\n                ...state,\n                {\n                    ...action.count - 1\n                }\n            ];\n        case \"DECREASE_COUNTER_BY_TWO\":\n            return [\n                ...state,\n                {\n                    ...action.count - 2\n                }\n            ];\n        default:\n            return state;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWR1eC9yZWR1Y2Vycy9wb3N0UmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsZUFBZUMsUUFBUSxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUN6RCxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFDSCxPQUFPO21CQUFJRjtnQkFBTztvQkFBRSxHQUFJQyxPQUFPRSxLQUFLLEdBQUcsQ0FBQztnQkFBRTthQUFFO1FBQzlDLEtBQUs7WUFDSCxPQUFPO21CQUFJSDtnQkFBTztvQkFBRSxHQUFJQyxPQUFPRSxLQUFLLEdBQUcsQ0FBQztnQkFBRTthQUFFO1FBQzlDLEtBQUs7WUFDSCxPQUFPO21CQUFJSDtnQkFBTztvQkFBRSxHQUFJQyxPQUFPRSxLQUFLLEdBQUcsQ0FBQztnQkFBRTthQUFFO1FBQzlDLEtBQUs7WUFDSCxPQUFPO21CQUFJSDtnQkFBTztvQkFBRSxHQUFJQyxPQUFPRSxLQUFLLEdBQUcsQ0FBQztnQkFBRTthQUFFO1FBQzlDO1lBQ0UsT0FBT0g7SUFDWDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdGJsb2dhcHAvLi9wYWdlcy9yZWR1eC9yZWR1Y2Vycy9wb3N0UmVkdWNlci5qcz9lYzRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdW50ZXJSZWR1Y2VyKHN0YXRlID0gW10sIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJJTkNSRUFTRV9DT1VOVEVSX0JZX09ORVwiOlxyXG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCB7IC4uLihhY3Rpb24uY291bnQgKyAxKSB9XTtcclxuICAgIGNhc2UgXCJJTkNSRUFTRV9DT1VOVEVSX0JZX1RXT1wiOlxyXG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCB7IC4uLihhY3Rpb24uY291bnQgKyAyKSB9XTtcclxuICAgIGNhc2UgXCJERUNSRUFTRV9DT1VOVEVSX0JZX09ORVwiOlxyXG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCB7IC4uLihhY3Rpb24uY291bnQgLSAxKSB9XTtcclxuICAgIGNhc2UgXCJERUNSRUFTRV9DT1VOVEVSX0JZX1RXT1wiOlxyXG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCB7IC4uLihhY3Rpb24uY291bnQgLSAyKSB9XTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/redux/reducers/postReducer.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-immutable-state-invariant":
/*!**************************************************!*\
  !*** external "redux-immutable-state-invariant" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("redux-immutable-state-invariant");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();