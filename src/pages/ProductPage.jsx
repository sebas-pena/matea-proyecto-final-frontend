import { useContext } from "react"
import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import SimpleButton from "../components/buttons/simple-button/SimpleButton"
import ProductCard from "../components/cards/product-card/ProductCard"
import Footer from "../components/footer/Footer"
import ImageDisplay from "../components/image-display/ImageDisplay"
import List from "../components/list/List"
import NavBar from "../components/navbar/NavBar"
import ProductsGallery from "../components/products-gallery/ProductsGallery"
import StyledText from "../components/StyledText"
import Wrapper from "../components/Wrapper"
import { StoreContext } from "../store/StoreProvider"

import "./ProductPage.css"
const ProductPage = () => {
	const { id } = useParams()
	const [product, setProduct] = useState({})
	const { store, dispatch } = useContext(StoreContext)
	useEffect(() => {
		setProduct({})
		setTimeout(() => {
			document.documentElement.scrollTo({
				top: 0,
				left: 0,
				behavior: "instant",
			})
		}, 100)
		fetch(`http://localhost:5000/api/products?id=${id}`)
			.then((res) => {
				if (res.ok) return res.json()
				else return Promise.reject()
			})
			.then((product) => {
				setProduct(product)
			})
			.catch(console.log)
	}, [id])

	const handleAddToCart = () => {
		const { user, token, cart } = store
		if (user) {
			fetch("http://localhost:5000/api/cart", {
				headers: {
					authorization: `Bearer ${token}`,
					"content-type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					productId: id,
				}),
			})
				.then((res) => {
					return res.json().then((data) => {
						if (res.ok) return data
						else Promise.reject(data)
					})
				})
				.then((data) => {
					dispatch({ type: "SET_CART", payload: data.products })
				})
				.catch(console.log)
		}
	}

	const { images, title, price, sale, currency, specs, category, description } =
		product
	return (
		<>
			<NavBar />
			<Wrapper
				vertical
				grow={1}
				width="100%"
				maxWidth={1100}
				margin="auto"
				gap="30px"
				padding="20px"
			>
				<div className="product-page__product-info-ctn">
					<div className="product-page__product-gallery-ctn">
						{images && <ImageDisplay images={images} />}
					</div>
					<div className="product-page__product-info">
						<StyledText weight={500} color="#333" size={24}>
							{title}
						</StyledText>
						<div className="product-page__product-price">
							<div>
								<StyledText>Precio:</StyledText>
								<StyledText size={20} weight={400}>
									{currency} {Math.floor(price - (price * sale) / 100)}
								</StyledText>
							</div>
							<div>
								<StyledText>Antes:</StyledText>
								<StyledText
									size={20}
									weight={300}
									textDecoration="line-through"
								>
									{currency} {price}
								</StyledText>
							</div>
						</div>
						<SimpleButton height={40} onClick={handleAddToCart}>
							Añadir al carrito
						</SimpleButton>
					</div>
				</div>
				{description && (
					<>
						<StyledText size={28} weight="500">
							Información del producto
						</StyledText>
						<p className="product__description">{description}</p>
					</>
				)}
				<StyledText size={28} weight="500">
					Información del producto
				</StyledText>
				<div className="product-page__specs-ctn">
					{specs &&
						specs.map(({ title, details }) => (
							<div className="product-page__spec-ctn" key={title}>
								<StyledText size={20} weight="500">
									{title}
								</StyledText>
								{details.map(({ title, value }) => (
									<div className="product-page__spec" key={title}>
										<StyledText minWidth="200px" size={16}>
											{title}
										</StyledText>
										<StyledText minWidth="200px" size={16}>
											{value}
										</StyledText>
									</div>
								))}
							</div>
						))}
				</div>
				<ProductsGallery title="Ofertas" sale />
				{category && (
					<ProductsGallery title="Productos similares" category={category} />
				)}
			</Wrapper>
			<Footer />
		</>
	)
}

export default ProductPage
