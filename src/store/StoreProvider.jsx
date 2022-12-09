import { createContext, useReducer } from "react"
import parseJWT from "../components/helpers/handleJWT"
import StoreReducer from "./StoreReducer"

export const StoreContext = createContext()
export const StoreProvider = ({ children }) => {
	let token = localStorage.getItem("token") || sessionStorage.getItem("token")
	const parsedToken = token && parseJWT(token)
	const initialStore = {
		token,
		user: parsedToken,
	}

	const [store, dispatch] = useReducer(StoreReducer, initialStore)

	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}
