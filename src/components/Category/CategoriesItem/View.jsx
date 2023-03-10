import React from 'react'

export default function View(props) {
  return (
    <div className=' h-[330px] w-full category-item flex flex-col gap-4' >
        <img src={props.img} alt='' className=' rounded-xl' style={{height:''}} />
        <div>
            <p className='font-bold cat-item text-sm'>{props.title}</p>
            <p className='text-xs text-gray-400 py-[2px]'>{props.viewers}</p>
        </div>
    </div>
  )
}
