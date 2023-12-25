import React, { useState } from 'react'
import ForgotPasswordForm from '../../../components/Molecules/ForgotPasswordForm/ForgotPasswordForm'
import { toaster } from '../../../utils/helpers/toaster'
import Loader from '../../../components/Atoms/Loader/Loader'
import axios from 'axios'
import { base_url, constants } from '../../../store/constants'
import { useNavigate } from 'react-router-dom'
import { routeConstant } from '../../../routes/routeConstants'

const ForgotPassword = () => {

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const dispatchForgotPass = async () => {
    setLoading(true);
    try {
      const data = await axios.post(base_url + constants.forgotPassword, { email });
      toaster.show("success", data.data.message, 3000);
      navigate(routeConstant.verifyOtp, { state: { email } })
    } catch (error) {
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
    if (email) {
      dispatchForgotPass();
    } else {
      setError(true);
    }
  }

  return (
    <>
      <ForgotPasswordForm
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
        email={email}
        setEmail={setEmail}
      />
      <Loader loading={loading} />
    </>
  )
}

export default ForgotPassword