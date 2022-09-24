import { ReactComponent as Arrow } from "../../../assets/svg/arrow-right.svg"
import React from "react"
import "./ArrowButton.css"
const ArrowButton = ({
	color = "#fff",
	direction = "right",
	onClick = () => {},
	size = "big",
}) => {
	const deg = {
		right: "0",
		left: "-180deg",
		up: "-90deg",
		down: "90deg",
	}

	const sizes = {
		small: 30,
		medium: 40,
		big: 50,
	}

	const arrowWidth = {
		small: 20,
		medium: 25,
		big: 30,
	}

	const buttonStyle = {
		transform: `rotate(${deg[direction]})`,
		width: sizes[size],
		height: sizes[size],
	}

	console.log(buttonStyle)
	return (
		<button className="arrow-button" style={buttonStyle} onClick={onClick}>
			<Arrow fill={color} height={arrowWidth[size]} />
		</button>
	)
}

export default ArrowButton
