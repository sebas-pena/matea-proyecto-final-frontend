import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SingIn from "../pages/SingInPage"
import LoginPage from "../pages/LoginPage"
import ProductPage from "../pages/ProductPage"
import CreateProductsPage from "../pages/CreateProductsPage"

const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="sing-in" element={<SingIn />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="category/:id" element={<ProductPage />} />
      <Route path="crear" element={<CreateProductsPage />} />
    </Routes>
  )
}

export default PublicRoutes
