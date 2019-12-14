webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "I:\\Projects\\nextHackerNewsApp\\components\\StoryList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return __jsx("div", {
    className: "jsx-3572137583" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-3572137583" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-3572137583" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("a", {
      href: story.url,
      className: "jsx-3572137583",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, story.title)), __jsx("div", {
      className: "jsx-3572137583" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3572137583",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, story.points || 0, " points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3572137583",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, story.comments_count || 0, " comments"))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3572137583",
    __self: this
  }, ".story-list.jsx-3572137583{padding:0 1rem;}.story.jsx-3572137583{padding:1rem 0;}.story-title.jsx-3572137583{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5rem;}.story-title.jsx-3572137583 a.jsx-3572137583{color:#444;}.story-title.jsx-3572137583 a.jsx-3572137583:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-3572137583{font-size:0.4rem;font-weight:bold;}.story-details.jsx-3572137583 span.jsx-3572137583{margin-;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkk6XFxQcm9qZWN0c1xcbmV4dEhhY2tlck5ld3NBcHBcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmlCLEFBR29DLEFBR0EsQUFHQSxBQU1KLEFBR2UsQUFHVCxBQUt0QixRQUFDLEdBVkEsSUFaQSxBQUdBLEFBR29CLEVBWUMsY0FYUixHQVliLE1BWHlCLG9CQU96QixDQU5BIiwiZmlsZSI6Ikk6XFxQcm9qZWN0c1xcbmV4dEhhY2tlck5ld3NBcHBcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlcIiBrZXk9e3N0b3J5LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuc3RvcnktbGlzdHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3Rvcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN0b3J5LXRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3RvcnktdGl0bGUgYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN0b3J5LWRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0OyJdfQ== */\n/*@ sourceURL=I:\\\\Projects\\\\nextHackerNewsApp\\\\components\\\\StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.c242db58d709a01a198d.hot-update.js.map