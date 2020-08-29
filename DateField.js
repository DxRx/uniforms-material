'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Date_ = function (_Component) {
    (0, _inherits3.default)(Date_, _Component);

    function Date_() {
        (0, _classCallCheck3.default)(this, Date_);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Date_.__proto__ || Object.getPrototypeOf(Date_)).apply(this, arguments));

        _this._intermediate = null;

        _this.onChangeDate = _this.onChangeDate.bind(_this);
        _this.onChangeTime = _this.onChangeTime.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Date_, [{
        key: 'onChangeDate',
        value: function onChangeDate(event, date) {
            this._intermediate = date;
            this.refs.timepicker.openDialog();
        }
    }, {
        key: 'onChangeTime',
        value: function onChangeTime(event, date) {
            this._intermediate.setHours(date.getHours());
            this._intermediate.setMinutes(date.getMinutes());
            this._intermediate.setSeconds(date.getSeconds());
            this._intermediate.setMilliseconds(date.getMilliseconds());

            this.props.onChange(this._intermediate);

            this._intermediate = null;
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            var _this2 = this;

            setTimeout(function () {
                return _this2.refs.datepicker.openDialog();
            }, 100);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                DateTimeFormat = _props.DateTimeFormat,
                autoOk = _props.autoOk,
                cancelLabel = _props.cancelLabel,
                disableYearSelection = _props.disableYearSelection,
                disabled = _props.disabled,
                error = _props.error,
                errorMessage = _props.errorMessage,
                firstDayOfWeek = _props.firstDayOfWeek,
                formatDate = _props.formatDate,
                id = _props.id,
                inputRef = _props.inputRef,
                label = _props.label,
                locale = _props.locale,
                max = _props.max,
                min = _props.min,
                name = _props.name,
                okLabel = _props.okLabel,
                pedantic = _props.pedantic,
                placeholder = _props.placeholder,
                showInlineError = _props.showInlineError,
                timeFormat = _props.timeFormat,
                value = _props.value,
                props = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'disableYearSelection', 'disabled', 'error', 'errorMessage', 'firstDayOfWeek', 'formatDate', 'id', 'inputRef', 'label', 'locale', 'max', 'min', 'name', 'okLabel', 'pedantic', 'placeholder', 'showInlineError', 'timeFormat', 'value']);


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
                    disabled: disabled,
                    errorText: error && showInlineError ? errorMessage : undefined,
                    floatingLabelText: label,
                    hintText: placeholder,
                    id: id,
                    name: name,
                    onFocus: this.onFocus,
                    ref: inputRef,
                    value: value ? value.toLocaleString() : ''
                }, (0, _filterDOMProps2.default)(props))),
                _react2.default.createElement(_DatePicker2.default, {
                    DateTimeFormat: DateTimeFormat,
                    autoOk: autoOk,
                    cancelLabel: cancelLabel,
                    disableYearSelection: disableYearSelection,
                    firstDayOfWeek: firstDayOfWeek,
                    formatDate: formatDate,
                    id: id + '-date',
                    locale: locale,
                    maxDate: max,
                    minDate: min,
                    okLabel: okLabel,
                    onChange: this.onChangeDate,
                    ref: 'datepicker',
                    textFieldStyle: { display: 'none' },
                    value: value
                }),
                _react2.default.createElement(_TimePicker2.default, {
                    autoOk: autoOk,
                    cancelLabel: cancelLabel,
                    format: timeFormat,
                    id: id + '-time',
                    okLabel: okLabel,
                    onChange: this.onChangeTime,
                    pedantic: pedantic,
                    ref: 'timepicker',
                    textFieldStyle: { display: 'none' },
                    value: value
                })
            );
        }
    }]);
    return Date_;
}(_react.Component);

Date_.displayName = 'Date';
Date_.defaultProps = { fullWidth: true };
exports.default = (0, _connectField2.default)(Date_, { ensureValue: false, includeInChain: false });