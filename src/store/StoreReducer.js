export default (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.payload }
		case "SET_TOKEN":
			return { ...state, token: action.payload }
		case "LOGOUT":
			return {
				token: null,
				user: null,
			}
		default:
			return state
	}
}
