'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _injectName = require('uniforms/injectName');

var _injectName2 = _interopRequireDefault(_injectName);

var _joinName = require('uniforms/joinName');

var _joinName2 = _interopRequireDefault(_joinName);

var _AutoField = require('./AutoField');

var _AutoField2 = _interopRequireDefault(_AutoField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nest = function Nest(_ref) {
    var children = _ref.children,
        fields = _ref.fields,
        itemProps = _ref.itemProps,
        label = _ref.label,
        name = _ref.name,
        style = _ref.style,
        props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'fields', 'itemProps', 'label', 'name', 'style']);
    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: (0, _extends3.default)({ display: 'flex', flexDirection: 'column' }, style) }, (0, _filterDOMProps2.default)(props)),
        !!label && _react2.default.createElement(_Subheader2.default, { children: label, style: { paddingLeft: 0 } }),
        children ? (0, _injectName2.default)(name, children) : fields.map(function (key) {
            return _react2.default.createElement(_AutoField2.default, (0, _extends3.default)({ key: key, name: (0, _joinName2.default)(name, key) }, itemProps));
        })
    );
};

exports.default = (0, _connectField2.default)(Nest, { ensureValue: false, includeInChain: false });