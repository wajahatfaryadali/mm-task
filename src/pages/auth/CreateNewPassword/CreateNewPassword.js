import React, { useState } from 'react'
import CreateNewPasswordForm from '../../../components/Molecules/CreateNewPasswordForm/CreateNewPasswordForm'

const CreateNewPassword = () => {
  const [loading, setLoading] = useState(false)
  const [inputVal, setInputVal] = useState({
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
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
    <CreateNewPasswordForm />
  )
}

export default CreateNewPassword