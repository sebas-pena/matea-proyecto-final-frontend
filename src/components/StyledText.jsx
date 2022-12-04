import React from "react"

const StyledText = ({
	weight = 400,
	color = "#333",
	align = "left",
	size = 16,
	width = "unset",
	children,
	minWidth = "unset",
	textDecoration = "unset",
}) => {
	const textStyle = {
		fontWeight: weight,
		color,
		textAlign: align,
		fontSize: size,
		width,
		minWidth,
		textDecoration,
	}
	return <p style={textStyle}>{children}</p>
}

export default StyledText
