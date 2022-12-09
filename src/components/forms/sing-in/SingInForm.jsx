import React from 'react';
import { useRef } from 'react';
import SimpleButton from "../../buttons/simple-button/SimpleButton"
import SimpleLink from "../../links/simple-link/SimpleLink"
import "./SingInForm.css"

const SingInForm = () => {
	const usernameRef = useRef();
	const emailnameRef = useRef();
	const passwordRef = useRef();
	const directionRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const username = usernameRef.current.value;
		const email = emailnameRef.current.value;
		const password = passwordRef.current.value;
		const direction = directionRef.current.value;
		console.log({ email, password })
		fetch("http://localhost:5000/api/singup", {
			method: "POST",
			headers: { "content-type": "application/json" },
			//solicitamos email y password del ref
			body: JSON.stringify({ username, email, password, direction })
		})
			//.then(response => response.json())
			.then(function (response) {
				return response.json()
			}).then(function (data) {
				console.log(data)

			})
	}

	return (
		<div>
			<div className="login-form__ctn">
				<div className='background-R'>
					<div className='shape-R'></div>
					<div className='shape-R'></div>
				</div>

				<form className='form-Register' onSubmit={onSubmit}>
					<h3>Registrarse</h3>
					<div className="section">
						<label className='Label'>Nombre</label>
						<div className="field"><input className='Input' id="username" type="text" name="username" ref={usernameRef} /></div>
					</div>
					<div className="section">
						<label className='Label'>Email</label>
						<div className="field"><input className='Input' id="email" type="email" name="email" ref={emailnameRef} /></div>
					</div>

					<div className="section">
						<label className='Label'>Contraseña</label>
						<div className="field"><input className='Input' id="password" type="password" name="password" ref={passwordRef} /></div>
					</div>

					<div className="section">
						<label className='Label'>direction</label>
						<div className="field"><input className='Input' id="direction" type="text" name="direction" ref={directionRef} /></div>
					</div>

					<div className="section">
						<input className='Boton-register' type="submit" value="Registro de usuario" />
						<br></br>
						<br></br>
						<br></br>
					</div>

					<SimpleButton asLink to="/login" height={35}>
						Iniciar Sesión
					</SimpleButton>

					<div className="login-form__recovery">
						<SimpleLink to="recovery" fontSize={14} color="#464646">
							Olvide mi contraseña
						</SimpleLink>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SingInForm


