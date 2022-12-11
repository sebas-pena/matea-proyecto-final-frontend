import { useState, useEffect, useContext } from "react"
import { StoreContext } from "../../store/StoreProvider"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navbar/NavBar"
import Wrapper from "../../components/Wrapper"
import "./CartPage.css"
import { Link } from "react-router-dom"

const CartPage = () => {
	const { store } = useContext(StoreContext)
	const products = store.cart
	console.log(products)
	return (
		<>
			<NavBar />
			<Wrapper
				vertical
				grow={1}
				width="100%"
				maxWidth={1100}
				margin="auto"
				gap="30px"
			>
				<div className="Contenedor-Cart">
					<div className="cart__products-ctn">
						<h2 className="cart__title">Carrito</h2>
						<table className="cart__table">
							<thead>
								<tr>
									<th className="Detall-Cart"> Producto</th>
									<th className="Detall-Cart"> Unidades</th>
									<th className="Detall-Cart"> Precio</th>
									<th className="Detall-Cart"> Total</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product) => (
									<tr>
										<td>
											<div className="cart__product">
												<img
													src={product.product.images[0]}
													alt={product.product.title}
												/>
												<div className="cart__product-details">
													<p className="title">{product.product.title}</p>
													<p className="detail">
														Marca: <span>{product.product.brand}</span>
													</p>
													<p className="detail">
														Modelo: <span>{product.product.model}</span>
													</p>
												</div>
											</div>
										</td>
										<td>{product.units}</td>
										<td>
											<p>
												<span className="cart__product-currency">
													{product.product.currency}
												</span>
												{product.product.price}
											</p>
										</td>
										<td>
											<p>
												<span className="cart__product-currency">
													{product.product.currency}
												</span>
												{product.units * product.product.price}
											</p>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<Link to="/" className="cart__link-home">
							Continuar Comprando
						</Link>
					</div>

					<div className="Contenedor-Pedido">
						<h2 className="Titulo-Pedido">Resumen del Pedido</h2>
						<div className="Detalles-Pedido">
							<h3 className="Detall-Pedido">
								Items: {products.reduce((prev, item) => prev + item.units, 0)}
							</h3>
							<h3 className="Detall-Pedido">Envio:</h3>
							<select className="cart__shipping-options">
								<option></option>
							</select>
						</div>

						<div className="Detalles-Pedido-Total">
							<h3>Precio Total</h3>
							<button className="Boton-Pagar">Pagar</button>
						</div>
					</div>
				</div>
			</Wrapper>
			<Footer />
		</>
	)
}

export default CartPage
