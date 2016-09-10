'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModalDialog = require('react-modal-dialog');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @property {Boolean}  displayModal  	True if the modal should be displayed
 * @property {Function} onClick 		The click handler that determines what the modal should do on close
 * @property {String}   message 		The message to show within the modal
 */

var AlertModal = (function (_Component) {
	_inherits(AlertModal, _Component);

	function AlertModal(props) {
		_classCallCheck(this, AlertModal);

		return _possibleConstructorReturn(this, (AlertModal.__proto__ || Object.getPrototypeOf(AlertModal)).call(this, props));
	}

	_createClass(AlertModal, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'profile-modal' },
				this.props.displayModal && _react2.default.createElement(
					_reactModalDialog.ModalContainer,
					{ onClose: this.props.onClick },
					_react2.default.createElement(
						_reactModalDialog.ModalDialog,
						{ onClose: this.props.onClick },
						_react2.default.createElement(
							'h5',
							{ style: { textAlign: 'center', color: 'red' } },
							_react2.default.createElement('i', { className: 'fi-alert' }),
							' Error!'
						),
						_react2.default.createElement(
							'h6',
							{ style: { textAlign: 'center' } },
							this.props.message
						)
					)
				)
			);
		}
	}]);

	return AlertModal;
})(_react.Component);

exports.default = AlertModal;