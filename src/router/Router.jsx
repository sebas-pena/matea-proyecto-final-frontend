import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"

const Router = () => {
	return (
		<Routes>
			<Route index element={<HomePage />} />
		</Routes>
	)
}

export default Router
