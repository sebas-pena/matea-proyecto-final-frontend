import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const PrivateRoutes = () => {
	return (
		<div className="app__page-ctn">
			<Routes>
				<Route path="*" element={<Navigate to="login" />} />
				<Route path="cart" element={<Navigate to="login" />} />
			</Routes>
		</div>
	)
}

export default PrivateRoutes
