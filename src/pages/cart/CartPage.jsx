import { useState, useContext, useEffect } from "react"
import { StoreContext } from "../../store/StoreProvider"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navbar/NavBar"
import Wrapper from "../../components/Wrapper"
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg"
import { ReactComponent as MinusIcon } from "../../assets/svg/minus.svg"
import { Link, useNavigate } from "react-router-dom"
import "./CartPage.css"
import Spinner from "../../components/Spinner"
import PaymentModal from "../../components/payment-modal/PaymentModal"
import PaymentResume from "../../components/payment-resume/PaymentResume"
import Alert from "../../components/alert/Alert"

const CartPage = () => {
	const { store, dispatch } = useContext(StoreContext)
	const navigate = useNavigate()
	const [alert, setAlert] = useState({ show: false, message: "" })
	const [paymentMethod, setPaymentMethod] = useState(1)
	const [isLoading, setIsLoading] = useState(false)
	const [showPaymentModal, setShowPaymentModal] = useState(false)
	const products = store.cart

	useEffect(() => {
		if (!store.user) navigate("/login")
	}, [])
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

	const calcTotal = {
		1: (subtotal) => subtotal,
		2: (subtotal) => subtotal - (10 * subtotal) / 100,
		3: (subtotal) => subtotal - (15 * subtotal) / 100,
		4: (subtotal) => subtotal + (5 * subtotal) / 100,
	}
	const subtotal = products.reduce((prev, item) => {
		let total =
			item.units *
			Math.floor(
				item.product.price - (item.product.price * item.product.sale) / 100
			)
		if (item.product.currency === "$") total = total * 40
		return prev + total
	}, 0)
	const totalItems = products.reduce((prev, item) => prev + item.units, 0)
	const total = calcTotal[paymentMethod](subtotal)
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
					<PaymentResume
						method={paymentMethod}
						subtotal={paymentMethod}
						total={total}
						totalItems={totalItems}
						setPaymentMethod={setPaymentMethod}
					>
						<button
							className="Boton-Pagar"
							onClick={() => {
								products.length && setShowPaymentModal(true)
							}}
						>
							Pagar
						</button>
					</PaymentResume>
				</div>
			</Wrapper>
			<Footer />
			{showPaymentModal && (
				<PaymentModal
					setShowModal={setShowPaymentModal}
					setAlert={setAlert}
					method={paymentMethod}
					subtotal={paymentMethod}
					total={total}
					totalItems={totalItems}
				/>
			)}
			{alert.show && (
				<Alert setShowAlert={(value) => setAlert({ message: "", show: value })}>
					<p>{alert.message}</p>
				</Alert>
			)}
			{isLoading && <Spinner />}
		</>
	)
}

export default CartPage
