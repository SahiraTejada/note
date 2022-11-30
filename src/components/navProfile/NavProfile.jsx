import React from 'react';
import './NavProfile.css';
import {RiMoreFill } from 'react-icons/ri/';
const NavProfile = () => {
  return (
    <div className='mx-5 mt-4 nav-perfil d-flex justify-content-evenly align-items-center'>
        <img className='avatar'/>
            NavProfile
        <RiMoreFill/>
        </div>
  )
}

export default NavProfile