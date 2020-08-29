'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bool = function Bool(_ref) {
    var appearance = _ref.appearance,
        disabled = _ref.disabled,
        id = _ref.id,
        inputRef = _ref.inputRef,
        label = _ref.label,
        name = _ref.name,
        onChange = _ref.onChange,
        value = _ref.value,
        props = (0, _objectWithoutProperties3.default)(_ref, ['appearance', 'disabled', 'id', 'inputRef', 'label', 'name', 'onChange', 'value']);
    return appearance === 'toggle' ? _react2.default.createElement(_Toggle2.default, (0, _extends3.default)({
        disabled: disabled,
        id: id,
        label: label,
        name: name,
        onToggle: function onToggle(event, value) {
            return disabled || onChange(value);
        },
        ref: inputRef,
        toggled: !!value
    }, (0, _filterDOMProps2.default)(props))) : _react2.default.createElement(_Checkbox2.default, (0, _extends3.default)({
        checked: !!value,
        disabled: disabled,
        id: id,
        label: label,
        name: name,
        onCheck: function onCheck(event, value) {
            return disabled || onChange(value);
        },
        ref: inputRef
    }, (0, _filterDOMProps2.default)(props)));
};

Bool.defaultProps = { appearance: 'checkbox' };

exports.default = (0, _connectField2.default)(Bool);