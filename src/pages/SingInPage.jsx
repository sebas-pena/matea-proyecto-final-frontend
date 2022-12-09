import React from "react"
import { ReactComponent as Logo } from "../assets/svg/logo.svg"
import SinglnForm from "../components/forms/sing-in/SingInForm"

const SingInPage = () => {
  return (
    <div className="app__page-ctn">
      <div className="login__ctn">
        <Logo height="100" />
        <SinglnForm />
      </div>
    </div>
  )
}

export default SingInPage
