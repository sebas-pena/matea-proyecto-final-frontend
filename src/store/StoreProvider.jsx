import { useEffect } from "react"
import { createContext, useReducer } from "react"
import parseJWT from "../helpers/handleJWT"
import StoreReducer from "./StoreReducer"

export const StoreContext = createContext()
export const StoreProvider = ({ children }) => {
	let token = localStorage.getItem("token") || sessionStorage.getItem("token")
	const parsedToken = token && parseJWT(token)
	const initialStore = {
		token,
		user: parsedToken?.user,
		cart: [],
	}

	const [store, dispatch] = useReducer(StoreReducer, initialStore)

	useEffect(() => {
		if (parsedToken) {
			fetch("http://localhost:5000/api/cart", {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
				.then((res) => {
					return res.json().then((data) => {
						if (res.ok) return data
						else Promise.reject(data)
					})
				})
				.then((data) => {
					dispatch({ type: "SET_CART", payload: data.products })
				})
				.catch(console.log)
		}
	}, [])

	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}
