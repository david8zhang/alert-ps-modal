# Description
A simple error message alert modal. 

# Styles
You must have Foundation 6 included as part of the project for this component to work!

Get it here: [Foundation 6](http://foundation.zurb.com/sites/download.html/)

Require it in your html

```
<link rel="stylesheet" type="text/css" href="./style/css/app.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.min.css">
```

# Usage
You need to define local component state in order toggle the modal on and off
```
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
```