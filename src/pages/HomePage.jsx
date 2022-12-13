import React from "react"
import Banner from "../components/banner/Banner"
import CategoryList from "../components/CategoryList"
import Footer from "../components/footer/Footer"
import NavBar from "../components/navbar/NavBar"
import ProductsGallery from "../components/products-gallery/ProductsGallery"
import Carrousel from "../components/carrousel/Carrousel"
import Wrapper from "../components/Wrapper"

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
				<Carrousel />
				<CategoryList />
				<Banner
					items={[
						{
							imgUrl:
								"https://media.discordapp.net/attachments/1052097507255144511/1052097570270359682/image.png",
							productId: "63981dbace7df11d4e56bada",
						},
						{
							imgUrl:
								"https://cdn.discordapp.com/attachments/1052097507255144511/1052101268195262505/image.png",
							productId: "63981fcdce7df11d4e56bae3",
						},
					]}
				/>
				<ProductsGallery sale title="Ofertas" />
				<ProductsGallery title="Perifericos" category="peripheral" />
				<ProductsGallery title="Monitores" category="monitor" />
			</Wrapper>
			<Footer />
		</>
	)
}

export default HomePage
