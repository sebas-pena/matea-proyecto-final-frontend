import { useRef } from "react"
import ArrowButton from "../buttons/arrow-button/ArrowButton"
import "./List.css"
const List = ({ children, title }) => {
	const ctnRef = useRef(null)
	const handleClick = (direction) => {
		const container = ctnRef.current
		if (container) {
			const distance = container.clientWidth
			const currentScroll = container.scrollLeft
			container.scroll({
				left: currentScroll + distance * direction,
				behavior: "smooth",
			})
		}
	}
	return (
		<div>
			{title && <h2 className="list__title">{title}</h2>}
			<div className="list">
				<ArrowButton
					direction="left"
					size="small"
					onClick={() => handleClick(-1)}
				/>
				<div className="list__ctn" ref={ctnRef}>
					{children}
				</div>
				<ArrowButton size="small" onClick={() => handleClick(1)} />
			</div>
		</div>
	)
}

export default List
