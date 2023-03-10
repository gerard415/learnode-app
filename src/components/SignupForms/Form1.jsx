import React from 'react'

export const Form1 = (props) => {
    return (
        <div className=''>
            <div className='w-full flex flex-col gap-2 mb-4'>
                <div className='text-black font-semibold'>Username</div>
                <input className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 bg-opacity-10 ring-1 ring-gray-400 text-black' />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <div className='text-black font-semibold'>Password</div>
                <input type="password" className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 bg-opacity-10 ring-1 ring-gray-400 text-black' />
            </div>
            <div className='text-green-400 text-xs hover:underline cursor-pointer mt-2 w-max'>Step 1 of 3</div>
        </div>


    )
}
