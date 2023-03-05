import React from 'react'

export default function View(props) {
  return (
    <div className=' h-[330px] w-full text-white flex flex-col gap-4' >
        <img src={props.img} alt='' className='shadow-pop-bl' style={{height:''}} />
        <div>
            <p className='font-bold text-sm'>{props.title}</p>
            <p className='text-xs text-gray-400 py-[2px]'>{props.viewers}</p>
            <div className='flex'>
            <div>
            <button className='bg-gray-200 text-[12px] rounded-lg w-[60px] font-semibold text-zinc-700 ' >{props.tag1}</button>
            </div>
            </div>
        </div>
    </div>
  )
}
