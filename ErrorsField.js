'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _BaseField = require('uniforms/BaseField');

var _BaseField2 = _interopRequireDefault(_BaseField);

var _errorOutline = require('material-ui/svg-icons/alert/error-outline');

var _errorOutline2 = _interopRequireDefault(_errorOutline);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _nothing = require('uniforms/nothing');

var _nothing2 = _interopRequireDefault(_nothing);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorsField = function ErrorsField(_ref, _ref2) {
    var _ref2$uniforms = _ref2.uniforms,
        error = _ref2$uniforms.error,
        schema = _ref2$uniforms.schema;
    var children = _ref.children,
        props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
    return !error && !children ? _nothing2.default : _react2.default.createElement(
        _List.List,
        (0, _filterDOMProps2.default)(props),
        !!children && _react2.default.createElement(_List.ListItem, { primaryText: children, disabled: true }),
        schema.getErrorMessages(error).map(function (message, index) {
            return _react2.default.createElement(_List.ListItem, { key: index, disabled: true, primaryText: message, leftIcon: _react2.default.createElement(_errorOutline2.default, null) });
        })
    );
};

ErrorsField.contextTypes = _BaseField2.default.contextTypes;

exports.default = ErrorsField;