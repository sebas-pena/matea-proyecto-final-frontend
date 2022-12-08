import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SingIn from "../pages/SingInPage"
import ProductPage from "../pages/ProductPage"
import LoginPage from "../pages/LoginPage"
import CreateProductsPage from "../pages/CreateProductsPage"

const PublicRoutes = () => {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="sing-in" element={<SingIn />} />
			<Route path="product" element={<ProductPage />} />
			<Route path="crear" element={<CreateProductsPage />} />
			
		</Routes>
	)
}

export default PublicRoutes
