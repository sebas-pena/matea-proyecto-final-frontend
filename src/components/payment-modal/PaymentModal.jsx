import React from "react"
import { useState } from "react"
import { useContext } from "react"
import { StoreContext } from "../../store/StoreProvider"
import SimpleButton from "../buttons/simple-button/SimpleButton"
import PaymentResume from "../payment-resume/PaymentResume"
import Spinner from "../Spinner"
import "./PaymentModal.css"
const PaymentModal = ({
	method,
	subtotal,
	total,
	totalItems,
	setShowModal,
	setAlert,
}) => {
	const { store, dispatch } = useContext(StoreContext)
	const [isLoading, setIsLoading] = useState(false)
	const { token, user } = store

	const confirmBuy = () => {
		setIsLoading(true)
		fetch("http://localhost:5000/api/cart", {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${token}`,
			},
			body: JSON.stringify([]),
		})
			.then((res) => {
				return res.json().then((data) => {
					if (res.ok) return data
					else return Promise.reject(data)
				})
			})
			.then((data) => {
				console.log(data)
				dispatch({ type: "SET_CART", payload: [] })
				setAlert({ show: true, message: "Compra realizada con exito!" })
				setShowModal(false)
			})
			.catch((err) => {
				console.log(err)
				setAlert({ show: true, message: "Error al procesar la compra." })
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<>
			<div
				className="payment-modal__ctn"
				onClick={(e) => {
					if (e.target.classList.contains("payment-modal__ctn"))
						setShowModal(false)
				}}
			>
				<div className="payment-modal">
					<div className="payment-modal__steps">
						<h2>Realizar Pago</h2>
						<div className="payment-modal__inputs-ctn">
							{method == 1 ? (
								<>
									<p className="payment-modal__qr-text">
										Presentar el QR en Red Pagos o Abitad
									</p>
									<img
										className="payment-modal__qr"
										src="https://cdn.discordapp.com/attachments/1052097507255144511/1052206389117853766/qr-code_1.png"
										alt="payment-qr"
									/>
								</>
							) : method == 2 || method == 4 ? (
								<>
									<label>
										<p>Nombre del proietario</p>
										<input />
									</label>
									<div className="payment-modal__input-group">
										<label>
											<p>Numero de tarjeta</p>
											<input />
										</label>
										<label>
											<p>Fecha Vencimiento</p>
											<input />
										</label>
									</div>
									<label>
										<p>CVV</p>
										<input className="cvv" />
									</label>
								</>
							) : (
								<>
									<label>
										<p>Propietario de la cuenta</p>
										<input className="cvv" />
									</label>
									<label>
										<p>Numero de cuenta</p>
										<input className="cvv" />
									</label>
								</>
							)}
						</div>
						<SimpleButton
							width="100%"
							height="32px"
							radius="0"
							onClick={confirmBuy}
						>
							Confirmar Pago
						</SimpleButton>
					</div>
					<PaymentResume
						method={method}
						fix
						subtotal={subtotal}
						total={total}
						totalItems={totalItems}
					/>
				</div>
			</div>
			{isLoading && <Spinner />}
		</>
	)
}

export default PaymentModal
