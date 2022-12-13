import React from "react"
import "./PaymentResume.css"
const PaymentResume = ({
	method,
	subtotal,
	total,
	totalItems,
	children,
	fix,
	setPaymentMethod,
}) => {
	const paymentMethodsDialogs = {
		1: "-",
		2: "10% de descuento",
		3: "15% de descuento",
		4: "5% de interés",
	}

	const paymentMethods = {
		1: "Efectivo en redes de cobranzas",
		2: "Débito o crédito internacional",
		3: "Depósito del banco",
		4: "Cuotas con tarjeta de crédito",
	}
	return (
		<div className="payment-resume__ctn">
			<h2 className="payment-resume__title">Resumen del Pedido</h2>
			<div className="payment-resume__section">
				<h3>
					Items:
					<span>{totalItems}</span>
				</h3>
				{fix ? (
					<>
						<h3>Froma de pago:</h3>
						<div className="payment-resume__method-fixed">
							<p>{paymentMethods[method]}</p>
						</div>
					</>
				) : (
					<label>
						<h3>Forma de pago:</h3>

						<select
							className="payment-resume__options"
							value={method}
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
				)}
			</div>

			<div className="payment-resume__section-total">
				<p>
					Subtotal: <span className="currency">U$D</span>
					<span>{subtotal}</span>
				</p>
				<p>
					Forma de pago:
					<span> {paymentMethodsDialogs[method]}</span>
				</p>
				<p className="total">
					Total: <span className="currency">U$D</span>
					<span>{total}</span>
				</p>
				{children}
			</div>
		</div>
	)
}

export default PaymentResume
