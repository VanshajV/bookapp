import React from 'react'
import Fea from './Fea'
import Navbar from './Navbar'
export default function About() {
  return (
    <div>
     <Navbar></Navbar>
     
      <div className='bg-gray-200 mx-2 my-1 rounded-md '>
      <div><p className='text-center text-4xl'>About Us</p></div>
      <Fea></Fea>
      </div>
        
    </div>
  )
}
