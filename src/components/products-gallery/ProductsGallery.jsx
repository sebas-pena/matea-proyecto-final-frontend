import { useState, useEffect } from "react"
import ProductCard from "../cards/product-card/ProductCard"
import List from "../list/List"

const ProductsGallery = ({ category, sale, title }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch(
			`http://localhost:5000/api/products/?${
				category ? `category=${category}&` : ""
			}${sale ? `sale=true` : ""}`
		)
			.then((res) => {
				if (res.ok) return res.json()
				else Promise.reject()
			})
			.then((data) => {
				setProducts(data.products)
				console.log(data.products)
			})
			.catch((e) => console.log(e))
	}, [])

	return (
		<List title={title}>
			{products.map((product) => (
				<ProductCard key={product._id} {...product} />
			))}
		</List>
	)
}

export default ProductsGallery
