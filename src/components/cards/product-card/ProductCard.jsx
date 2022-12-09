import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({
  _id,
  imgUrl,
  images,
  title,
  sale = 0,
  promo = [],
  price,
}) => {
  return (
    <Link to={`/product/${_id}`} className="product-card">
      <img
        src={imgUrl || images[0]}
        className="product-card__img"
        alt={title}
      />
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
        {sale !== 0 && (
          <p className="product-card__old-price">
            Antes: <span>${price}</span>
          </p>
        )}
        <p className="product-card__price">
          ${sale ? price - Math.floor((price * sale) / 100) : price}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
