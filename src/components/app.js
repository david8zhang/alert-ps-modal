import React, { Component } from 'react';
import AlertModal from './alert_modal';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showAlert: false,
			showCustomAlert: false
		}
	}

	render() {
		return <div>
			<button className='button'
					onClick={() => {this.setState({showAlert: true})}}>
				Click to show an alert!
			</button>
			<br/>
			<button className='button'
					onClick={() => {this.setState({showCustomAlert: true})}}>
				Click to show an alert with custom content!
			</button>
			<AlertModal displayModal={this.state.showAlert} 
						message='Error Message here!' 
						onClick={() => {this.setState({showAlert: !this.state.showAlert})}}/>
			<AlertModal displayModal={this.state.showCustomAlert}  
						onClick={() => {this.setState({showCustomAlert: !this.state.showCustomAlert})}}>
					<img src='https://pics.onsizzle.com/Facebook-7a2fd9.png'></img>
			</AlertModal>
		</div>
	}
}

export default App;