import React, { useState } from 'react'
import LoginForm from '../../../components/Molecules/LoginForm/LoginForm'
import Loader from '../../../components/Atoms/Loader/Loader'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toaster } from '../../../utils/helpers/toaster'
import { routeConstant } from '../../../routes/routeConstants'
import axios from 'axios'
import { base_url, constants } from '../../../store/constants'
import { loginSuccess } from '../../../store/slices/authSlice/authSlice'

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dispatchLogin = async () => {
    setLoading(true);
    try {
      const data = await axios.post(base_url + constants.login, inputVal);
      // console.log('*********** ******* data ********** ', data)
      dispatch(loginSuccess(data.data))
      toaster.show("success", "Login Successfully!", 3000);
      navigate(routeConstant.dashboard)
    } catch (error) {
      // console.log('*********** ******* error ********** ', error.response.data.message)
      if (error.response && error.response.data && error.response.data.message) {
        const msg = error.response.data.message;
        toaster.show("error", msg, 3000)
        return;
      }
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrorState = {};

    Object.keys(inputVal).forEach(key => {
      newErrorState[key] = inputVal[key].trim() === '';
    });

    setError(newErrorState);

    const isAnyFieldEmpty = Object.values(newErrorState).some(value => value);
    if (!isAnyFieldEmpty) {
      // console.log('****** data chekc **** ', inputVal)
      dispatchLogin();
    }
  }

  return (
    <>
      <LoginForm
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
        inputVal={inputVal}
        setInputVal={setInputVal}
      />
      <Loader loading={loading} />
    </>
  )
}

export default Login