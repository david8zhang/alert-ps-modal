import React, { Component } from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

/**
 * @property {Boolean}  displayModal  	True if the modal should be displayed
 * @property {Function} onClick 		The click handler that determines what the modal should do on close
 * @property {String}   message 		The message to show within the modal
 */
class AlertModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='profile-modal'>
				{
					this.props.displayModal && 
					<ModalContainer onClose={this.props.onClick}>
						<ModalDialog onClose={this.props.onClick}>
							<h5 style={{textAlign: 'center', color: 'red'}}><i className='fi-alert'/> Error!</h5>
							<h6 style={{textAlign: 'center'}}>{this.props.message}</h6>
						</ModalDialog>
					</ModalContainer>					
				}
			</div>
		)
	}
}

export default AlertModal;