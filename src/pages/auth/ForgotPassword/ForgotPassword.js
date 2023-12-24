import React, { useState } from 'react'
import ForgotPasswordForm from '../../../components/Molecules/ForgotPasswordForm/ForgotPasswordForm'

const ForgotPassword = () => {

  const [loading, setLoading] = useState(false)
  const [inputVal, setInputVal] = useState({
    email: '',
  })

  const [error, setError] = useState({
    email: false,
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
    <ForgotPasswordForm />
  )
}

export default ForgotPassword