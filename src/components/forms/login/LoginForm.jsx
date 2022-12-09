import React from "react"
import { useContext } from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../../store/StoreProvider"
import SimpleButton from "../../buttons/simple-button/SimpleButton"
import parseJWT from "../../../helpers/handleJWT"
import SimpleLink from "../../links/simple-link/SimpleLink"
import "./LoginForm.css"

const LoginForm = () => {
  const { dispatch } = useContext(StoreContext)

  const navigate = useNavigate()
  const emailnameRef = useRef()
  const passwordRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    const email = emailnameRef.current.value
    const password = passwordRef.current.value
    //console.log({ email, password })
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      //solicitamos email y password del ref
      body: JSON.stringify({ email, password }),
    })
      .then(function (res) {
        //decodificar formato json
        return res.json().then((data) => {
          if (res.ok) return data
          else return Promise.reject(data)
        })
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
    <div className="login-form__ctn">
      <h2 className="login-form__title">Bienvenido de nuevo</h2>

      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form className="Form-Login" onSubmit={onSubmit}>
        <h3>Login</h3>

        <label htmlFor="email" className="Label">
          Email
        </label>
        <input
          className="login-form__input"
          id="email"
          type="text"
          name="email"
          ref={emailnameRef}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          className="login-form__input"
          id="password"
          type="text"
          name="password"
          ref={passwordRef}
        />

        <SimpleButton width="100%" height={35}>
          Iniciar Sesión
        </SimpleButton>

        <div className="login-form__recovery">
          <SimpleLink to="recovery" fontSize={14} color="#fff">
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
