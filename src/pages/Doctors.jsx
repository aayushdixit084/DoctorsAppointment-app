import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import App from '../App'
import { Appcontext } from '../Context/Appcontext'

const Doctors = () => {
  const {speciality} =useParams()
  const [filterDoc,setFilterDoc]=useState([])
  const {doctors} =useContext(Appcontext)
  const navigate =useNavigate()

  const applyFilter =() =>{
    if (speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
       applyFilter()
  },[doctors,speciality])
  return (

       <div>
          <p className='text-gray-600'>Browse Through Our Speciality Doctors.</p>
          <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> speciality ==='GenralPhysician'?navigate('/Doctors/'):navigate('/Doctors/GenralPhysician')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer '}  >GenralPhysician</p>
            <p onClick={()=> speciality ==='Gynecologists'?navigate('/Doctors/'):navigate('/Doctors/Gynecologists')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer '}  >Gynecologists</p>
            <p onClick={()=> speciality ==='Dermatologists'?navigate('/Doctors/'):navigate('/Doctors/Dermatologists')}className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer '}  >Dermatologists</p>
            <p onClick={()=> speciality ==='Pediatrician'?navigate('/Doctors/'):navigate('/Doctors/Pediatrician')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer '}  >Pedetricians</p>
            <p onClick={()=> speciality ==='Neurologists'?navigate('/Doctors/'):navigate('/Doctors/Neurologists')}className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer '}  >Neurologists</p>
            <p onClick={()=> speciality ==='Gastroenterologist'?navigate('/Doctors/'):navigate('/Doctors/Gastroenterologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer '}  >Gastroenterologist</p>
            <p onClick={()=> speciality ==='Dentists'?navigate('/Doctors/'):navigate('/Doctors/Dentists')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer '}  >Dentists</p>
          </div>
          <div className='w-full grid grid-cols-3 size-30 gap-4 gap-y-6 '>
            {
              filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/Appointment/${item._id}`)} className='flex border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all' key={index}>
                    <img className=' size-20  bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                     <div className='flex items-center gap-2 text-sm text-center text-green-700'> 
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm '>{item.speciality}</p>
                </div>
            </div>
            ))
            }
          </div>
          </div>
    </div>
  )
}

export default Doctors