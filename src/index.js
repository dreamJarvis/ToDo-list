import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

// creatig a redux store
const persistedState = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : {};

const store = createStore(
	rootReducer,
	persistedState
);

// it is called when ther is change in store current state
store.subscribe(()=>{
	localStorage.setItem('task', JSON.stringify(store.getState()));
});


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
