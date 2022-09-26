import React from "react"
import "./SimpleInput.css"
const SimpleInput = ({
	type = "text",
	placeholder,
	onChange,
	name,
	width = "100%",
	height = 35,
	maxWidth = "unset",
	fontSize = 15,
	paddingX = 10,
	background = "transparent",
	focus = "primary",
	borders = "all",
	borderColor,
	color,
	error,
}) => {
	const inputStyle = {
		width,
		maxWidth,
		fontSize,
		padding: `0px ${paddingX}px`,
		backgroundColor: background,
		borderColor: error ? "red" : borderColor || background,
		color,
		height,
	}
	return (
		<input
			className={`simple-input focus-${focus} borders-${borders}`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			name={name}
			style={inputStyle}
			spellCheck="false"
		/>
	)
}

export default SimpleInput
