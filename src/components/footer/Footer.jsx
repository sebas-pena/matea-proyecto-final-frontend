import React from "react"
import "./Footer.css"
import { ReactComponent as Logo } from "../../assets/svg/logo.svg"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__ctn">
				<div className="footer__sections">
					<section className="footer__info">
						<h3>MateaShop</h3>
						<Logo height="80" fill="#fff" />
						<a href="https://goo.gl/maps/XHuoYWx8F8hzyMi78">
							Direccion: Alberto Caracara esquina Juan de Dios Comandante -
							Maldonado . Uruguay
						</a>
						<a href="tel:42242817">Tels.: 4224 2817</a>
					</section>
					<section>
						<h3>Subscribete</h3>
						<p>Para recibe nuestras ofertas y novedades.</p>
						<form className="footer__subscribe-form">
							<input placeholder="Ingresa tu email" />
							<button>Enviar</button>
						</form>
					</section>
					<section>
						<h3>Encuentranos en</h3>
						<div className="footter__social-media">
							<a>
								<img src="" />
							</a>
						</div>
					</section>
				</div>
				<p className="footer_copy-right">© 2022 Desarrollado por El Cangrejo</p>
			</div>
		</footer>
	)
}

export default Footer
