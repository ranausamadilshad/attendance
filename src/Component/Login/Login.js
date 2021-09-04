import React from 'react'
import LoginForm from './LoginForm'
import * as Yup from "yup";


const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string().required('Required')
})

const onSubmit = (values) => {
  console.log("lOGIN", values);
};

const Login = () => {
    return (
        <>
          <LoginForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>  
        </>
    )
}

export default Login
