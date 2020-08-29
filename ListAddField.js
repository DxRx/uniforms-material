'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListAdd = function ListAdd(_ref) {
    var disabled = _ref.disabled,
        Icon = _ref.icon,
        iconVisible = _ref.iconVisible,
        parent = _ref.parent,
        value = _ref.value,
        props = (0, _objectWithoutProperties3.default)(_ref, ['disabled', 'icon', 'iconVisible', 'parent', 'value']);

    var limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);

    return _react2.default.createElement(_RaisedButton2.default, (0, _extends3.default)({
        disabled: !limitNotReached,
        icon: iconVisible ? _react2.default.createElement(Icon, null) : undefined,
        onTouchTap: function onTouchTap() {
            return limitNotReached && parent.onChange(parent.value.concat([value]));
        }
    }, (0, _filterDOMProps2.default)(props)));
};

ListAdd.defaultProps = {
    children: 'Add',
    icon: _add2.default,
    iconVisible: false
};

exports.default = (0, _connectField2.default)(ListAdd, { includeParent: true, initialValue: false });