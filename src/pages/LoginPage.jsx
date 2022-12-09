import React from "react"
import { ReactComponent as Logo } from "../assets/svg/logo.svg"
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
      <Logo height="100" />
      <LoginForm />
    </div>
  )
}

export default LoginPage
