import React from 'react'
import {Link}  from 'react-router-dom'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Admin = () => {
   const navigate = useNavigate()
   
  return (
    <div className='flex'>
        <div id='admin-sidebar' className='overflow-auto w-80 h-screen sticky top-0 left-0 bg-sky-950 p-6 text-white flex flex-col'>
            <p className='text-2xl font-bold'>Admin Dashboard</p>
            <ul className='my-6 flex-1'>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={ "groups"}>Groups</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"users"}>Users</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"shop"}>Shop</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"cards"}>Cards</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"create"}>Create</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"pick"}>Pick</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"menu"}>Menu</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"aboutus"}>About</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"homework"}>Homework</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"recycle"}>Rescycle</NavLink>
                </li>
            </ul>
            <button onClick={()=> navigate("/")} className='bg-red-500 py-2 rounded'>Log Out</button>
        </div>
        <div className='flex-1 min-h-screen '>
            <div className='w-full h-16 sticky top-0 left-0 bg-sky-950 flex items-center gap-8 justify-end pr-10'>
            <Link className="text-white text-[16px]"to={"/"}>Home</Link>
            <Link className="text-white text-[16px]"to={"/about"}>About</Link>
            <Link className="text-white text-[16px]"to={"/contact"}>Contact</Link>
            </div>
            <div className='p-6'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Admin