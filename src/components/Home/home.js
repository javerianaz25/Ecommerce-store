import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';


import phone from '../../img/Mobile Phone.png'
import watch from '../../img/smart watch.png'
import headphone from '../../img/headphone.png'
import slider from '../../img/slider-img.png'
import { FiTruck } from 'react-icons/fi';

import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import Homeproduct from '../../../src/homeproduct';
import './home.css'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'


const Home = ( {addtocart}) => {
  return (
    <>
    <Navbar />
    <div className='top_banner'>
    <div className='container'>
        <div className='detail'>
            <h2>The Best Note Book Colletion 2023</h2>
            <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
        </div>
        
        {/* <div className='img_box'>
                <img src={slider}alt='sliderimg'></img>
            </div> */}
        </div>
    </div>
<div className="product_type">
  <div className="container">
    <div className="box">
      <div className="img_box">
        <img src={phone} alt="mobile" />
      </div>
      <div className="detail">
        <p>Iphone</p>
      </div>
    </div>

    <div className="box">
      <div className="img_box">
        <img src={watch} alt="watch" />
      </div>
      <div className="detail">
        <p>Smartwatch</p>
      </div>
    </div>

    <div className="box">
      <div className="img_box">
        <img src={headphone} alt="headphone" />
      </div>
      <div className="detail">
        <p>Headphone</p>
      </div>
    </div>
    <div className='box'>
          <div className='img_box pc'>
            <img className="pc"src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08484411.png" alt='cpu '></img>
          </div>
          <div className='detail'>
            <p>Laptop</p>
          </div>
        </div>
  </div>
</div>
<div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h4>Free Shipping</h4>
            <p>Oder above $1000</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h4>Return & Refund</h4>
            <p>Money Back Gaurenty</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h4>Member Discount</h4>
            <p>On every Oder</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h4>Customer Support</h4>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm) => 
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className='detail'>
              <p>{curElm.Cat}</p>
              <h4>{curElm.Title}</h4>
              <h3>${curElm.Price}</h3>
             <button className='productbtn' onClick={() => addtocart(curElm)}>Add to cart</button>
            </div>
              </div>
             
            )
          })
        }
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
        <h4>LATEST TECHNOLOGY ADDED</h4>
        <h3>Apple iPad 10.2 9th Gen - 2021</h3>
        <p>$ 986</p>
        <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
      </div>
      <div className='img_box'>
        <img className='img' src={slider} alt='sliderimg'></img>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home 
