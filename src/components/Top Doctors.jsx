import React, { useContext, useEffect, useState } from 'react'
import { doctors, specialityData } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
import { Appcontext } from '../Context/Appcontext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(Appcontext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium '>Our Best Doctors.</h1>
        <p className='sm:w-1/3 text-center text-sm'>Browse Through our best Doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate(`/Appointment/${item._id}`)} className='flex border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all' key={index}>
                    <img className='bg-blue-50v size-20' src={item.image} alt="" />
                    <div className='p-4'>
                     <div className='flex items-center gap-2 text-sm text-center text-green-700'> 
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-light'>{item.name}</p>
                    <p className='text-gray-600 text-sm '>{item.speciality}</p>
                </div>
            </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/Doctors');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default TopDoctors