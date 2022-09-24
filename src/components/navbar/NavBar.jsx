import React from "react"
import { ReactComponent as CartIcon } from "../../assets/svg/shopping-cart.svg"
import Logo from "../../assets/img/logo.png"
import "./NavBar.css"

const NavBar = () => {
	const handleLogin = () => {}
	return (
		<nav className="navbar">
			<div className="navbar__ctn">
				<img
					className="navbar__img"
					src={Logo}
					alt="Logotipo de Super Ecónomico"
				/>
				<div className="navbar__search-ctn">
					<input
						className="navbar__search-input"
						type="text"
						placeholder="Buscar un producto..."
					/>
				</div>
				<div className="navbar__user-actions">
					<button className="navbar__cart-btn">
						<CartIcon fill="#2196f3" height={29} />
					</button>
					<button className="navbar__login-btn">Ingresar</button>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
