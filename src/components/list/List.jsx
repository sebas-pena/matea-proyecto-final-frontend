import React from "react"
import ArrowButton from "../buttons/arrow-button/ArrowButton"
import "./List.css"
const List = ({ children, title }) => {
	return (
		<div>
			{title && <h2 className="list__title">{title}</h2>}
			<div className="list">
				<ArrowButton direction="left" size="small" />
				<div className="list__ctn">{children}</div>
				<ArrowButton size="small" />
			</div>
		</div>
	)
}

export default List
