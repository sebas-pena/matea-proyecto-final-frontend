import React from "react"
import Banner from "../components/banner/Banner"
import CategoryList from "../components/CategoryList"
import Footer from "../components/footer/Footer"
import NavBar from "../components/navbar/NavBar"
import ProductsGallery from "../components/products-gallery/ProductsGallery"
import Slider from "../components/slider/Slider"
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
				<ProductsGallery sale title="Ofertas" />
				<Banner>
					<img
						src="https://tatauy.vteximg.com.br/arquivos/ids/519314/BombazosSep-1240x200-BebidasHome_.png?v=637992102984000000"
						alt="2x1"
					/>
				</Banner>
				<ProductsGallery title="Perifericos" category="peripheral" />
				<Banner>
					<img
						src="https://tatauy.vteximg.com.br/arquivos/ids/304214/Banner-Oportunidad-Hoy-22-02-2022-1240x200.png?v=637811497968830000"
						alt="2x1"
					/>
				</Banner>
				<ProductsGallery title="Monitores" category="monitor" />
			</Wrapper>
			<Footer />
		</>
	)
}

export default HomePage
