import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';


function App() {
	function countReducer(state = { count : 0}, action) {
		switch(action.type) {
			case 'counter/increment' :
				state = {count : state.count + 1};
				break;

			case 'counter/decrement' :
				state = {count : state.count - 1};
				break;
			default :
				state = state;
		}
		return state;
	}

	const store = createStore(countReducer, {count : 1});

	function selector() {
		const result = document.getElementById("result");
		result.innerHTML = store.getState()?.count ?? "0";
	}

	store.subscribe(() => selector());
	// store.dispatch({type : 'counter/increment'});
	// store.dispatch({type : 'counter/decrement'});
	return (
		<div className="App">
			<header className="App-header">
				<button type="button" className="btn btn-default" id = "increment" onClick = {() => store.dispatch({type : 'counter/increment'})}>increment</button>
				<div className="result" id = "result">0</div>
				<button type="button" className="btn btn-default" id ="decrement" onClick = {() => store.dispatch({type : 'counter/decrement'})}>decrement</button>
			</header>
		</div>
	);
}

export default App;
