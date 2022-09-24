import React from "react"
import "./CategoryButton.css"
const CategoryButton = ({ Icon, title }) => {
	return (
		<button className="category-button">
			<Icon width="35" fill="#3f59e7" />
			<p>{title}</p>
		</button>
	)
}

export default CategoryButton
