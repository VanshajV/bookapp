import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
export default function Navbar() {
  const[show,setShow]=useState(true);
  
  function sho(){
    setShow(!show);
    console.log(show);
  }

  return (
    
    <div className=' rounded-md my-1  mx-2 text-white px-6 h-16 bg-red-900   flex items-center justify-between shadow-2xl'>
      
    <div className='flex items-center '>
    <img onClick={sho} className="md:hidden cursor-pointer w-6 h-7 mr-5" src='icons8-menu-50 (1).png' alt=""/>
      
    <img  className="w-10" src="icon.png" alt="" />

    </div>
    <div className='hidden md:block'> 
        <ul className='flex space-x-7 text-lg'>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/Books'>Books</Link></li>
            <li>Community</li>
            <li><Link to='/About'>About Us</Link></li>
        </ul>
    </div>
    <div id="show" className={`md:hidden   opacity-95 fixed flex justify-center   rounded-b-xl items-center  w-[30vw] h-[35vh] border-white bg-red-900 ${show?' left-2 -top-[410px]':' left-2 top-14'}`}>

    <ul id="" className='text-xl space-y-8'> 
    <li><Link to='/Home'>Home</Link></li>
    <li><Link to='/Books'>Books</Link></li>
          <li>Community</li>
          <li><Link to='/About'>About Us</Link></li>
    </ul>
    </div>

    
    <div className='  font-bold space-x-3'>
        <Link  to="/login" className="bg-gray-50 bg-opacity-30 hover:bg-opacity-40 rounded-sm px-3 py-1 " href="">Login</Link>
        <Link to="/Signup" className="bg-gray-50 bg-opacity-30 hover:bg-opacity-40 rounded-sm  px-3  py-1" href="">SignUp</Link>
    </div>
    

    </div>
   
  )
}
