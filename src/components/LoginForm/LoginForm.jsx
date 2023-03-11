import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const LoginForm = (props) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        password: yup.string().required(),
    });

    const {register, handleSubmit, watch, reset, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            password: ''
          }
    });
    const state = watch()
    const onSubmit = (data) => console.log(data)

    

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='w-full h-96 flex flex-col pt-5 gap-5 px-5'>
                <div className='w-full flex flex-col gap-2'>
                    <div className='text-black font-semibold'>Username</div>
                    <input {...register("name")} className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 ring-1 ring-gray-400 text-black bg-opacity-10 bg-white' />
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <div className='text-black font-semibold'>Password</div>
                    <input {...register("password")}  type="password" className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 ring-1 ring-gray-400 text-black bg-opacity-10 bg-white' />
                    <div className='text-green-400 text-xs hover:underline cursor-pointer mt-2 w-max'>Trouble signing in?</div>
                </div>

                <button disabled={!state.name || !state.password} type='submit' className='w-full mt-5 h-10 rounded-md bg-learnode-green1 bg-opacity-10 font-semibold disabled:bg-gray-300 disabled:bg-opacity-9 disabled:text-gray-500 '>
                    Log in
                </button>

                <button className='w-full h-10 rounded-md bg-gray-200 text-xs font-semibold text-green-400' onClick={() => props.handleClick1()} >
                    Don't have an account? Sign up
                </button>
            </div>
        </form>                
    )
}
