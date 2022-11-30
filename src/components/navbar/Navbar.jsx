import React from 'react'
import './Navbar.css';
import Montain from '../../assets/img/natural-montainous-view_1112-231.webp';
import NavProfile from '../navProfile/NavProfile';
const Navbar = () => {
  return (
    <div className='nav-profile'>

        <img src={Montain} alt='background' className='background-photo'/>
        <div className='profile d-flex justify-content-end'>
            <NavProfile/>
        </div>
    </div>
  )
}

export default Navbar