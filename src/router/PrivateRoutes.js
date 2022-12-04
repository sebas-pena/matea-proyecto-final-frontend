import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"

const PrivateRoutes = () => {
	return (
		<div className="app__page-ctn">
			<Routes>
				<Route path="*" element={<Navigate to="login" />} />
			</Routes>
		</div>
	)
}

export default PrivateRoutes
