import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Appcontext } from '../Context/Appcontext'

const Appointments = () => {
  const {docId}= useParams()
  const {doctors}= useContext(Appcontext)
  const [docInfo,setdocInfo] = useState(null)
  const fetchdocInfo = async ()=>{
    const docInfo = doctors.find(doc =>doc._Id ===docId)
     setdocInfo (docInfo)
  }
  useEffect(()=>{
   fetchdocInfo()
  },[doctors,docId])
  return (
    <div>

    </div>
    
  )
}

export default Appointments