import React, { Component } from 'react'
import Footer from "../components/footer/Footer"
import NavBar from "../components/navbar/NavBar"
import Wrapper from '../components/Wrapper'
import "./CartPage.css"

export default class CartPage extends Component {
    render() {
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
            
                <div className='Contenedor-Cart'>
                    <div>

                        <h1 className='Titulo-Cart'> Esto es Producto </h1>

                        <ul className='Detalles-Cart'>
                            <h2 className='Detall-Cart'> Detalles del Producto</h2>
                            <h2 className='Detall-Cart'> Cantidad</h2>
                            <h2 className='Detall-Cart'> Precio</h2>
                            <h2 className='Detall-Cart'> Total</h2>
                        </ul>

                        <ul className='Detalles-Cart-Pedido'>
                            <img src="/" alt="/" />

                        </ul>
                        <a>Continuar Comprando</a>

                    </div>

                    <div className='Contenedor-Pedido'>

                        <h1 className='Titulo-Pedido'>Resumen del Pedido</h1>
                        <ul className='Detalles-Pedido'>
                            <h2 className='Detall-Pedido' >item </h2>
                            <h2 className='Detall-Pedido' >Compras</h2>
                            <input className='Detall' id='Detall' type='text' name='Detalle' ></input>
                        </ul>

                        <ul className='Detalles-Pedido-Total'>
                            <h2>Precio Total</h2>
                            <button className='Boton-Pagar'>Pagar</button>
                        </ul>

                    </div>
                </div>
            </Wrapper>
                <Footer />
                </>
        )
    }
}
