import React from "react"
import "./Slider.css"
import ArrowButton from "../buttons/arrow-button/ArrowButton"
const image =
	"https://static-ti-vm1.tiendainglesa.com.uy/imagenes/Banners/Banner4633_3cf0ef23-2e7d-4796-b7ed-ad8183acc26a.jpeg"

const Slider = () => {
	return (
		<div className="slider">
			<div className="slider__back">
				<ArrowButton direction="left" size="big" />
			</div>
			<img className="slider__display" src={image} alt="banner" />
			<div className="slider__forward">
				<ArrowButton size="big" />
			</div>
		</div>
	)
}

export default Slider
