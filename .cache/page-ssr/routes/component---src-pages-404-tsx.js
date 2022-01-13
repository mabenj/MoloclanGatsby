"use strict";
exports.id = "component---src-pages-404-tsx";
exports.ids = ["component---src-pages-404-tsx"];
exports.modules = {

/***/ "./src/components/PageComponents/NotFound.tsx":
/*!****************************************************!*\
  !*** ./src/components/PageComponents/NotFound.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _img_404_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/404.jpg */ "./src/img/404.jpg");


function NotFound() {
  return /*#__PURE__*/React.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], null, /*#__PURE__*/React.createElement("h1", null, "404"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Eip\xE4s l\xF6ytynykk\xE4\xE4n"), /*#__PURE__*/React.createElement("img", {
    src: _img_404_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "lego-ukko",
    width: "100%",
    className: "rounded"
  }));
}

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Wrapper = ({
  children,
  id
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: id,
    className: "wrapper back-blur"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var _components_PageComponents_NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PageComponents/NotFound */ "./src/components/PageComponents/NotFound.tsx");

function NotFoundPage() {
  return /*#__PURE__*/React.createElement(_components_PageComponents_NotFound__WEBPACK_IMPORTED_MODULE_0__["default"], null);
}

/***/ }),

/***/ "./src/img/404.jpg":
/*!*************************!*\
  !*** ./src/img/404.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/404-02be85eff0e01ce4d6cf9e5e267867ad.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-tsx.js.map