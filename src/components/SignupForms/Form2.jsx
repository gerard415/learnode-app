import React from 'react'

export const Form2 = (props) => {
    return (
        <div >
            <div className='w-full flex flex-col gap-2 mb-4 '>
                <div className='text-black font-semibold'>Email</div>
                <input {...props.register("email")} className='w-full ring-1 ring-gray-400 text-black focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 bg-opacity-10 bg-white' />
            </div>
            <div className='text-gray-400' >You'll need to verify this email first</div>
            <div className='text-green-400 text-xs hover:underline cursor-pointer mt-16 w-max'>Step 2 of 3</div>
        </div>
    )
}