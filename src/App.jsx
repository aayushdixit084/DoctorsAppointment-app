import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'
import Myappointments from './pages/Myappointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Doctors' element={<Doctors/>} />
        <Route path='/Doctors/:speciality' element={<Doctors/>} />
        <Route path='/ Login' element={<Login/>} />
        <Route path='/ About' element={<About/>} />
        <Route path='/ Contacts' element={<Contact/>} />
        <Route path='/ Profile' element={<Profile/>} />
        <Route path='/ Appointment:docId' element={<Appointments/>} />
        <Route path='/ Myappointments' element={<Myappointments/>} />
       </Routes>
        <Footer/>
    </div>
  )
}

export default App 