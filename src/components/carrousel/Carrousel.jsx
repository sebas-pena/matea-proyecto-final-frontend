import { useEffect, useState, useRef } from "react"
import "./Carrousel.css"
import ArrowButton from "../buttons/arrow-button/ArrowButton"

const images = [
	"https://cdn.discordapp.com/attachments/1052097507255144511/1052104205659291718/WEBBANNER-Z690-1920x500-Precio-Calidad.png",
	"https://media.discordapp.net/attachments/1052097507255144511/1052104559117467648/Aero-1920x500-1.png",
	"https://cdn.discordapp.com/attachments/1052097507255144511/1052105293921779722/Banner_1920x500.png",
	"https://www.precio-calidad.com.ar/wp-content/uploads/2021/05/Precio-Calidad-Serie-30-1920x500-copia.jpg",
]

const Carrousel = () => {
	const [isAnimationFinished, setIsAnimationFinished] = useState(true)
	let carrouselRef = useRef()

	useEffect(() => {
		const carrousel = carrouselRef.current
		let carrouselImages = carrousel.children
		const lastCarrouselImage = carrouselImages[carrouselImages.length - 1]
		carrousel.insertAdjacentElement("afterbegin", lastCarrouselImage)
	}, [])

	const nextImg = () => {
		if (isAnimationFinished) {
			setIsAnimationFinished(false)
			const carrousel = carrouselRef.current
			let carrouselImages = carrousel.children
			carrousel.style.transition = "all 0.5s"
			carrousel.style.left = "-200%"

			setTimeout(() => {
				const firstCarrouselImage = carrouselImages[0]
				carrousel.insertAdjacentElement("beforeend", firstCarrouselImage)
				carrousel.style.transition = "all 0s"
				carrousel.style.left = "-100%"
				setIsAnimationFinished(true)
			}, 500)
		}
	}

	const prevImg = () => {
		if (isAnimationFinished) {
			setIsAnimationFinished(false)

			const carrousel = carrouselRef.current
			let carrouselImages = carrousel.children
			carrousel.style.transition = "all 0.5s"
			carrousel.style.left = "0"

			setTimeout(() => {
				const lastCarrouselImage = carrouselImages[carrouselImages.length - 1]
				carrousel.insertAdjacentElement("afterbegin", lastCarrouselImage)
				carrousel.style.transition = "all 0s"
				carrousel.style.left = "-100%"
				setIsAnimationFinished(true)
			}, 500)
		}
	}

	return (
		<div className="carrousel-ctn">
			<div className="carrousel" ref={carrouselRef}>
				{images.map((url, index) => (
					<div className="carrousel__img-ctn" key={index}>
						<img alt="slider-img" src={url} key={index} />
					</div>
				))}
			</div>
			<div className="carrousel-controls">
				<ArrowButton direction="left" size="big" onClick={prevImg} />
				<ArrowButton size="big" onClick={nextImg} />
			</div>
		</div>
	)
}

export default Carrousel
