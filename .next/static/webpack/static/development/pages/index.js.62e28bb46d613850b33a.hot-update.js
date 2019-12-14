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
        className: "jsx-764272073",
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
        className: "jsx-764272073" + " " + "next-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Next Page(", page + 1, ")"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "764272073",
        __self: this
      }, "footer.jsx-764272073{padding:1em;}footer.jsx-764272073 a.jsx-764272073{font-weight:bold;color:#000;-webkit-text-decoration:none;text-decoration:none;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkk6XFxQcm9qZWN0c1xcbmV4dEhhY2tlck5ld3NBcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QzRCLEFBR3FDLEFBR0ssWUFGckIsS0FHZSxXQUNVLGtEQUNKLGlCQUNyQiIsImZpbGUiOiJJOlxcUHJvamVjdHNcXG5leHRIYWNrZXJOZXdzQXBwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWFjdCBsaWJyYXJ5IHdpbGwgbm90IGJlIHJlcXVpcmVkIHRvIGJlIGltcG9ydGVkLCB3aGVuIHdvcmtpbmcgd2l0aCBOZXh0LmpzXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBMYXlvdXQsIFN0b3J5TGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMnXHJcblxyXG5jbGFzcyBpbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcmVzLCBxdWVyeSB9KSB7Ly9kZXN0cnVjdHVyaXppbmcgdGhlIGNvbnRleHQgb2JqZWN0ID0+IHJlcS9yZXMgZnJvbSBlcnZlciwgcXVlcnkgcGFyYW0gZnJvbSB1cmxcclxuICAgICAgICAvL3F1ZXJ5ID0+IGNhbiBiZSB1c2VkIHRvIGR5bmFtaWNhbGx5IGNoYW5nZSB0aGUgZW5kcG9pbnQsIHRoYXQncyBjdXJyZW50bHkgYmVpbmcgYWNjZXNzZWQsIGJhc2VkIG9uIHRoZSBwYWdlIHRoYXQgd2FzIHJlcXVlc3RlZFxyXG5cclxuICAgICAgICBsZXQgc3RvcmllcywgcGFnZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBjYWxjIHRoZSBwYWdlIHZhbHVlIHdpdGggdGhlIHJlcXVlc3QgZGF0YVxyXG4gICAgICAgICAgICBwYWdlID0gTnVtYmVyKHF1ZXJ5LnBhZ2UpIHx8IDE7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSB1c2VyIGlzIGluIHRoZSBob21lcGFnZSBhbmQgaGFzIG5vdCByZXF1ZXN0ZWQgYW55IHBhZ2VzIGJlZm9yZSwgdGhlIHF1ZXJ5IHBhcmFtIHdvbid0IGJlIGF2YWlsYWJsZSBpbiB0aGUtIFxyXG4gICAgICAgICAgICAvLy1jb250ZXh0IG9iaiwgc28gdGhlIHBhZ2UgaXMgZ2l2ZW4gdGhlIHZhbHVlIG9mIDEgYXQgdGhhdCB0aW1lICYgaWYgbm90LCB0aGUgcGFnZSBudW1iZXIgaXMgZXh0cmFjdGVkIGZyb20gdGhlIHF1ZXJ5LVxyXG4gICAgICAgICAgICAvLy0gcGFyYW0gYW5kIHNpbmNlIGl0IHdvdWxkIGJlIGEgc3RyaW5nIHtwYWdlOiAzfSwgaXQgaXMgY29udmVydGVkIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL25ld3M/cGFnZT0ke3BhZ2V9YCk7XHJcbiAgICAgICAgICAgIHN0b3JpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIFBhcnNpbmcgdGhlIEpTT04gRGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHN0b3JpZXMgPSBbXTsgLy8gTm90IHRvIHRocm93IGFueSh7cGFnZSArIDF9KSB3ZWlyZCBlcnJvciBvbiB0aGUgcGFnZSwgd2hpbGUgdHJ5aW4gdG8gbG9vcCBvZXIgc29tZXRoaW5nIHRoYXQncyBlbXB0eS9ub24taXRlcmFibGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHBhZ2UsIHN0b3JpZXMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlLCBzdG9yaWVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoc3Rvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs1MDN9IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiSGFja2VyIE5leHRcIiBkZXNjcmlwdGlvbj1cIkEgSGFja2VyIE5ld3MgY2xvbmUgbWFkZSB3aXRoIE5leHQuanNcIj5cclxuICAgICAgICAgICAgICAgIDxTdG9yeUxpc3Qgc3Rvcmllcz17c3Rvcmllc30gLz5cclxuICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8/cGFnZT0ke3BhZ2UgKyAxfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXh0LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHQgUGFnZSh7cGFnZSArIDF9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdfQ== */\n/*@ sourceURL=I:\\\\Projects\\\\nextHackerNewsApp\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=index.js.62e28bb46d613850b33a.hot-update.js.map