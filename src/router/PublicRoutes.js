import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SingIn from "../pages/SingInPage"
import LoginPage from "../pages/LoginPage"
import ProductPage from "../pages/ProductPage"
import CreateProductsPage from "../pages/CreateProductsPage"
import SearchPage from "../pages/search/SearchPage"

const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="sing-in" element={<SingIn />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="create-product" element={<CreateProductsPage />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  )
}

export default PublicRoutes
