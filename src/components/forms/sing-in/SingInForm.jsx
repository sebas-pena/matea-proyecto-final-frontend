import React from "react"
import { useContext } from "react"
import { useRef } from "react"
import { StoreContext } from "../../../store/StoreProvider"
import SimpleButton from "../../buttons/simple-button/SimpleButton"
import parseJWT from "../../../helpers/handleJWT"
import "./SingInForm.css"
import { useNavigate } from "react-router-dom"
const SingInForm = () => {
	const { dispatch } = useContext(StoreContext)

	const usernameRef = useRef()
	const emailnameRef = useRef()
	const passwordRef = useRef()
	const directionRef = useRef()

	const navigate = useNavigate()

	const onSubmit = (e) => {
		e.preventDefault()
		const username = usernameRef.current.value
		const email = emailnameRef.current.value
		const password = passwordRef.current.value
		const direction = directionRef.current.value
		fetch("http://localhost:5000/api/auth/singup", {
			method: "POST",
			headers: { "content-type": "application/json" },
			//solicitamos email y password del ref
			body: JSON.stringify({ username, email, password, direction }),
		})
			//.then(response => response.json())
			.then(function (res) {
				if (res.ok) return res.json()
				else return Promise.reject()
			})
			.then(function (data) {
				const { user } = parseJWT(data.access_token)
				dispatch({ type: "SET_USER", payload: user })
				dispatch({ type: "SET_TOKEN", payload: data.access_token })
				navigate("/")
			})
			.catch(console.log)
	}

	return (
		<div>
			<div className="login-form__ctn">
				<div className="background-R">
					<div className="shape-R"></div>
					<div className="shape-R"></div>
				</div>

				<form className="form-Register" onSubmit={onSubmit}>
					<h3>Registrarse</h3>
					<div className="section">
						<label htmlFor="username" className="Label">
							Nombre
						</label>
						<div className="field">
							<input
								className="Input"
								id="username"
								type="text"
								name="username"
								ref={usernameRef}
							/>
						</div>
					</div>
					<div className="section">
						<label htmlFor="email" className="Label">
							Email
						</label>
						<div className="field">
							<input
								className="Input"
								id="email"
								type="email"
								name="email"
								ref={emailnameRef}
							/>
						</div>
					</div>

					<div className="section">
						<label htmlFor="password" className="Label">
							Contraseña
						</label>
						<div className="field">
							<input
								className="Input"
								id="password"
								type="password"
								name="password"
								ref={passwordRef}
							/>
						</div>
					</div>

					<div className="section">
						<label htmlFor="direction" className="Label">
							Dirección
						</label>
						<div className="field">
							<input
								className="Input"
								id="direction"
								type="text"
								name="direction"
								ref={directionRef}
							/>
						</div>
					</div>

					<SimpleButton width="100%" height={35} mt={30} mb={30}>
						Registrarse
					</SimpleButton>
					<SimpleButton asLink to="/login" height={35}>
						Iniciar Sesión
					</SimpleButton>
				</form>
			</div>
		</div>
	)
}

export default SingInForm
