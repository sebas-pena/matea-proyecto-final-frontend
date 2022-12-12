import { useState, useContext } from "react"
import { StoreContext } from "../../store/StoreProvider"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navbar/NavBar"
import Wrapper from "../../components/Wrapper"
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg"
import { ReactComponent as MinusIcon } from "../../assets/svg/minus.svg"
import { Link } from "react-router-dom"
import "./CartPage.css"
import Spinner from "../../components/Spinner"

const CartPage = () => {
	const { store, dispatch } = useContext(StoreContext)
	const [paymentMethod, setPaymentMethod] = useState(1)
	const [isLoading, setIsLoading] = useState(false)
	const products = store.cart
	const subtotal = products.reduce((prev, item) => {
		let total =
			item.units *
			Math.floor(
				item.product.price - (item.product.price * item.product.sale) / 100
			)
		if (item.product.currency === "$") total = total * 40
		return prev + total
	}, 0)

	const handleChangeUnits = (productId, units) => {
		if (isLoading) return
		setIsLoading(true)
		fetch("http://localhost:5000/api/cart", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${store.token}`,
			},
			body: JSON.stringify({
				productId,
				units,
			}),
		})
			.then((res) => {
				return res.json().then((data) => {
					if (res.ok) return data
					else return Promise.reject(data)
				})
			})
			.then((data) => dispatch({ type: "SET_CART", payload: data.products }))
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false))
	}
	const paymentMethodsDialogs = {
		1: "-",
		2: "10% de descuento",
		3: "15% de descuento",
		4: "5% de interés",
	}
	const calcTotal = {
		1: (subtotal) => subtotal,
		2: (subtotal) => subtotal - (10 * subtotal) / 100,
		3: (subtotal) => subtotal - (15 * subtotal) / 100,
		4: (subtotal) => subtotal + (5 * subtotal) / 100,
	}

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
									<tr key={product.productId}>
										<td>
											<div className="cart__product">
												<img
													src={product.product.images[0]}
													alt={product.product.title}
												/>
												<div className="cart__product-details">
													<Link
														className="title"
														to={`/product/${product.productId}`}
													>
														{product.product.title}
													</Link>
													<p className="detail">
														Marca: <span>{product.product.brand}</span>
													</p>
													<p className="detail">
														Modelo: <span>{product.product.model}</span>
													</p>
												</div>
											</div>
										</td>
										<td>
											<div className="cart__product-buttons">
												<button
													onClick={() =>
														handleChangeUnits(
															product.productId,
															product.units - 1
														)
													}
												>
													<MinusIcon width="20" />
												</button>
												<p>{product.units}</p>
												<button
													onClick={() =>
														handleChangeUnits(
															product.productId,
															product.units + 1
														)
													}
												>
													<PlusIcon width="20" />
												</button>
											</div>
										</td>
										<td>
											<p>
												<span className="cart__product-currency">
													{product.product.currency}
												</span>
												{Math.floor(
													product.product.price -
														(product.product.price * product.product.sale) / 100
												)}
											</p>
										</td>
										<td>
											<p>
												<span className="cart__product-currency">
													{product.product.currency}
												</span>
												{product.units *
													Math.floor(
														product.product.price -
															(product.product.price * product.product.sale) /
																100
													)}
											</p>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						{products.length == 0 && (
							<h2 className="cart__empty-text">Aún no has agregado.</h2>
						)}
						<Link to="/" className="cart__link-home">
							Continuar Comprando
						</Link>
					</div>
					<div className="Contenedor-Pedido">
						<h2 className="Titulo-Pedido">Resumen del Pedido</h2>
						<div className="Detalles-Pedido">
							<h3>
								Items:
								<span className="cart__total-items">
									{products.reduce((prev, item) => prev + item.units, 0)}
								</span>
							</h3>
							<label className="cart_payment-method">
								<h3>Forma de pago:</h3>
								<select
									className="cart__payment-options"
									value={paymentMethod}
									onChange={(e) => {
										setPaymentMethod(e.target.value)
									}}
								>
									<option value="1">Efectivo en redes de cobranzas</option>
									<option value="2">Débito o crédito internacional</option>
									<option value="3">Depósito del banco</option>
									<option value="4">Cuotas con tarjeta de crédito</option>
								</select>
							</label>
						</div>

						<div className="Detalles-Pedido-Total">
							<p>
								Subtotal: <span className="currency">U$D</span>
								<span>{subtotal}</span>
							</p>
							<p>
								Forma de pago:
								<span> {paymentMethodsDialogs[paymentMethod]}</span>
							</p>
							<p className="total">
								Total: <span className="currency">U$D</span>
								<span>{calcTotal[paymentMethod](subtotal)}</span>
							</p>
							<button className="Boton-Pagar">Pagar</button>
						</div>
					</div>
				</div>
			</Wrapper>
			<Footer />
			{isLoading && <Spinner />}
		</>
	)
}

export default CartPage
