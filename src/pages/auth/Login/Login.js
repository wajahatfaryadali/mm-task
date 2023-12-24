import React, { useState } from 'react'
import LoginForm from '../../../components/Molecules/LoginForm/LoginForm'


const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  })


  return (
    <LoginForm
    />
  )
}

export default Login