import React from "react"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const Router = () => {
	const isLogged = true
	return isLogged ? <PublicRoutes /> : <PrivateRoutes />
}

export default Router
