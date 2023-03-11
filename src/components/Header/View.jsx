import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import Logo1 from '../../assets/Logo1.PNG'
import {AiOutlineUser} from 'react-icons/ai'
import { Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Switch } from 'antd';
import {LoginForm} from '../LoginForm'
import {Form} from '../SignupForms'



export default function View(props) {
    const [theme, settheme] = useState("light")

    useEffect(() => {
        let theme = document.querySelector('body').classList[0]
        // console.log(theme)
        if(theme === "theme-light"){
            settheme("light")
        }else{
            settheme("dark")
        }
    }, [])
    

    const handleClick1 = (a) => {
        props.setLoginModalOpen(false)
        props.setSignUpModalOpen(true)
    }

    const handleClick2 = (a) => {
        props.setSignUpModalOpen(false)
        props.setLoginModalOpen(true)
    }

    const onCancelLoginModal = () => {
        props.setLoginModalOpen(false)
    }


    if(!props.signUpModalOpen){
        props.setForm(1)
    }

    const changeTheme = () => {
        let theme = document.querySelector('body').classList[0]

        console.log(theme)
        if(theme === "theme-light"){
            settheme("light")
            document.querySelector('body').classList.remove(theme)
            document.querySelector('body').classList.add("theme-dark")
        }else{
            settheme("theme-dark")
            document.querySelector('body').classList.remove(theme)
            document.querySelector('body').classList.add("theme-light")
        }
    }



    const items = [
    {
      label: <div className='flex w-40 h-8 gap-10 items-center'>
        Theme

        <Switch
            autoFocus={true}
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
        />
        </div>,
      key: '0',
    },
    {
      label: <div onClick={handleClick1} className='h-8 flex items-center'>Login</div>,
      key: '1',
    },
  ];


  return (
    <>
        <div className='sticky w-full grid grid-cols-12 top-0 pr-5 bg-theme-light shadow h-[50px] z-50' >
        <div className='flex col-span-3 head-remain-text space-x-5 text-xl items-center' >
            <img src={Logo} alt="" className='h-[50px]'/> earnode
        </div>
        <div className='flex col-span-6 gap-2 items-center justify-center' >
            <input type="text" placeholder='Search' className='bg-gray-100 ring-1 ring-gray-200 search-input ring-opacity-50  focus:ring-green-400 transition-all duration-300 text-black bg-opacity-20 dark:bg-blend-lighten text-sm outline-none rounded w-[350px] h-[35px] pl-4  mr-[1px]' />
            <button className=' bg-gray-100 w-9 rounded h-[35px] text-black ring-1 focus:ring-2 ring-gray-100 flex justify-center items-center' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
        <div className='space-x-3 flex text-sm font-semibold col-span-3 justify-end items-center' >
            <button onClick={() => props.setLoginModalOpen(true)} className=' text-black bg-gray-100 rounded font-semibold  h-[30px] w-[65px]' >Log in</button>
            <button onClick={() => props.setSignUpModalOpen(true)}  className='bg-learnode-green1 hover:bg-opacity-100 bg-opacity-80 text-white rounded font-semibold  h-[30px] w-[75px] ' >Sign up</button>
            
            <Dropdown menu={{ items }} trigger={['click']}>
                <a href='1' onClick={(e) => e.preventDefault()}>
                <Space>
                    <AiOutlineUser size={'20px'} className="avatar-icon cursor-pointer" />
                </Space>
                </a>
            </Dropdown>
            {/* <button className='avatar-icon'  ><AiOutlineUser size={'20px'} /></button> */}
        </div>
        </div>

        <Modal
            className="lgsn"
            title={
                <div className="w-full text-3xl px-4 modal-content-header flex justify-between text-black  items-start">
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
            // bodyStyle={{backgroundColor: "#14141", background: "#14141"}}
            centered
            footer={<div></div>}
            open={props.loginModalOpen}
            onOk={() => props.setLoginModalOpen(false)}
            onCancel={() => props.setLoginModalOpen(false)}
            >
                <LoginForm handleClick1={handleClick1} />
        </Modal>

        <Modal
            title={
                <div className="w-full text-3xl px-4 modal-content-header flex justify-between text-black  items-start">
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
                    <Form handleClick2={handleClick2} />
                </div>
        </Modal>


        <div className='w-screen fixed grid grid-cols-12 h-16 items-center bg-learnode-green2 z-40 bottom-0'>
          <div className='col-span-1 flex items-center h-full relative'><img src={Logo1} alt="" className='w-96 rotate-45 mt-2 absolute'/></div>
          <div className='text-lg font-middle flex justify-start items-center text-white col-span-10 h-full'><b className='mr-2'>Join the Learnode Community today! </b> {" "}Get the best experiene without Ads in videos.</div>
          <div className='col-span-1 h-full flex justify-center pr-10 items-center'>
          <button onClick={() => props.setSignUpModalOpen(true)}  className='bg-[#fff] text-[#111] rounded font-semibold text-xs  h-[30px] w-[75px] ' >Sign up </button>
          </div>
        </div>
    </>
  )
}
