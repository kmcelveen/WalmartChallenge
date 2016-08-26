webpackHotUpdate(0,{

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(234);\n\nvar _actions = __webpack_require__(259);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LocaleList = function (_React$Component) {\n  _inherits(LocaleList, _React$Component);\n\n  function LocaleList(props) {\n    _classCallCheck(this, LocaleList);\n\n    var _this = _possibleConstructorReturn(this, (LocaleList.__proto__ || Object.getPrototypeOf(LocaleList)).call(this, props));\n\n    _this.state = {\n      value: '',\n      country: ''\n    };\n    return _this;\n  }\n\n  _createClass(LocaleList, [{\n    key: 'handleContent',\n    value: function handleContent(country) {\n      var _this2 = this;\n\n      fetch('/location/' + country).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var shit = data.main[country].delimiters[_this2.props.propertyName];\n        var dem = JSON.stringify(shit);\n        _this2.setState({\n          value: dem,\n          country: country\n        });\n        _this2.props.dispatch((0, _actions.getDelimiter)(dem));\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var listItemStyles = {\n        cursor: \"pointer\",\n        backgroundColor: \"#D6D6D6\",\n        fontFamily: 'Baloo Tamma, cursive',\n        fontWeight: 'bold',\n        marginBottom: '5'\n      };\n      return _react2.default.createElement(\n        'div',\n        { className: 'row' },\n        _react2.default.createElement(\n          'div',\n          { className: 'col-sm-4' },\n          _react2.default.createElement(\n            'ul',\n            { className: 'list-group' },\n            this.props.list ? this.props.list.map(function (item, index) {\n              var country = item.path.split('/')[1];\n              return _react2.default.createElement(\n                'li',\n                { style: listItemStyles, className: 'list-group-item', key: index, onClick: function onClick() {\n                    return _this3.handleContent(country);\n                  } },\n                country\n              );\n            }) : null\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'col-sm-4' },\n          _react2.default.createElement(\n            'h2',\n            null,\n            this.state.value.length ? \"Output for\" : null,\n            ' ',\n            this.state.country\n          ),\n          _react2.default.createElement(\n            'h1',\n            null,\n            this.state.value.length ? this.state.value : null\n          )\n        )\n      );\n    }\n  }]);\n\n  return LocaleList;\n}(_react2.default.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    localeList: state.localeList,\n    propertyName: state.propertyName,\n    delimiter: state.delimiter\n  };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(LocaleList);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/components/LocaleList.js\n ** module id = 282\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/components/LocaleList.js?");

/***/ }

})