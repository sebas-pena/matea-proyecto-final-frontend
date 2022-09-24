import React from "react"
import ArrowButton from "../buttons/arrow-button/ArrowButton"
import "./List.css"
const List = ({ children }) => {
	return (
		<div className="list">
			<ArrowButton direction="left" size="small" />
			<div className="list__ctn">{children}</div>
			<ArrowButton size="small" />
		</div>
	)
}

export default List
