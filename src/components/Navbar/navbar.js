import React from 'react';
import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import menu from '../../img/menuw.png'
import { BsBagCheck } from 'react-icons/bs';
import { IoIosLogIn } from 'react-icons/io'




function Navbar() {
  const[showMenu, setShowMenu]=useState(false)
  
  return (
    <div className="navbar">
      <div className="container">
        <div className="logoname">
          <h2>PHOLEX</h2>
        </div>
        <div className="menuitems">
          <ul>
            <Link to='/' className='listitems'>Home</Link>
            <Link  to='/about' className='listitems'>About</Link>
            <Link  to='/product' className='listitems'>Product</Link>
            <Link  to='/contact' className='listitems'>Contact Us</Link>
          </ul>
        </div>
        <div className="rightsystem">
        <Link to="/login" className='icon'><IoIosLogIn/></Link>
                <Link to="/cart" className='icon'><BsBagCheck /></Link>
        
        </div>
        <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu"style={{display:showMenu? 'flex':'none'}}>
      <Link to='/' className='listitems'onClick={()=>setShowMenu(false)}>Home</Link>
            <Link  to='/about' className='listitems'onClick={()=>setShowMenu(false)}>About</Link>
            <Link  to='/product' className='listitems'onClick={()=>setShowMenu(false)}>Product</Link>
            <Link  to='/contact' className='listitems'onClick={()=>setShowMenu(false)}>Contact Us</Link>
            <Link  to='/contact' className='listitems'onClick={()=>setShowMenu(false)}>Register</Link>
            <Link to="/login" className='icon'><IoIosLogIn/></Link>
            <Link to="/cart" className='icon'><BsBagCheck /></Link>

        </div>
        
      </div>
    </div>
  );
}

export default Navbar;

 