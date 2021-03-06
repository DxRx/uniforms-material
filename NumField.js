'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var noneIfNaN = function noneIfNaN(x) {
    return isNaN(x) ? undefined : x;
};

var Num_ = function Num_(_ref) {
    var decimal = _ref.decimal,
        disabled = _ref.disabled,
        error = _ref.error,
        errorMessage = _ref.errorMessage,
        id = _ref.id,
        inputRef = _ref.inputRef,
        label = _ref.label,
        max = _ref.max,
        min = _ref.min,
        name = _ref.name,
        onChange = _ref.onChange,
        placeholder = _ref.placeholder,
        showInlineError = _ref.showInlineError,
        value = _ref.value,
        props = (0, _objectWithoutProperties3.default)(_ref, ['decimal', 'disabled', 'error', 'errorMessage', 'id', 'inputRef', 'label', 'max', 'min', 'name', 'onChange', 'placeholder', 'showInlineError', 'value']);
    return _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
        disabled: disabled,
        errorText: error && showInlineError ? errorMessage : undefined,
        floatingLabelText: label,
        hintText: placeholder,
        id: id,
        max: max,
        min: min,
        name: name,
        onChange: onChange,
        ref: inputRef,
        step: decimal ? 0.01 : 1,
        type: 'number',
        value: value
    }, (0, _filterDOMProps2.default)(props)));
};

// NOTE: React < 16 workaround. Make it optional?

var Num = function (_Component) {
    (0, _inherits3.default)(Num, _Component);

    function Num() {
        (0, _classCallCheck3.default)(this, Num);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Num.__proto__ || Object.getPrototypeOf(Num)).apply(this, arguments));

        _this.state = { value: '' + _this.props.value };

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Num, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
            var decimal = _ref2.decimal,
                value = _ref2.value;

            var parse = decimal ? parseFloat : parseInt;

            if (noneIfNaN(parse(value)) !== noneIfNaN(parse(this.state.value.replace(/[.,]+$/, '')))) {
                this.setState({ value: value === undefined || value === '' ? '' : '' + value });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(_ref3) {
            var value = _ref3.target.value;

            var change = value.replace(/[^\d.,-]/g, '');

            this.setState({ value: change });
            this.props.onChange(noneIfNaN((this.props.decimal ? parseFloat : parseInt)(change)));
        }
    }, {
        key: 'render',
        value: function render() {
            return Num_((0, _extends3.default)({}, this.props, { onChange: this.onChange, value: this.state.value }));
        }
    }]);
    return Num;
}(_react.Component);

Num.defaultProps = { fullWidth: true };

exports.default = (0, _connectField2.default)(Num);