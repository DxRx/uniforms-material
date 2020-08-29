'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _errorOutline = require('material-ui/svg-icons/alert/error-outline');

var _errorOutline2 = _interopRequireDefault(_errorOutline);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _nothing = require('uniforms/nothing');

var _nothing2 = _interopRequireDefault(_nothing);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
    var children = _ref.children,
        error = _ref.error,
        errorMessage = _ref.errorMessage,
        props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'error', 'errorMessage']);
    return !error ? _nothing2.default : _react2.default.createElement(_List.ListItem, (0, _extends3.default)({
        disabled: true,
        leftIcon: _react2.default.createElement(_errorOutline2.default, null),
        primaryText: children || errorMessage
    }, (0, _filterDOMProps2.default)(props)));
};

exports.default = (0, _connectField2.default)(Error, { initialValue: false });