import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';
import
 {BsFillBellFill, BsFillEnvelopeFill, BsSearch, BsJustify}
 from 'react-icons/bs'
 import {LuLogOut } from 'react-icons/lu'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <Link to="/" className='icon'><LuLogOut/></Link>
        </div>
    </header>
  )
}

export default Header