import React from 'react';
import {useRef } from 'react'
import { useNavigate} from "react-router-dom";
import SimpleButton from "../../buttons/simple-button/SimpleButton"
import "./ProductForm.css"

const ProductForm = () => {

	const titlenameRef = useRef();
	const imagesRef = useRef();
	const priceRef = useRef();
	const currencyRef = useRef();
	const saleRef = useRef();
	const specsRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const title = titlenameRef.current.value;
		const images = imagesRef.current.value;
		const price = priceRef.current.value;
		const currency = currencyRef.current.value;
		const sale = saleRef.current.value;
		/* const specs = specsRef.current.value; */
		//console.log({ email, password })
		fetch("http://localhost:5000/api/products", {
		  method: "POST",
		  headers: { "content-type": "application/json" },
		  //solicitamos los inputs del ref
		  body: JSON.stringify({ title, images,price,currency,sale})
		}).then(function (response) {
			//decodificar formato json
			return response.json()
		  }).then(function (data) {
			console.log("Data: ", data)
		  })
		}
		
		return (
			
	<div className="login-form__ctn">

      <form className='Form-Login' onSubmit={onSubmit}>

        <h3>Create Producs</h3>

        <label className='Label' for="username">Titile</label>
        <input className='Input' id='title' type='text' name='title' ref={titlenameRef} />

        <label for="images">Images</label>
        <input className='Input' id='images' type='text' name='images' ref={imagesRef} />
			
        <label for="price">Price</label>
        <input className='Input' id='price' type='text' name='price' ref={priceRef} />
			
        <label for="currency">Currency</label>
        <input className='Input' id='currency' type='text' name='currency' ref={currencyRef} />
			
        <label for="sale">Sale</label>
        <input className='Input' id='sale' type='text' name='sale' ref={saleRef} />
{/* 			
        <label for="specs">Specs</label>
        <input className='Input' id='specs' type='text' name='specs' ref={specsRef} /> */}

		<div className="section">
						<input className='Boton-register' type="submit" value="Registro de Productos" />
						<br></br>
						<br></br>
						<br></br>
					</div>

			<SimpleButton asLink to="/" height={35}>
				Home
			</SimpleButton>
			
			</form>
	</div>
	)
}

export default ProductForm







 



