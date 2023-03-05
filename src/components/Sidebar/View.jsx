import React from 'react'
import { BsDot } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function View(props) {
  return (
    <div className='fixed flex flex-col gap-8 pt-5 w-[240px] h-screen pb-32 hide-scroll bg-theme-light overflow-y-scroll' >

<div className='border-b border-opacity-20 pb-8 flex flex-col gap-1 border-b-gray-400'>
        <NavLink to='/' className={({isActive}) => isActive ? " grid grid-cols-12 py-2  w-full px-3 transition-all duration-300  hover:cursor-pointer bg-green-500/50" : " grid grid-cols-12 py-2  w-full px-3 transition-all duration-300  hover:cursor-pointer hover:bg-white hover:bg-opacity-10"}>
          <div className='col-span-3 h-full flex justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-2 bg-green-400 text-green-500 w-9 rounded-full bg-opacity-30 flex justify-center items-center">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <div className='h-full flex items-center justify-between col-span-9'>
            <p className='font-semibold text-white text-sm' >Home</p>
          </div>
        </NavLink>

        <NavLink to='/subscriptions' className={({isActive}) => isActive ? " grid grid-cols-12 py-2  w-full px-3 transition-all duration-300  hover:cursor-pointer bg-green-500/50" : " grid grid-cols-12 py-2  w-full px-3 transition-all duration-300  hover:cursor-pointer hover:bg-white hover:bg-opacity-10"}>
          <div className='col-span-3 h-full flex justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="p-2 bg-green-400 text-green-500 w-9 rounded-full bg-opacity-30 flex justify-center items-center">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <div className='h-full flex items-center justify-between col-span-9'>
            <p className='font-semibold text-white text-sm' >Subscriptions</p>
          </div>
        </NavLink>

        <NavLink to='/posts' className={({isActive}) => isActive ? " grid grid-cols-12 py-2  w-full px-3 transition-all duration-300  hover:cursor-pointer bg-green-500/50" : " grid grid-cols-12 py-2  w-full px-3 transition-all duration-300  hover:cursor-pointer hover:bg-white hover:bg-opacity-10"}>
          <div className='col-span-3 h-full flex justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="p-2 bg-green-400 text-green-500 w-9 rounded-full bg-opacity-30 flex justify-center items-center">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>
          </div>
          <div className='h-full flex items-center justify-between col-span-9'>
            <p className='font-semibold text-white text-sm' >Posts</p>
          </div>
        </NavLink>
      </div>





      <div className='border-b border-opacity-20 pb-8 flex flex-col gap-1 border-b-gray-400'>
        <div className='grid grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer '>
          <div className='col-span-3 h-full flex justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-2 bg-green-400 text-green-500 w-9 rounded-full bg-opacity-30 flex justify-center items-center">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
          </div>
          <div className='h-full flex items-center justify-between col-span-9'>
            <p className='font-semibold text-white text-sm' >Library</p>
          </div>
        </div>

        <div className='grid grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer '>
          <div className='col-span-3 h-full flex justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-2 bg-green-400 text-green-500 w-9 rounded-full bg-opacity-30 flex justify-center items-center">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
          </div>
          <div className='h-full flex items-center justify-between col-span-9'>
            <p className='font-semibold text-white text-sm' >History</p>
          </div>
        </div>

        <div className='grid grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer '>
          <div className='col-span-3 h-full flex justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-2 bg-green-400 text-green-500 w-9 rounded-full bg-opacity-30 flex justify-center items-center">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className='h-full flex items-center justify-between col-span-9'>
            <p className='font-semibold text-white text-sm' >Watch later</p>
          </div>
        </div>


        <div className='grid grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer '>
          <div className='col-span-3 h-full flex justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-2 bg-green-400 text-green-500 w-9 rounded-full bg-opacity-30 flex justify-center items-center">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
          </div>
          <div className='h-full flex items-center justify-between col-span-9'>
            <p className='font-semibold text-white text-sm' >Liked</p>
          </div>
        </div>

        <div className='grid grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer '>
          <div className='col-span-3 h-full flex justify-start items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-2 bg-green-400 text-green-500 w-9 rounded-full bg-opacity-30 flex justify-center items-center">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
          </div>
          <div className='h-full flex items-center justify-between col-span-9'>
            <p className='font-semibold text-white text-sm' >Your videos</p>
          </div>
        </div>
      </div>


      <div className='flex flex-col gap-5'>
        <div className='px-3'>
          <p className='flex uppercase font-extrabold text-[13px] text-white '>
            Popular
          </p>
        </div>
        <div>
          {props.rec_channels.map((item, index) => (
            <div key={index} className='grid grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer '>
              <div className='col-span-3 h-full flex justify-start items-center'>
                <img src={item.avatar} alt='' style={{width:'35px', height:'35px'}} className='rounded-full bg-white '   />
              </div>
              <div className='h-full flex items-center justify-between col-span-9'>
                <p className='font-semibold text-white text-sm' >{item.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
