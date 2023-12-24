import React, { useState } from 'react'
import LoginForm from '../../../components/Molecules/LoginForm/LoginForm'


const Login = () => {

  const [loading, setLoading] = useState(false)
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState({
    email: false,
    password: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrorState = {};
    Object.keys(inputVal).forEach(key => {
      newErrorState[key] = inputVal[key].trim() === '';
    });
    setError(newErrorState);

    const isAnyFieldEmpty = Object.values(newErrorState).some(value => value);
    if (!isAnyFieldEmpty) {
      // alert("good to go")
    }
  }

  return (
    <LoginForm
    />
  )
}

export default Login