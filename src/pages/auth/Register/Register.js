import React, { useState } from 'react'
import RegisterForm from '../../../components/Molecules/RegisterForm/RegisterForm'

const Register = () => {

  const [loading, setLoading] = useState(false)
  const [inputVal, setInputVal] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
  })

  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrorState = {};
    Object.keys(inputVal).forEach(key => {
      if (key !== 'country') {
        newErrorState[key] = inputVal[key].trim() === '';
      }
    });
    setError(newErrorState);

    const isAnyFieldEmpty = Object.values(newErrorState).some(value => value);
    if (!isAnyFieldEmpty) {
      alert("good to go")
    }
  }

  return (
    <div>
      <RegisterForm
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSubmit={handleSubmit}
        error={error}
        loading={loading}
        setError={setError}
      />
    </div >
  )
}

export default Register