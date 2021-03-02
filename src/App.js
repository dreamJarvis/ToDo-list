import React, {Component} from 'react';
import Todos from './components/todos';
import Forms from './components/forms';
import './App.css'
// import {connect} from 'react-redux';


class App extends Component {
	state = {
		content:''
	}

	render(){
		return (
			<div className="App container">
				<h1 className="center blue-text">TODO List</h1>
				<div className="row" >
					<div className="col s12 bufferZone"></div>
				</div>
				<Forms/>
				<Todos/>
			</div>
		)
	}
}

export default App;