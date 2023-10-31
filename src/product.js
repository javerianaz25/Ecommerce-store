import React, { useState } from 'react';
import Productdetail from './productdetail';
import './product.css';
import Navbar from '../src/components/Navbar/navbar'
import Footer from '../src/components/Footer/footer'

const Product = ({ addtocart}) => {
  const [filteredProducts, setFilteredProducts] = useState(Productdetail);
  
  const filterProduct = (category) => {
    const updatedProducts = Productdetail.filter((product) => product.Cat === category);
    setFilteredProducts(updatedProducts);
  };

  const allProducts = () => {
    setFilteredProducts(Productdetail);
  };

  const handleAddToCart = (product) => {
    addtocart(product);  // Call the addtocart function with the product as an argument
  };

  return (
    <>
    <Navbar/>
    <div className='products' id='product'>
      <h2># Products</h2>
      <p>Home . products</p>
      <div className='container'>
        <div className='filter'>
          <div className='categories'>
            <h3>Categories</h3>
            <ul>
              
              <li onClick={() => allProducts ()}>All Products</li>
                        <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                        <li onClick={() => filterProduct ("Smart Watch")}>Smart Watch</li>
                        <li onClick={() => filterProduct ("Headphone")}>Headphone</li>
                        <li onClick={() => filterProduct ("Camera")}>Camera</li>
                        <li onClick={() => filterProduct ("Gaming")}>Gaming</li>
            </ul>
          </div>
        </div>
        <div className='productbox'>
          <div className='contant'>
            {filteredProducts.map((product) => (
              <div className='box' key={product.id}>
                <div className='img_box'>
                  <img src={product.Img} alt={product.Title} />
                </div>
                <div className='detail'>
                  <p>{product.Cat}</p>
                  <h3>{product.Title}</h3>
                  <h4>${product.Price}</h4>
                  {/* Modify the button onClick handler to call handleAddToCart */}
                  <button className='productbtn'onClick={() => handleAddToCart(product)}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Product;
