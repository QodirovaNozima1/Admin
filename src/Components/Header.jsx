import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";


const Header = () => {
  return (
    <div className="container">
      <div className='flex  mx-auto h-20 items-center gap-8 '> 
      <Link to={"/"} className='text-2xl font-medium flex-1'>Logoo</Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/admin/groups"} className='flex gap-1.5 items-center'>
      <FaRegUserCircle/>
      Admin
      </Link>
    </div>
    </div>
    
  )
}

export default Header