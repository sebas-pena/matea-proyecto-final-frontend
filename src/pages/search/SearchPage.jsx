import { useEffect } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import ProductCard from "../../components/cards/product-card/ProductCard"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navbar/NavBar"
import StyledText from "../../components/StyledText"
import Wrapper from "../../components/Wrapper"

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const query = searchParams.get("q")
    fetch(`http://localhost:5000/api/products?q=${query}`)
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) return data
          else return Promise.reject(data)
        })
      })
      .then((data) => {
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
        <Wrapper wrap="wrap" gap={20}>
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </Wrapper>
      </Wrapper>
      <Footer />
    </>
  )
}

export default SearchPage
