import React from 'react';
import './about.css'; 
import left from '../../img/aboutwall2.jpg';
import right from '../../img/aboutwall3.jpg';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page" id='about'>
      <div className="image-overlay">
        <div className="centered-text">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="content-section">
        <div className="left-content">
          <img src={left} alt="Left Image" />
        </div>
        <div className="right-content">
          <p>
          "Welcome to your ultimate online shopping destination! Explore a diverse range of products from fashion to electronics, all in one place."<br></br>

"Find great deals and exclusive offers that cater to your budget, making every purchase a smart and satisfying choice."
          </p>
        </div>
      </div>
      <div className="content-section reversed">
        <div className="left-content">
          <p>
          "With user-friendly navigation and a secure checkout process, we make online shopping a breeze for you."<br></br>

"Join our community of satisfied customers and elevate your shopping experience with us today!"
          </p>
        </div>
        <div className="right-content">
          <img src={right} alt="Right Image" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
