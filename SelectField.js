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

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RadioButton = require('material-ui/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xor = function xor(item, array) {
    var index = array.indexOf(item);
    if (index === -1) {
        return array.concat([item]);
    }

    return array.slice(0, index).concat(array.slice(index + 1));
};

var renderCheckboxes = function renderCheckboxes(_ref) {
    var allowedValues = _ref.allowedValues,
        disabled = _ref.disabled,
        fieldType = _ref.fieldType,
        id = _ref.id,
        label = _ref.label,
        labelPosition = _ref.labelPosition,
        name = _ref.name,
        onChange = _ref.onChange,
        transform = _ref.transform,
        value = _ref.value,
        props = (0, _objectWithoutProperties3.default)(_ref, ['allowedValues', 'disabled', 'fieldType', 'id', 'label', 'labelPosition', 'name', 'onChange', 'transform', 'value']);
    return _react2.default.createElement(
        _List.List,
        (0, _filterDOMProps2.default)(props),
        !!label && _react2.default.createElement(_Subheader2.default, { children: label, style: { paddingLeft: 0 } }),
        allowedValues.map(function (item) {
            return fieldType === Array ? _react2.default.createElement(_Checkbox2.default, {
                checked: value.includes(item),
                disabled: disabled,
                id: id + '-' + item,
                key: item,
                label: transform ? transform(item) : item,
                labelPosition: labelPosition,
                name: name,
                onCheck: function onCheck() {
                    return onChange(xor(item, value));
                }
            }) : _react2.default.createElement(_RadioButton2.default, {
                checked: value === item,
                disabled: disabled,
                id: id + '-' + item,
                key: item,
                label: transform ? transform(item) : item,
                labelPosition: labelPosition,
                name: name,
                onCheck: function onCheck() {
                    return onChange(item);
                }
            });
        })
    );
};

var renderSelect = function renderSelect(_ref2) {
    var allowedValues = _ref2.allowedValues,
        disabled = _ref2.disabled,
        error = _ref2.error,
        errorMessage = _ref2.errorMessage,
        fieldType = _ref2.fieldType,
        _ref2$fullWidth = _ref2.fullWidth,
        fullWidth = _ref2$fullWidth === undefined ? true : _ref2$fullWidth,
        id = _ref2.id,
        inputRef = _ref2.inputRef,
        label = _ref2.label,
        name = _ref2.name,
        _onChange = _ref2.onChange,
        placeholder = _ref2.placeholder,
        showInlineError = _ref2.showInlineError,
        transform = _ref2.transform,
        value = _ref2.value,
        props = (0, _objectWithoutProperties3.default)(_ref2, ['allowedValues', 'disabled', 'error', 'errorMessage', 'fieldType', 'fullWidth', 'id', 'inputRef', 'label', 'name', 'onChange', 'placeholder', 'showInlineError', 'transform', 'value']);
    return _react2.default.createElement(
        _SelectField2.default,
        (0, _extends3.default)({
            disabled: disabled,
            errorText: error && showInlineError ? errorMessage : undefined,
            floatingLabelText: label,
            fullWidth: fullWidth,
            hintText: placeholder,
            id: id,
            multiple: fieldType === Array,
            name: name,
            onChange: function onChange(event, index, value) {
                return _onChange(value);
            },
            ref: inputRef,
            value: value
        }, (0, _filterDOMProps2.default)(props)),
        allowedValues.map(function (allowedValue) {
            return _react2.default.createElement(_MenuItem2.default, {
                insetChildren: fieldType === Array || undefined,
                checked: fieldType === Array && value && value.includes(allowedValue) || undefined,
                key: allowedValue,
                primaryText: transform ? transform(allowedValue) : allowedValue,
                value: allowedValue
            });
        })
    );
};

var Select = function Select(_ref3) {
    var checkboxes = _ref3.checkboxes,
        props = (0, _objectWithoutProperties3.default)(_ref3, ['checkboxes']);
    return checkboxes ? renderCheckboxes(props) : renderSelect(props);
};

exports.default = (0, _connectField2.default)(Select, { ensureValue: false });