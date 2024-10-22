import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu,setshowMenu]=useState(false)
  const [token,settoken]=useState(true)

  return (
    <div className='flex item-centre justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer'src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-20 font-large'>
            <NavLink to='/'>
              <li className='py-1 '>HOME</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
            </NavLink>
            <NavLink to='/Doctors'>
              <li className='py-1 '>DOCTORS</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
            </NavLink>
            <NavLink to='/About'>
              <li className='py-1 '>ABOUT</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
            </NavLink>
            <NavLink to='/Contacts'> 
              <li className='py-1 '>CONTACT</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
          {
            token 
            ?<div className='flex-items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full'src={assets.profile_pic} alt="" />
              <img  className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 roght-pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                <p  onClick={()=>navigate('/ Profile')}  className='hover:text-black cursor-pointer'>My Profile</p>
                <p  onClick={()=>navigate('/ Myappointments')} className='hover:text-black cursor-pointer'>My Appointment</p>
                <p  onClick={()=>settoken(false)}className='hover:text-black cursor-pointer'>Logout</p>
                </div> 
              </div> 
            </div>
            :<button  onClick={()=>navigate('/ Login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
          }
        </div>
    </div>
  )
}

export default Navbar