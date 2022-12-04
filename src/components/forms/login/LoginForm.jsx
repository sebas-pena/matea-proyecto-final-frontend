import React from "react"
import useForm from "../../../hooks/useForm"
import SimpleButton from "../../buttons/simple-button/SimpleButton"
import ValidatedInput from "../../inputs/validated-input/ValidatedInput"
import SimpleLink from "../../links/simple-link/SimpleLink"
import "./LoginForm.css"

const LoginForm = () => {
	const [values, handleInputChange] = useForm({ password: "", email: "" })
	const { password, email } = values
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(values)
	}
	return (
		<div className="login-form__ctn">
			<h2 className="login-form__title">Bienvenido de nuevo</h2>
			<form onSubmit={handleSubmit} className="login-form__form">
				<ValidatedInput
					placeholder="Correo electronico"
					name="email"
					value={email}
					onChange={handleInputChange}
					borderColor="#d1d1d1"
					borders="bottom"
					focus="dark-gray"
				/>
				<ValidatedInput
					placeholder="Contraseña"
					type="password"
					name="password"
					value={password}
					borders="bottom"
					borderColor="#d1d1d1"
					focus="dark-gray"
					onChange={handleInputChange}
				/>
				<SimpleButton height={35}>Iniciar Sesión</SimpleButton>
			</form>
			<div className="login-form__recovery">
				<SimpleLink to="recovery" fontSize={14} color="#464646">
					Olvide mi contraseña
				</SimpleLink>
			</div>
			<div className="login-form__change-form">
				<span>O</span>
			</div>
			<SimpleButton asLink to="/sing-in" height={35}>
				Registrarme
			</SimpleButton>
		</div>
	)
}

export default LoginForm
