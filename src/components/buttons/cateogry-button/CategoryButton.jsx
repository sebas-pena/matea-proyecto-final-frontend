import React from "react"
import "./CategoryButton.css"
import { Link } from "react-router-dom"
const CategoryButton = ({ Icon, title, path }) => {
  return (
    <Link to={`/category/${path}`} className="category-button">
      <Icon width="35" fill="#3f59e7" />
      <p>{title}</p>
    </Link>
  )
}

export default CategoryButton
