import { useState } from "react"
import { ReactComponent as CartIcon } from "../../assets/svg/shopping-cart.svg"
import { ReactComponent as Logo } from "../../assets/svg/logo.svg"
import "./NavBar.css"
import SimpleButton from "../buttons/simple-button/SimpleButton"
import { useContext } from "react"
import { StoreContext } from "../../store/StoreProvider"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const { store, dispatch } = useContext(StoreContext)
  const [search, setSearch] = useState("")
  const user = store.user
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    navigate("/login")
  }
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search?q=${search}`)
  }
  return (
    <nav className="navbar">
      <div className="navbar__ctn">
        <SimpleButton asLink to="/" background="transparent">
          <Logo height="30" />
        </SimpleButton>
        <form className="navbar__search-ctn" onSubmit={handleSearch}>
          <input
            className="navbar__search-input"
            type="text"
            placeholder="Buscar un producto..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="navbar__user-actions">
          <SimpleButton
            asLink
            to="/cart"
            background="transparent"
            height={35}
            paddingX="10"
          >
            <CartIcon fill="#2196f3" height={29} />
          </SimpleButton>
          {user ? (
            <SimpleButton onClick={handleLogout} height={35} paddingX={15}>
              Cerrar Sesión
            </SimpleButton>
          ) : (
            <SimpleButton asLink to="/login" height={35} paddingX={15}>
              Ingresar
            </SimpleButton>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
