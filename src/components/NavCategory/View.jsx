import React from 'react'

export default function View(props) {
  return (
    <div className='w-full h-14 flex hide-scroll-x  sticky top-12 bg-white z-40 overflow-x-scroll gap-5 items-center'>
      {props.categories.map((category) => (
        <div onClick={() => {}} className='h-max cursor-pointer bg-gray-100 w-max text-black rounded-md px-3 py-1 text-sm font-semibold'>{category}</div>
      ))}
    </div>
  )
}
