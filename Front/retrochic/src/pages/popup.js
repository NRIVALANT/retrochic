import React from 'react';
import '../assets/style/popup.css';
import Navbar from '../components/header';

function Popup() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const productName = e.target.productName.value;
      const productPrice = e.target.productPrice.value;
      const productDescription = e.target.productDescription.value;
      const productCategory = e.target.productCategory.value;
      const productStatus = e.target.productStatus.value;
      const productCarbonFootPrint = e.target.productCarbonFootPrint.value;
      const productSize = e.target.productSize.value;
      const productColor = e.target.productColor.value;
      const productThriftShop = e.target.productThriftShop.value;
      const productMaterial = e.target.productMaterial.value;

      console.log(productName, productPrice, productDescription, productCategory, productStatus, productCarbonFootPrint, productSize, productColor, productThriftShop, productMaterial);
    }
    return (
      <div className='popup'>
        <Navbar />
        <div className='popup-inner'>
          <h2>Add a product</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-popup-inner'>
              <label htmlFor='productName'>Product Name:</label>
              <input type='text' id='productName' name='productName' required />
            </div>
            <div className='form-popup-inner'>
              <label htmlFor='productPrice'>Product Price:</label>
              <input type='text' id='productPrice' name='productPrice' required />
            </div>
            <div className='form-popup-inner' >
              <label htmlFor='productDescription'>Product Description:</label>
              <textarea id='productDescription' name='productDescription' required></textarea>
            </div>
            <div className='form-popup-inner'>
              <label htmlFor='productCategory'>Product Category:</label>
              <input type='text' id='productCategory' name='productCategory' required />
            </div>
            <div className='form-popup-inner'>
              <label htmlFor='productStatus'>Product Status:</label>
              <input type='text' id='productStatus' name='productStatus' required />
            </div>
            <div className='form-popup-inner'>
              <label htmlFor='productCarbonFootPrint'>Product Carbon Footprint:</label>
              <input type='text' id='productCarbonFootPrint' name='productCarbonFootPrint' required />
            </div>
            <div className='form-popup-inner'>
              <label htmlFor='productSize'>Product Size:</label>
              <input type='text' id='productSize' name='productSize' required />
            </div>
            <div className='form-popup-inner'>
              <label htmlFor='productColor'>Product Color:</label>
              <input type='text' id='productColor' name='productColor' required />
            </div>
            <div className='form-popup-inner'>
              <label htmlFor='productThriftShop'>Product Thrift Shop:</label>
              <input type='text' id='productThriftShop' name='productThriftShop' required />
            </div>
            <div className='form-popup-inner'>
              <label htmlFor='productMaterial'>Product Material:</label>
              <input type='text' id='productMaterial' name='productMaterial' required />
            </div>
            <button type='submit'>Add product</button>
          </form>
        </div>
      </div>
    );
}

export default Popup;