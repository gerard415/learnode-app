import React from 'react'
import Logo from '../assets/logo.png'
import {AiOutlineMore, AiOutlineUser} from 'react-icons/ai'
import {GoSearch} from 'react-icons/go'

const Navbar = () => {
  return (
    <div className=' sticky w-full top-0 bg-white shadow h-[50px] z-10 flex p-3 justify-between items-center ' >
      <div className='flex space-x-5 ' >
        <img src={Logo} alt="" style={{width:'25px', height:'25px'}} />
        <button className=' font-semibold  text-[15px] mb-3' >Browse</button>
        <button><AiOutlineMore size={'30px'} /></button>
      </div>
      <div className='flex ' >
        <input type="text" placeholder='Search' className='bg-gray-200 rounded-l w-[350px] h-[35px] pl-4  mr-[2px]' />
        <button className=' bg-gray-100 w-9 rounded-r text-center pl-2  ' ><GoSearch size={'20px'} /></button>
      </div>
      <div className='space-x-3 flex ' >
        <button className=' text-black bg-gray-100 rounded font-semibold text-[13px] h-[30px] w-[65px]' >Log in</button>
        <button className='bg-[#815fc0] text-white rounded font-semibold text-[13px] h-[30px] w-[75px] ' >Sign up</button>
        <button  ><AiOutlineUser size={'20px'} /></button>
      </div>
      
    </div>
  )
}

export default Navbar