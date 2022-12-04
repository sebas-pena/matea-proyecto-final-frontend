import React, { useState } from "react"
import "./ImageDisplay.css"
const ImageDisplay = ({ images }) => {
	const [imageOnDisplay, setImageOnDisplay] = useState(0)

	return (
		<div className="image-display__ctn">
			<div className="image-display__gallery">
				{images.map((imageUrl, index) => (
					<img
						src={imageUrl}
						className={index === imageOnDisplay ? "focus" : ""}
						onClick={() => {
							setImageOnDisplay(index)
						}}
					/>
				))}
			</div>
			<div>
				<img className="image-display__focus" src={images[imageOnDisplay]} />
			</div>
		</div>
	)
}

export default ImageDisplay
