import React from "react"
import "./SquareButton.css"
const SquareButton = ({ children, size = 20, onClick, color }) => {
	const styles = {
		height: size,
		width: size,
		backgroundColor: color,
	}
	return (
		<button className="simple-button" style={styles} onClick={onClick}>
			{children}
		</button>
	)
}

export default SquareButton
