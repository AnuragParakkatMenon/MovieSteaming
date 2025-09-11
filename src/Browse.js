import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from './utils/userSlice'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import PromoVideo from './PromoVideo'

const Browse = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
const handleClick = () =>{
   dispatch(removeUser)
   navigate("/")
} 
  return (
    <div className='bg-gray-900 w-screen h-screen'>
      <Header/>
      <button onClick={handleClick} className=' absolute top-0 right-0 m-6 z-50 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 '> Logout </button>
      <PromoVideo/>
    </div>
  )
}

export default Browse