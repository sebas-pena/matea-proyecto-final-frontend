import React from "react"

const Wrapper = ({
	children,
	align,
	justify,
	vertical,
	grow = "unset",
	width = "unset",
	maxWidth,
	margin,
	gap,
}) => {
	const styles = {
		display: "flex",
		width,
		flex: grow,
		alignItems: align,
		justifyContent: justify,
		flexDirection: vertical ? "column" : "row",
		maxWidth,
		margin,
		gap,
	}
	return <div style={styles}>{children}</div>
}

export default Wrapper
