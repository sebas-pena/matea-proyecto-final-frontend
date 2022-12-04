import React from "react"
import logo from "../assets/img/logo.png"
import LoginForm from "../components/forms/login/LoginForm"
const LoginPage = () => {
	return (
		<div
			className="app__page-ctn"
			style={{
				paddingTop: 20,
				alignItems: "center",
				maxWidth: "unset",
				width: "100%",
				gap: 20,
			}}
		>
			<img
				src={logo}
				alt="Logotipo de super ecónomico"
				className="login__img"
				style={{
					width: "100%",
					maxWidth: "200px",
					margin: "0 auto",
				}}
			/>
			<LoginForm />
		</div>
	)
}

export default LoginPage
