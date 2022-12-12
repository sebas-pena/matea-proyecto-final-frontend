import React from "react"
import { ReactComponent as SpinnerSVG } from "../assets/svg/spinner.svg"

const styles = {
	position: "fixed",
	top: 0,
	left: 0,
	display: "grid",
	placeContent: "center",
	height: "100vh",
	width: "100vw",
	backgroundColor: "#00000033",
}

const Spinner = () => {
	return (
		<div style={styles}>
			<SpinnerSVG height="70" />
		</div>
	)
}

export default Spinner
