import React, {useState} from 'react'
import { Form1 } from './Form1'
import { Form2 } from './Form2'
import { Form3 } from './Form3'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = (props) => {

    

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(20).required(),
        token:yup.number().integer()
    });

    const emptyInput = {
        name: '',
        password: '',
        email:''
    };

    const {register, handleSubmit, formState:{errors}, watch} = useForm({resolver: yupResolver(schema), defaultValues: {...emptyInput}});
    const state = watch()

    const onSubmit = (data) => console.log(data)


    const [form, setForm] = useState(1)
    let view = null

    if(form === 1){
        view = <Form1 register={register} />
    }else if(form === 2){
        view = <Form2 register={register} />
    }else{
        view = <Form3 register={register} />
    }

    const handleBack = () => {
        if(form >= 3){
            setForm(2)
        }else{
            setForm(1)
        }
    }




    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='w-full h-96 flex flex-col pt-5 gap-5 px-5' >
                {view}

                {form >=  3 && <button disabled={isNaN(state.token) || !state.token} type='submit' className='w-full mt-5 h-10 rounded-md bg-learnode-green1 bg-opacity-10 font-semibold disabled:bg-gray-300 disabled:bg-opacity-9 disabled:text-gray-500 '>Submit</button>} 
                {form === 1 && <button disabled={!state.name || state.password.length < 8} type='button' className='w-full mt-5 h-10 rounded-md bg-learnode-green1 bg-opacity-10 font-semibold disabled:bg-gray-300 disabled:bg-opacity-9 disabled:text-gray-500' onClick={() => setForm(prevState => prevState +1)}>Next Step</button>}
                {form === 2 && <button disabled={!state.email} type='button' className='w-full mt-5 h-10 rounded-md bg-learnode-green1 bg-opacity-10 font-semibold disabled:bg-gray-300 disabled:bg-opacity-9 disabled:text-gray-500' onClick={() => setForm(prevState => prevState +1)}>Next Step</button>}

                {form > 1 ? 
                <button className=' sticky w-full h-10 rounded-md bg-gray-200 text-xs font-semibold text-green-400' onClick={() => handleBack()} >Back</button> : 
                <button className=' sticky w-full h-10 rounded-md bg-gray-200 text-xs font-semibold text-green-400 ' onClick={() => props.handleClick2()} >Already have an account? Login</button>
                }
            </div>
        </form>
        
    )
}
