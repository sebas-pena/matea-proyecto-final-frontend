import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import ProductPage from "../pages/ProductPage"

const PublicRoutes = () => {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="product" element={<ProductPage />} />
		</Routes>
	)
}

export default PublicRoutes
