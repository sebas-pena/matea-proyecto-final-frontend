import React from "react"
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
			</div>
		</div>
	)
}

export default ProductCard
