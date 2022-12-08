import React from "react"
import Banner from "../components/banner/Banner"
import ProductCard from "../components/cards/product-card/ProductCard"
import CategoryList from "../components/CategoryList"
import Footer from "../components/footer/Footer"
import List from "../components/list/List"
import NavBar from "../components/navbar/NavBar"
import Slider from "../components/slider/Slider"
import Wrapper from "../components/Wrapper"

// MOCK

const products = [
	{
		title: "Vermouth Blanco Martini 1 L",
		brand: "Martini",
		price: 369,
		currency: "$",
		sale: 6,
		imgUrl:
			"https://tatauy.vteximg.com.br/arquivos/ids/232854-600-600/Vermouth-Blanco-Martini-1-Lt-Vermouth-Blanco-Martini-1Lt-1-894.jpg?v=637738942433500000",
	},
	{
		title: "Vermouth Blanco Martini 1 L",
		brand: "Martini",
		price: 369,
		currency: "$",
		sale: 6,
		promo: [{ pay: 1, get: 2 }],
		imgUrl:
			"https://tatauy.vteximg.com.br/arquivos/ids/232854-600-600/Vermouth-Blanco-Martini-1-Lt-Vermouth-Blanco-Martini-1Lt-1-894.jpg?v=637738942433500000",
	},
	{
		title: "Vermouth Blanco Martini 1 L",
		brand: "Martini",
		price: 369,
		currency: "$",
		sale: null,
		promo: [
			{ pay: 1, get: 2 },
			{ pay: 2, get: 3 },
		],
		imgUrl:
			"https://tatauy.vteximg.com.br/arquivos/ids/232854-600-600/Vermouth-Blanco-Martini-1-Lt-Vermouth-Blanco-Martini-1Lt-1-894.jpg?v=637738942433500000",
	},
	{
		title: "Vermouth Blanco Martini 1 L",
		brand: "Martini",
		price: 369,
		currency: "$",
		sale: 6,
		promo: [
			{ pay: 1, get: 2 },
			{ pay: 2, get: 3 },
		],
		imgUrl:
			"https://tatauy.vteximg.com.br/arquivos/ids/232854-600-600/Vermouth-Blanco-Martini-1-Lt-Vermouth-Blanco-Martini-1Lt-1-894.jpg?v=637738942433500000",
	},
	{
		title: "Vermouth Blanco Martini 1 L",
		brand: "Martini",
		price: 369,
		currency: "$",
		sale: null,
		promo: [],
		imgUrl:
			"https://tatauy.vteximg.com.br/arquivos/ids/232854-600-600/Vermouth-Blanco-Martini-1-Lt-Vermouth-Blanco-Martini-1Lt-1-894.jpg?v=637738942433500000",
	},
]

const HomePage = () => {
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
				<Slider />
				<CategoryList />
				<Banner>
					<img
						src="https://static-ti-vm1.tiendainglesa.com.uy/imagenes/Banners/Banner4666_177401ec-3199-437b-87d0-522012d7f710.jpeg"
						alt="banner-1"
					/>
					<img
						src="https://static-ti-vm1.tiendainglesa.com.uy/imagenes/Banners/Banner4666_177401ec-3199-437b-87d0-522012d7f710.jpeg"
						alt="banner-2"
					/>
				</Banner>
				<List title="Ofertas">
					{products.map((product, i) => (
						<ProductCard key={i} {...product} />
					))}
				</List>
				<Banner>
					<img
						src="https://tatauy.vteximg.com.br/arquivos/ids/519314/BombazosSep-1240x200-BebidasHome_.png?v=637992102984000000"
						alt="2x1"
					/>
				</Banner>
				<List title="Bebidas">
					{products.map((product, i) => (
						<ProductCard key={i} {...product} />
					))}
				</List>
				<Banner>
					<img
						src="https://tatauy.vteximg.com.br/arquivos/ids/304214/Banner-Oportunidad-Hoy-22-02-2022-1240x200.png?v=637811497968830000"
						alt="2x1"
					/>
				</Banner>
				<List title="Helados">
					{products.map((product, i) => (
						<ProductCard key={i} {...product} />
					))}
				</List>
			</Wrapper>
			<Footer />
		</>
	)
}

export default HomePage
