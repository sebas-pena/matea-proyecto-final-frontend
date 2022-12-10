import React from 'react';
import {useRef } from 'react'
import { useNavigate, Link } from "react-router-dom";
//import useForm from "../../../hooks/useForm"
import SimpleButton from "../../buttons/simple-button/SimpleButton"
//import ValidatedInput from "../../inputs/validated-input/ValidatedInput"
import SimpleLink from "../../links/simple-link/SimpleLink"
import "./LoginForm.css"

const LoginForm = () => {

	const navigate = useNavigate();
	const emailnameRef = useRef();
	const passwordRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const email = emailnameRef.current.value;
		const password = passwordRef.current.value;
		//console.log({ email, password })
		fetch("http://localhost:5000/api/login", {
		  method: "POST",
		  headers: { "content-type": "application/json" },
		  //solicitamos email y password del ref
		  body: JSON.stringify({ email, password })
		}).then(function (response) {
			//decodificar formato json
			return response.json()
		  }).then(function (data) {
			console.log("Data: ", data)
			navigate("/Home");
		  })
		}
		
		return (
			
	<div className="login-form__ctn">
		<h2 className="login-form__title">Bienvenido de nuevo</h2>

      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>

      <form className='Form-Login' onSubmit={onSubmit}>

        <h3>Login</h3>

        <label className='Label' for="username">Email</label>
        <input className='Input' id='email' type='text' name='email' ref={emailnameRef} />

        <label for="password">Contraseña</label>
        <input className='Input' id='password' type='text' name='password' ref={passwordRef} />


			
				<SimpleButton asLink to="/" height={35}>Iniciar Sesión</SimpleButton>

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
			
			</form>
	</div>
	)
}

export default LoginForm







 



