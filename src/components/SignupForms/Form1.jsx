import React from 'react'

export const Form1 = (props) => {
    return (
        <div>
            <div className='w-full flex flex-col gap-2'>
                <div className='text-white font-semibold'>Username</div>
                <input onChange={props.handleChange} onBlur={props.handleBlur} className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 text-white bg-opacity-10 bg-white' />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <div className='text-white font-semibold'>Password</div>
                <input value={props.values.password} onChange={props.handleChange} onBlur={props.handleBlur} type="password" className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 text-white bg-opacity-10 bg-white' />
            </div>
            <div className='text-green-400 text-xs hover:underline cursor-pointer mt-2 w-max'>Step 1 of 3</div>
        </div>
    )
}
