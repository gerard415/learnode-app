import React, {useState} from 'react'
import View from './View'
import { useFormik } from 'formik';

export const Header = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false)
    const [form, setForm] = useState(1)

    const {values, handleBlur, handleChange} = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: "",
            DOB: ""
        }
    })

    return (
        <View
            setLoginModalOpen = {(a) => setLoginModalOpen(a)}
            loginModalOpen={loginModalOpen}

            signUpModalOpen = {signUpModalOpen}
            setSignUpModalOpen = {(a) => setSignUpModalOpen(a)}

            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}

            form={form}
            setForm = {setForm}
        />
    )
}
