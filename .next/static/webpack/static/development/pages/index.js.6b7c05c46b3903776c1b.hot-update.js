webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components */ "./components/index.js");






var _jsxFileName = "I:\\Projects\\nextHackerNewsApp\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
// React library will not be required to be imported, when working with Next.js





var index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(index, _React$Component);

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          page = _this$props.page,
          stories = _this$props.stories;

      if (stories.length === 0) {
        return __jsx(next_error__WEBPACK_IMPORTED_MODULE_9___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        });
      }

      return __jsx(_components__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
        title: "Hacker Next",
        description: "A Hacker News clone made with Next.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_11__["StoryList"], {
        stories: stories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("footer", {
        className: "jsx-940261449",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/?page=".concat(page + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-940261449" + " " + "next-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Next Page(", page + 1, ")"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "940261449",
        __self: this
      }, "footer.jsx-940261449{padding:1em;}footer.jsx-940261449 a.jsx-940261449{font-weight:bold;color:3000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkk6XFxQcm9qZWN0c1xcbmV4dEhhY2tlck5ld3NBcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QzRCLEFBR3FDLEFBR0ssWUFGckIsS0FHZSxXQUNmIiwiZmlsZSI6Ikk6XFxQcm9qZWN0c1xcbmV4dEhhY2tlck5ld3NBcHBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFJlYWN0IGxpYnJhcnkgd2lsbCBub3QgYmUgcmVxdWlyZWQgdG8gYmUgaW1wb3J0ZWQsIHdoZW4gd29ya2luZyB3aXRoIE5leHQuanNcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IExheW91dCwgU3RvcnlMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cydcclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHsvL2Rlc3RydWN0dXJpemluZyB0aGUgY29udGV4dCBvYmplY3QgPT4gcmVxL3JlcyBmcm9tIGVydmVyLCBxdWVyeSBwYXJhbSBmcm9tIHVybFxyXG4gICAgICAgIC8vcXVlcnkgPT4gY2FuIGJlIHVzZWQgdG8gZHluYW1pY2FsbHkgY2hhbmdlIHRoZSBlbmRwb2ludCwgdGhhdCdzIGN1cnJlbnRseSBiZWluZyBhY2Nlc3NlZCwgYmFzZWQgb24gdGhlIHBhZ2UgdGhhdCB3YXMgcmVxdWVzdGVkXHJcblxyXG4gICAgICAgIGxldCBzdG9yaWVzLCBwYWdlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGMgdGhlIHBhZ2UgdmFsdWUgd2l0aCB0aGUgcmVxdWVzdCBkYXRhXHJcbiAgICAgICAgICAgIHBhZ2UgPSBOdW1iZXIocXVlcnkucGFnZSkgfHwgMTtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIHVzZXIgaXMgaW4gdGhlIGhvbWVwYWdlIGFuZCBoYXMgbm90IHJlcXVlc3RlZCBhbnkgcGFnZXMgYmVmb3JlLCB0aGUgcXVlcnkgcGFyYW0gd29uJ3QgYmUgYXZhaWxhYmxlIGluIHRoZS0gXHJcbiAgICAgICAgICAgIC8vLWNvbnRleHQgb2JqLCBzbyB0aGUgcGFnZSBpcyBnaXZlbiB0aGUgdmFsdWUgb2YgMSBhdCB0aGF0IHRpbWUgJiBpZiBub3QsIHRoZSBwYWdlIG51bWJlciBpcyBleHRyYWN0ZWQgZnJvbSB0aGUgcXVlcnktXHJcbiAgICAgICAgICAgIC8vLSBwYXJhbSBhbmQgc2luY2UgaXQgd291bGQgYmUgYSBzdHJpbmcge3BhZ2U6IDN9LCBpdCBpcyBjb252ZXJ0ZWQgdG8gYSBudW1iZXJcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vbmV3cz9wYWdlPSR7cGFnZX1gKTtcclxuICAgICAgICAgICAgc3RvcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gUGFyc2luZyB0aGUgSlNPTiBEYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgc3RvcmllcyA9IFtdOyAvLyBOb3QgdG8gdGhyb3cgYW55KHtwYWdlICsgMX0pIHdlaXJkIGVycm9yIG9uIHRoZSBwYWdlLCB3aGlsZSB0cnlpbiB0byBsb29wIG9lciBzb21ldGhpbmcgdGhhdCdzIGVtcHR5L25vbi1pdGVyYWJsZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcGFnZSwgc3RvcmllcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhZ2UsIHN0b3JpZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChzdG9yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9XCJIYWNrZXIgTmV4dFwiIGRlc2NyaXB0aW9uPVwiQSBIYWNrZXIgTmV3cyBjbG9uZSBtYWRlIHdpdGggTmV4dC5qc1wiPlxyXG4gICAgICAgICAgICAgICAgPFN0b3J5TGlzdCBzdG9yaWVzPXtzdG9yaWVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLz9wYWdlPSR7cGFnZSArIDF9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5leHQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dCBQYWdlKHtwYWdlICsgMX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogMzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il19 */\n/*@ sourceURL=I:\\\\Projects\\\\nextHackerNewsApp\\\\pages\\\\index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, res, query, stories, page, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req, res = _ref.res, query = _ref.query;
              _context.prev = 1;
              // calc the page value with the request data
              page = Number(query.page) || 1; // if the user is in the homepage and has not requested any pages before, the query param won't be available in the- 
              //-context obj, so the page is given the value of 1 at that time & if not, the page number is extracted from the query-
              //- param and since it would be a string {page: 3}, it is converted to a number

              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default()("https://node-hnapi.herokuapp.com/news?page=".concat(page)));

            case 5:
              response = _context.sent;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 8:
              stories = _context.sent;
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              stories = []; // Not to throw any({page + 1}) weird error on the page, while tryin to loop oer something that's empty/non-iterable

            case 15:
              return _context.abrupt("return", {
                page: page,
                stories: stories
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 11]]);
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.6b7c05c46b3903776c1b.hot-update.js.map