import React from "react"
import { Link } from "react-router-dom"
import "./Banner.css"
const Banner = ({ items }) => {
	return (
		<div className="banner">
			{items.map((item) => (
				<Link to={`/product/${item.productId}`} key={item.productId}>
					<img src={item.imgUrl} alt="product banner" />
				</Link>
			))}
		</div>
	)
}

export default Banner
