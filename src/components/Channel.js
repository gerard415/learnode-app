import React from 'react'

const Channel = ({img, profile_img, title, user, game}) => {
  return (
    <div className=' h-[330px] w-full '>
      <img src={img} alt='' style={{height:'200px'}} />
      <div className='flex pt-2'>
        <div className='pr-2'>
          <img src={profile_img} alt='' style={{height:'30px', weight:'30px'}}  className='rounded-full' />
        </div>
        <div>
          <p className='text-sm font-bold'>{title}</p>
          <p className='text-sm text-gray-500'>{user}</p>
          <p className='text-sm text-gray-500'>{game}</p>
          <span className='space-x-1' >
            <button className='bg-gray-200 text-[12px] rounded-lg w-[60px] font-semibold text-zinc-700 ' >English</button>
            <button className='bg-gray-200 text-[12px] rounded-lg w-[60px] font-semibold text-zinc-700 ' >Action</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Channel