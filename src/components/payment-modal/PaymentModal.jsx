import React from "react"
import { useContext } from "react"
import { StoreContext } from "../../store/StoreProvider"
import PaymentResume from "../payment-resume/PaymentResume"
import StyledText from "../StyledText"
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
