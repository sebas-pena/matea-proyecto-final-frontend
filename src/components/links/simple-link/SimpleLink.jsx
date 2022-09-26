import React from "react"
import { Link } from "react-router-dom"
import "./SimpleLink.css"
const SimpleLink = ({
	to,
	children,
	fontSize = 14,
	color = "blue",
	align = "left",
}) => {
	const styles = {
		fontSize,
		color,
		textAlign: align,
	}
	return (
		<Link to={to} className="simple-link" style={styles}>
			{children}
		</Link>
	)
}

export default SimpleLink
