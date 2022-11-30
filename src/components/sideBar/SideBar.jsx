import React from 'react'
import './SideBar.css';
import {MdHome,MdPerson,MdOutlineStickyNote2,MdNoteAlt} from 'react-icons/md';
import {BsCalendarCheck} from 'react-icons/bs';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='mb-5 mt-3 fs-3 ms-3'>
            <MdNoteAlt className='icon-logo '/>
            Note App
        </div>
        <div className='w-100'>
        
            <div className='Items '>
                <div className='d-flex align-items-center item'>
                    <MdHome className='icon me-1'/>
                    Inicio
                </div>
            </div>
            <div className='Items'>
                <div className='d-flex align-items-center item'>
                    <MdOutlineStickyNote2 className='icon me-1'/>
                    Notas
                </div>
            </div>
            <div className='Items' >
                <div className='d-flex align-items-center item'>
                    <BsCalendarCheck className='icon me-1'/>
                    Calendario
                </div>
            </div>
             <div className='Items '>
                <div className='d-flex align-items-center item'>
                    <MdPerson className='icon me-1'/>
                    Perfil
                </div>
            </div>
    </div>
    </div>
  )
}

export default SideBar