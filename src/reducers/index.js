// create the inital state when the app is starting up
const initalState = {
	react: 0,
	angular: 0,
	vuejs: 0
}

// reducer function which has two arguments
// initialState is set at the default for the state argument
export default (state = initalState, action) =>{
	switch (action.type){
		case 'VOTE_REACT':
			console.log("Vote React!");
			return Object.assign({}, state, {
				react: state.react + 1
			})
		case 'VOTE_ANGULAR':
			console.log("Vote Angular!");
			return Object.assign({}, state, {
				angular: state.angular + 1
			})
		case 'VOTE_VUEJS':
			console.log("Vote Vuejs!");
			return Object.assign({}, state, {
				vuejs: state.vuejs + 1
			})
		default:
			return state
	}
}