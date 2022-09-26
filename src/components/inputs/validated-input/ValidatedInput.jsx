import React from "react"
import SimpleInput from "../simple-input/SimpleInput"
import "./ValidatedInput.css"
const ValidatedInput = (props) => {
	return (
		<div className="validated-input">
			<SimpleInput {...props} />
			{props.error !== undefined && (
				<p className="validated-input__error">{props.error}</p>
			)}
		</div>
	)
}

export default ValidatedInput
