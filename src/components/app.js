import React, { Component } from 'react';
import AlertModal from './alert_modal';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showAlert: false
		}
	}

	render() {
		return <div>
			<button className='button'
					onClick={() => {this.setState({showAlert: true})}}>
				Click to show an alert!
			</button>
			<AlertModal displayModal={this.state.showAlert} 
						message='Error Message here!' 
						onClick={() => {this.setState({showAlert: !this.state.showAlert})}}/>
		</div>
	}
}

export default App;