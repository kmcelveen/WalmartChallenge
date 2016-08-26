webpackHotUpdate(0,{

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _actions = __webpack_require__(259);\n\nvar _reactRedux = __webpack_require__(234);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import { Button1 } from 'muicss/lib/react/button';\n\n\nvar LocaleForm = function (_React$Component) {\n  _inherits(LocaleForm, _React$Component);\n\n  function LocaleForm(props) {\n    _classCallCheck(this, LocaleForm);\n\n    var _this = _possibleConstructorReturn(this, (LocaleForm.__proto__ || Object.getPrototypeOf(LocaleForm)).call(this, props));\n\n    _this.state = {\n      option: ''\n    };\n    return _this;\n  }\n\n  _createClass(LocaleForm, [{\n    key: 'handleSubmit',\n    value: function handleSubmit(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n      var prop = this.userOption.options[this.userOption.selectedIndex].value;\n      this.setState({\n        option: prop\n      });\n      fetch('/userproperty/' + prop).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        _this2.props.dispatch((0, _actions.getLocaleData)(data));\n        _this2.props.dispatch((0, _actions.getPropName)(prop));\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'form',\n          { className: 'form-group', onSubmit: function onSubmit(e) {\n              return _this3.handleSubmit(e);\n            } },\n          _react2.default.createElement(\n            'select',\n            { className: 'form-control input-md', name: 'locale', ref: function ref(value) {\n                return _this3.userOption = value;\n              } },\n            _react2.default.createElement(\n              'option',\n              { value: 'quotationStart' },\n              'quotationStart'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'quotationEnd' },\n              'quotationEnd'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'alternateQuotationStart' },\n              'alternateQuotationStart'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'alternateQuotationEnd' },\n              'alternateQuotationEnd'\n            )\n          ),\n          _react2.default.createElement(\n            'button',\n            { className: 'btn btn-primary btn-md' },\n            'Click'\n          )\n        ),\n        _react2.default.createElement(\n          'h3',\n          null,\n          'You chose: ',\n          this.state.option\n        )\n      );\n    }\n  }]);\n\n  return LocaleForm;\n}(_react2.default.Component);\n\nexports.default = (0, _reactRedux.connect)()(LocaleForm);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/components/LocaleForm.js\n ** module id = 258\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/components/LocaleForm.js?");

/***/ }

})