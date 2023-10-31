import React, { useState } from 'react';
import Home from './components/Home/home';
import Product from './product';
import Cart from './components/Cart/cart';   
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adminproducts from './Adminproducts';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import CreateProduct from './CreateProduct';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  const [cart, setCart] = useState([]);
  const addtocart = (product) => 
  {
    const exsit = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already added to cart")
    }
    else
    { 
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  } 
  console.log(cart)
  
  return (
    <>
    
      <Router>
  
        
        <Routes>
          <Route
            path="/"
            element={<Home addtocart={addtocart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product addtocart={addtocart}/>} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} addtocart={addtocart}/>} 
          />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/adminproducts" element={<Adminproducts/>} />
          <Route path="/createproduct" element={<CreateProduct/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

