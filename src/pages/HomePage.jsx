import React from "react"
import ProductCard from "../components/cards/product-card/ProductCard"
import CategoryList from "../components/CategoryList"
import List from "../components/list/List"
import Slider from "../components/slider/Slider"

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
			<Slider />
			<CategoryList />
			<h2>Ofertas</h2>
			<List>
				{products.map((product, i) => (
					<ProductCard key={i} {...product} />
				))}
			</List>
		</>
	)
}

export default HomePage
