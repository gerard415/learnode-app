import React from 'react'

export const Form3 = () => {
    return (
        <div>
            <div className='w-full flex flex-col gap-2 mb-4'>
                <div className='text-black font-semibold'>Token</div>
                <input className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 ring-1 ring-gray-400 text-black bg-opacity-10 bg-white' />
            </div>
            <div className='text-green-400 text-xs hover:underline cursor-pointer mt-2 w-max'>Step 3 of 3</div>
        </div>
    )
}