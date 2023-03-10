import React from 'react'

export const Form2 = () => {
    return (
        <div >
            <div className='w-full flex flex-col gap-2 mb-4 '>
                <div className=' font-semibold'>Email</div>
                <input type="email" className='w-full ring-1 ring-gray-400  focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 bg-opacity-10 bg-white' />
            </div>
            <div className='text-green-400 text-xs hover:underline cursor-pointer mt-2 w-max'>Step 2 of 3</div>
        </div>
    )
}