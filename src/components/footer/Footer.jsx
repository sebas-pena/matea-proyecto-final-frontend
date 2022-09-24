import React from "react"
import "./Footer.css"
import logo from "../../assets/img/logo.png"
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__ctn">
				<div className="footer__sections">
					<section className="footer__info">
						<h3>Super Ecónomico</h3>
						<img src={logo} alt="Logotipo de super ecónomico" />
						<p>
							Direccion: Alberto Caracara esquina Juan de Dios Comandante -
							Maldonado . Uruguay
						</p>
						<a href="tel:42242817">Tels.: 4224 2817</a>
					</section>
					<section className="footer__subscribe">
						<h3>Subscribete</h3>
						<p>Recibe actualizaciónes</p>
					</section>
					<section className="footer__social-media">
						<h3>Encuentranos en</h3>
					</section>
				</div>
				<p className="footer_copy-right">© 2022 Desarrollado por El Cangrejo</p>
			</div>
		</footer>
	)
}

export default Footer
