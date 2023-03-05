import React from 'react'

export const Form3 = () => {
    return (
        <div>
            <div className='w-full flex flex-col gap-2 mb-4'>
                <div className='text-white font-semibold'>Field 1</div>
                <input className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 text-white bg-opacity-10 bg-white mb-16' />
            </div>
            <div className='text-green-400 text-xs hover:underline cursor-pointer mt-2 w-max'>Step 3 of 3</div>
        </div>
    )
}