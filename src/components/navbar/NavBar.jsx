import React from "react"
import { ReactComponent as CartIcon } from "../../assets/svg/shopping-cart.svg"
import { ReactComponent as Logo } from "../../assets/svg/logo.svg"
import "./NavBar.css"
import { useNavigate } from "react-router-dom"
import SimpleButton from "../buttons/simple-button/SimpleButton"

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar__ctn">
        <Logo height="30" />
        <div className="navbar__search-ctn">
          <input
            className="navbar__search-input"
            type="text"
            placeholder="Buscar un producto..."
          />
        </div>
        <div className="navbar__user-actions">
          <SimpleButton
            asLink="/cart"
            background="transparent"
            height={35}
            paddingX="10"
          >
            <CartIcon fill="#2196f3" height={29} />
          </SimpleButton>
          <SimpleButton asLink to="/login" height={35} paddingX={15}>
            Ingresar
          </SimpleButton>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
