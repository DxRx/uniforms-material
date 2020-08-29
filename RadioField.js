'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _RadioButton = require('material-ui/RadioButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
    var allowedValues = _ref.allowedValues,
        disabled = _ref.disabled,
        id = _ref.id,
        label = _ref.label,
        labelPosition = _ref.labelPosition,
        name = _ref.name,
        _onChange = _ref.onChange,
        transform = _ref.transform,
        value = _ref.value,
        props = (0, _objectWithoutProperties3.default)(_ref, ['allowedValues', 'disabled', 'id', 'label', 'labelPosition', 'name', 'onChange', 'transform', 'value']);
    return _react2.default.createElement(
        'div',
        null,
        !!label && _react2.default.createElement(_Subheader2.default, { children: label, style: { paddingLeft: 0 } }),
        _react2.default.createElement(
            _RadioButton.RadioButtonGroup,
            (0, _extends3.default)({
                disabled: disabled,
                id: id,
                labelPosition: labelPosition,
                name: name,
                valueSelected: value,
                onChange: function onChange(event, value) {
                    return _onChange(value);
                }
            }, (0, _filterDOMProps2.default)(props)),
            allowedValues.map(function (item) {
                return _react2.default.createElement(_RadioButton.RadioButton, {
                    disabled: disabled,
                    key: item,
                    label: transform ? transform(item) : item,
                    labelPosition: labelPosition,
                    value: item
                });
            })
        )
    );
};

exports.default = (0, _connectField2.default)(Radio);