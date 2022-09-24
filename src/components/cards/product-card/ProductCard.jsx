import React, { useState } from "react"
import SquareButton from "../../buttons/square-button/SquareButton"
import { ReactComponent as PlusIcon } from "../../../assets/svg/plus.svg"
import { ReactComponent as MinusIcon } from "../../../assets/svg/minus.svg"
import "./ProductCard.css"

const ProductCard = ({
	id,
	imgUrl,
	brand,
	title,
	sale = 0,
	promo = [],
	price,
}) => {
	const [quantity, setQuantity] = useState(0)
	const handleAdd = () => {
		setQuantity(quantity + 1)
	}
	const handleSub = () => {
		if (quantity !== 0) setQuantity(quantity - 1)
	}
	return (
		<div className="product-card">
			<img src={imgUrl} className="product-card__img" alt={title} />
			<div className="product-card__promotions">
				{sale && <p className="product-card__discount">{sale}% OFF</p>}
				{promo.map(({ get, pay }, i) => (
					<p className="product-card__promo" key={i}>
						{get} x {pay}
					</p>
				))}
			</div>
			<div className="product-card__info">
				<p className="product-card__title">{title}</p>
				{sale && (
					<p className="product-card__old-price">
						Antes: <span>${price}</span>
					</p>
				)}
				<p className="product-card__price">
					${sale ? price - Math.floor((price * sale) / 100) : price}
				</p>
				<div className="product-card__btn-ctn">
					<SquareButton onClick={handleSub} size={40} color="#dbdbdb">
						<MinusIcon width={18} fill="#333" />
					</SquareButton>
					<p className="product-card__quantity">{quantity}</p>
					<SquareButton onClick={handleAdd} size={40} color="#c5c5c5">
						<PlusIcon width={18} fill="#333" />
					</SquareButton>
				</div>
				<button className="product-card__add-to-cart">Agregar</button>
			</div>
		</div>
	)
}

export default ProductCard
