import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Results from './components/results';
import myApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

// in the createStore function, which is a built-in Redux function, we hand it the reducers, which are imported to this file as "myApp"
let store = createStore(myApp);

// ReactDOM.render comes on its own, but we place it inside our own render function and call this render function at the end of the file. 
// we do this because we first have to subscribe to the store. That way, each time the store changes, we are calling the render function. 
// pass store into the component
function render () {
	ReactDOM.render(
		<div className='container'>
			<App store={store} />
			<hr />
			<Results store={store} />
		</div>
		,
		document.getElementById('root'));
		registerServiceWorker();
}

// subscribe to the store
store.subscribe(render);

// we have to call this function here so that it will run at the start. 
render();