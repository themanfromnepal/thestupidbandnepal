import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'


const Navbar = () => {

  const [mobile, setMobile] = useState(false);

  return (
    <div className='navbar'>
      <div className='container'>
        <Link to='/'><h3 className='logo'>The Stupid Band Nepal</h3></Link>
        
        <ul className={mobile?'nav-links-mobile':'nav-links'} onClick= {()=> setMobile(false)}>
            <Link to='/band'><li>BAND</li></Link>
            <Link to='/gallery'><li>GALLERY</li></Link>
            <Link to='/contact'><li>CONTACT</li></Link>
        </ul>

        <button className='menu-icon' onClick={()=>setMobile(!mobile)}>{mobile?<MdClose />:<FaBars />}</button>
      </div>
    </div>
  )
}

export default Navbar
