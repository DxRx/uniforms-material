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

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LongText = function LongText(_ref) {
    var disabled = _ref.disabled,
        id = _ref.id,
        error = _ref.error,
        errorMessage = _ref.errorMessage,
        inputRef = _ref.inputRef,
        label = _ref.label,
        name = _ref.name,
        _onChange = _ref.onChange,
        placeholder = _ref.placeholder,
        showInlineError = _ref.showInlineError,
        value = _ref.value,
        props = (0, _objectWithoutProperties3.default)(_ref, ['disabled', 'id', 'error', 'errorMessage', 'inputRef', 'label', 'name', 'onChange', 'placeholder', 'showInlineError', 'value']);
    return _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
        disabled: disabled,
        errorText: error && showInlineError ? errorMessage : undefined,
        floatingLabelText: label,
        hintText: placeholder,
        id: id,
        multiLine: true,
        name: name,
        onChange: function onChange(event, value) {
            return _onChange(value);
        },
        ref: inputRef,
        value: value
    }, (0, _filterDOMProps2.default)(props)));
};

LongText.defaultProps = { fullWidth: true };

exports.default = (0, _connectField2.default)(LongText);