import React from "react"
import { useParams } from "react-router-dom"
import SimpleButton from "../components/buttons/simple-button/SimpleButton"
import ProductCard from "../components/cards/product-card/ProductCard"
import Footer from "../components/footer/Footer"
import ImageDisplay from "../components/image-display/ImageDisplay"
import List from "../components/list/List"
import NavBar from "../components/navbar/NavBar"
import StyledText from "../components/StyledText"
import Wrapper from "../components/Wrapper"
import "./ProductPage.css"
const ProductPage = () => {
  const { id } = useParams()
  console.log(id)
  const product = {
    title: 'Smart Tv SAMSUNG 55" LED UHD Crystal Processor 4K',
    images: [
      "https://images-ti-vm1.tiendainglesa.com.uy/large/P533652-1.jpg",
      "https://images-ti-vm1.tiendainglesa.com.uy/large/P533652-3.jpg",
      "https://images-ti-vm1.tiendainglesa.com.uy/large/P533652-2.jpg",
    ],
    price: 827,
    currency: "U$S",
    sale: 6,
    specs: [
      {
        title: "Especificaciones generales",
        details: [
          {
            title: "Marca",
            value: "SAMSUNG",
          },
          {
            title: "Modelo",
            value: "UN55BU8000",
          },
        ],
      },
      {
        title: "Garantía",
        details: [
          {
            title: "Duración",
            value: "1 año",
          },
          {
            title: "Dirección Service",
            value: "Canelones 2179",
          },
          {
            title: "Teléfono",
            value: "2400 4008",
          },
        ],
      },
      {
        title: "Especificaciones generales",
        details: [
          {
            title: "Marca",
            value: "SAMSUNG",
          },
          {
            title: "Modelo",
            value: "UN55BU8000",
          },
        ],
      },
      {
        title: "Garantía",
        details: [
          {
            title: "Duración",
            value: "1 año",
          },
          {
            title: "Dirección Service",
            value: "Canelones 2179",
          },
          {
            title: "Teléfono",
            value: "2400 4008",
          },
        ],
      },
    ],
  }

  product.specs.sort(
    (specA, specB) => specB.details.length - specA.details.length
  )
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

  const { images, title, price, sale, currency, specs } = product
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
        <div className="product-page__product-info-ctn">
          <div className="product-page__product-gallery-ctn">
            <ImageDisplay images={images} />
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

            <SimpleButton height={40}>Añadir al carrito</SimpleButton>
          </div>
        </div>
        <StyledText size={28} weight="500">
          Información del producto
        </StyledText>
        <div className="product-page__specs-ctn">
          {specs.map(({ title, details }) => (
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
        <List title="Otros visitantes también compraron">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </List>
        <List title="Productos similares">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </List>
      </Wrapper>
      <Footer />
    </>
  )
}

export default ProductPage
