import React from 'react'
import Logo from '../../assets/logo.png'
import {AiOutlineUser} from 'react-icons/ai'
import { Modal } from 'antd';
import {Form1, Form2, Form3} from '../SignupForms'

export default function View(props) {
    const handleClick1 = (a) => {
        props.setLoginModalOpen(false)
        props.setSignUpModalOpen(true)
    }

    const handleClick2 = (a) => {
        props.setSignUpModalOpen(false)
        props.setLoginModalOpen(true)
    }

    const handleBack = () => {
        if(props.form >= 3){
            props.setForm(2)
        }else{
            props.setForm(1)
        }
    }

    let view = null

    if(props.form === 1){
        view = <Form1 handleChange={props.handleChange} values={props.values} handleBlur={props.handleBlur} />
    }else if(props.form === 2){
        view = <Form2/>
    }else{
        view = <Form3/>
    }

    if(!props.signUpModalOpen){
        props.setForm(1)
    }

  return (
    <>
        <div className='sticky w-full grid grid-cols-12 top-0 pr-5 bg-theme-light shadow h-[50px] z-10' >
        <div className='flex col-span-3 text-white space-x-5 items-center' >
            <img src={Logo} alt="" className='w-14'/>
            <button className=' font-semibold text-learnode-link text-sm' >Browse</button>
            <button className=' font-semibold text-learnode-link  text-sm' >Category</button>
            <button className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </button>
        </div>
        <div className='flex col-span-6 items-center justify-center' >
            <input type="text" placeholder='Search' className='bg-gray-100 text-white bg-opacity-20 dark:bg-blend-lighten text-sm outline-none rounded-l w-[350px] h-[35px] pl-4  mr-[1px]' />
            <button className=' bg-gray-100 bg-opacity-20 w-9 rounded-r h-[35px] text-white flex justify-center items-center' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
        <div className='space-x-3 flex text-sm font-semibold col-span-3 justify-end items-center' >
            <button onClick={() => props.setLoginModalOpen(true)} className=' text-black bg-gray-100 rounded font-semibold  h-[30px] w-[65px]' >Log in</button>
            <button onClick={() => props.setSignUpModalOpen(true)}  className='bg-learnode-green1 hover:bg-opacity-50 text-white rounded font-semibold  h-[30px] w-[75px] ' >Sign up</button>
            <button className='text-white'  ><AiOutlineUser size={'20px'} /></button>
        </div>
        </div>

        <Modal
            title={
                <div className="w-full text-3xl px-4 bg-theme-darker flex justify-between text-white  items-start">
                    <div className='flex flex-col justify-center items-center w-full'>
                        <img src={Logo} alt="" className='w-20 inline-block'/>
                        Log in to Learnode
                    </div>
                
                    <div
                    onClick={() => props.setLoginModalOpen(false)}
                    className="w-fit p-2 h-fit cursor-pointer rounded-md hover:text-green-400 bg-gray-50 bg-opacity-10 transition-all duration-150"
                    >
                    <svg
                        className="w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    </div>
                </div>
            }
            closeIcon={<div></div>}
            bodyStyle={{backgroundColor: "#14141", background: "#14141"}}
            centered
            footer={<div></div>}
            open={props.loginModalOpen}
            onOk={() => props.setLoginModalOpen(false)}
            onCancel={() => props.setLoginModalOpen(false)}
            >
                <div className='w-full h-96 flex flex-col pt-5 gap-5 px-5'>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='text-white font-semibold'>Username</div>
                        <input className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 text-white bg-opacity-10 bg-white' />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <div className='text-white font-semibold'>Password</div>
                        <input type="password" className='w-full focus:ring-green-400 focus:ring-2 h-10 rounded-md outline-none px-5 text-white bg-opacity-10 bg-white' />
                        <div className='text-green-400 text-xs hover:underline cursor-pointer mt-2 w-max'>Trouble signing in?</div>
                    </div>

                    <button className='w-full mt-5 h-10 rounded-md bg-learnode-green1 bg-opacity-10 font-semibold'>
                        Log in
                    </button>


                    <button className='w-full h-10 rounded-md bg-gray-50 bg-opacity-5 text-xs text-green-400' onClick={() => handleClick1()} >
                        Don't have an account? Sign up
                    </button>
                </div>
        </Modal>

        <Modal
            title={
                <div className="w-full text-3xl px-4 bg-theme-darker flex justify-between text-white  items-start">
                    <div className='flex flex-col justify-center items-center w-full'>
                        <img src={Logo} alt="" className='w-20 inline-block'/>
                        Join Learnode Today
                    </div>
                
                    <div
                    onClick={() => props.setSignUpModalOpen(false)}
                    className="w-fit p-2 h-fit cursor-pointer rounded-md hover:text-green-400 bg-gray-50 bg-opacity-10 transition-all duration-150"
                    >
                    <svg
                        className="w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    </div>
                </div>
            }
            closeIcon={<div></div>}
            bodyStyle={{backgroundColor: "#14141", background: "#14141"}}
            centered
            footer={<div></div>}
            open={props.signUpModalOpen}
            onOk={() => props.setSignUpModalOpen(false)}
            onCancel={() => props.setSignUpModalOpen(false)}
            >
                <div className='w-full h-96 flex flex-col pt-5 gap-5 px-5'>
                    {view}
                    
                    {props.form > 2 ? 
                    <button className='w-full mt-5 h-10 rounded-md bg-learnode-green1 bg-opacity-10 font-semibold' onClick={() => props.setForm(box => box +1)}>Submit</button> : 
                    <button disabled={props.values.username === '' || props.values.password === '' } className='w-full mt-5 h-10 rounded-md bg-learnode-green1 bg-opacity-10 font-semibold disabled:bg-gray-300 disabled:bg-opacity-9 disabled:text-gray-500' onClick={() => props.setForm(box => box +1)}>Next Step</button>
                    }

                    {props.form > 1 ? 
                    <button className='w-full h-10 rounded-md bg-gray-50 bg-opacity-5 text-xs text-green-400 ' onClick={() => handleBack()} >Back</button> : 
                    <button className='w-full h-10 rounded-md bg-gray-50 bg-opacity-5 text-xs text-green-400 ' onClick={() => handleClick2()} >Already have an account? Login</button>
                    }
                </div>
        </Modal>


      {/* <Modal title="Basic Modal" open={true} onOk={() => {}} onCancel={() => }>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
    </>
  )
}
