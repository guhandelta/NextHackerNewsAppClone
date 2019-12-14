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
        className: "jsx-913505887",
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
        className: "jsx-913505887" + " " + "next-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Next Page"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "913505887",
        __self: this
      }, ".next-link.jsx-913505887{margin-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkk6XFxQcm9qZWN0c1xcbmV4dEhhY2tlck5ld3NBcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QzRCLEFBSW9CLGVBQUMiLCJmaWxlIjoiSTpcXFByb2plY3RzXFxuZXh0SGFja2VyTmV3c0FwcFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVhY3QgbGlicmFyeSB3aWxsIG5vdCBiZSByZXF1aXJlZCB0byBiZSBpbXBvcnRlZCwgd2hlbiB3b3JraW5nIHdpdGggTmV4dC5qc1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTGF5b3V0LCBTdG9yeUxpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xyXG5cclxuY2xhc3MgaW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHJlcywgcXVlcnkgfSkgey8vZGVzdHJ1Y3R1cml6aW5nIHRoZSBjb250ZXh0IG9iamVjdCA9PiByZXEvcmVzIGZyb20gZXJ2ZXIsIHF1ZXJ5IHBhcmFtIGZyb20gdXJsXHJcbiAgICAgICAgLy9xdWVyeSA9PiBjYW4gYmUgdXNlZCB0byBkeW5hbWljYWxseSBjaGFuZ2UgdGhlIGVuZHBvaW50LCB0aGF0J3MgY3VycmVudGx5IGJlaW5nIGFjY2Vzc2VkLCBiYXNlZCBvbiB0aGUgcGFnZSB0aGF0IHdhcyByZXF1ZXN0ZWRcclxuXHJcbiAgICAgICAgbGV0IHN0b3JpZXMsIHBhZ2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gY2FsYyB0aGUgcGFnZSB2YWx1ZSB3aXRoIHRoZSByZXF1ZXN0IGRhdGFcclxuICAgICAgICAgICAgcGFnZSA9IE51bWJlcihxdWVyeS5wYWdlKSB8fCAxO1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgdXNlciBpcyBpbiB0aGUgaG9tZXBhZ2UgYW5kIGhhcyBub3QgcmVxdWVzdGVkIGFueSBwYWdlcyBiZWZvcmUsIHRoZSBxdWVyeSBwYXJhbSB3b24ndCBiZSBhdmFpbGFibGUgaW4gdGhlLSBcclxuICAgICAgICAgICAgLy8tY29udGV4dCBvYmosIHNvIHRoZSBwYWdlIGlzIGdpdmVuIHRoZSB2YWx1ZSBvZiAxIGF0IHRoYXQgdGltZSAmIGlmIG5vdCwgdGhlIHBhZ2UgbnVtYmVyIGlzIGV4dHJhY3RlZCBmcm9tIHRoZSBxdWVyeS1cclxuICAgICAgICAgICAgLy8tIHBhcmFtIGFuZCBzaW5jZSBpdCB3b3VsZCBiZSBhIHN0cmluZyB7cGFnZTogM30sIGl0IGlzIGNvbnZlcnRlZCB0byBhIG51bWJlclxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9uZXdzP3BhZ2U9MScpO1xyXG4gICAgICAgICAgICBzdG9yaWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBQYXJzaW5nIHRoZSBKU09OIERhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzdG9yaWVzID0gW107IC8vIE5vdCB0byB0aHJvdyBhbnkgd2VpcmQgZXJyb3Igb24gdGhlIHBhZ2UsIHdoaWxlIHRyeWluIHRvIGxvb3Agb2VyIHNvbWV0aGluZyB0aGF0J3MgZW1wdHkvbm9uLWl0ZXJhYmxlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBwYWdlLCBzdG9yaWVzIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZSwgc3RvcmllcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHN0b3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCB0aXRsZT1cIkhhY2tlciBOZXh0XCIgZGVzY3JpcHRpb249XCJBIEhhY2tlciBOZXdzIGNsb25lIG1hZGUgd2l0aCBOZXh0LmpzXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RvcnlMaXN0IHN0b3JpZXM9e3N0b3JpZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvP3BhZ2U9JHtwYWdlICsgMX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV4dC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0IFBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0LWxpbmt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXX0= */\n/*@ sourceURL=I:\\\\Projects\\\\nextHackerNewsApp\\\\pages\\\\index.js */"));
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
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default()('https://node-hnapi.herokuapp.com/news?page=1'));

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
              stories = []; // Not to throw any weird error on the page, while tryin to loop oer something that's empty/non-iterable

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
//# sourceMappingURL=index.js.dc256ea93c0295f4140d.hot-update.js.map