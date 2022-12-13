import React from "react"
import { useState } from "react"
import { useContext } from "react"
import { StoreContext } from "../../store/StoreProvider"
import SimpleButton from "../buttons/simple-button/SimpleButton"
import PaymentResume from "../payment-resume/PaymentResume"
import "./PaymentModal.css"
const PaymentModal = ({
	method,
	subtotal,
	total,
	totalItems,
	setShowModal,
}) => {
	const { store, dispatch } = useContext(StoreContext)
	const { user, cart } = store
	const [inputValues, setInputValues] = useState({
		...user,
	})
	if (user.username && user)
		return (
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
							) : method == 2 ? (
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
										<input />
									</label>
								</>
							) : method == 3 ? (
								<></>
							) : (
								<></>
							)}
						</div>
						<SimpleButton width="100%" height="32px" radius="0">
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
		)
}

export default PaymentModal
