webpackHotUpdate(0,{

/***/ 310:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getReducer = function getReducer() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? {\n    localeList: [],\n    propertyName: null,\n    delimiter: \"\"\n  } : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'LOCALE_DATA':\n      return Object.assign({}, state, { localeList: action.data.items });\n    case 'PROPERTY_NAME':\n      return Object.assign({}, state, { propertyName: action.propName });\n    case 'DELIMITER_VAL':\n      return Object.assign({}, state, { delimiter: action.delimiter });\n    default:\n      return state;\n  }\n};\n\nexports.default = getReducer;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/reducers/reducers.js\n ** module id = 310\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/reducers/reducers.js?");

/***/ }

})