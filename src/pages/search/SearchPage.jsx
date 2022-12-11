import { useEffect } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import ProductCard from "../../components/cards/product-card/ProductCard"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navbar/NavBar"
import Pagination from "../../components/pagination/Pagination"
import StyledText from "../../components/StyledText"
import Wrapper from "../../components/Wrapper"

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [products, setProducts] = useState([])
	const [totalPages, setTotalPages] = useState(null)
	useEffect(() => {
		const query = searchParams.get("q")
		const category = searchParams.get("category")
		const page = searchParams.get("page")
		window.scrollTo(0, 0)
		fetch(
			`http://localhost:5000/api/products?${
				category ? `category=${category}&` : ""
			}q=${query || ""}&limit=12&page=${page}`
		)
			.then((res) => {
				return res.json().then((data) => {
					if (res.ok) return data
					else return Promise.reject(data)
				})
			})
			.then((data) => {
				setTotalPages(data.totalPages)
				setProducts(data.products)
			})
			.catch(console.log)
	}, [searchParams])

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
			>
				<StyledText size={35}>Resultados</StyledText>
				<Wrapper wrap="wrap" gap={20} justify="center">
					{products.map((product) => (
						<ProductCard key={product._id} {...product} />
					))}
				</Wrapper>
				{totalPages !== null && <Pagination total={totalPages} />}
			</Wrapper>
			<Footer />
		</>
	)
}

export default SearchPage
