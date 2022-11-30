
import React from 'react'
import Home from './home/Home.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';
import Navbar from '../components/navbar/Navbar';

export const HomePage = () => {
 
  return (
   
     <div>
        <div className='d-flex side'>
        <SideBar/>
        <div className='d-flex flex-column w-100'>
         <Navbar/>
        <Home className='front position-relative'/>
        </div>
        </div>
        </div>
      
  )
}

