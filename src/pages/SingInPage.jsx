import React from "react"
import logo from "../assets/img/logo.png"
import SinglnForm from "../components/forms/sing-in/SingInForm"

const SingInPage = () => {
	return (
		<div className="app__page-ctn">
			<div className="login__ctn">
				<img src={logo} alt="Logotipo de super ecónomico" />
				<SinglnForm />
			</div>
		</div>
	)
}

export default SingInPage
