import React, { useEffect, useState } from 'react'
import OtpForm from '../../../components/Molecules/OtpForm/OtpForm'
import { useLocation, useNavigate } from 'react-router-dom';
import { toaster } from '../../../utils/helpers/toaster';
import Loader from '../../../components/Atoms/Loader/Loader';
import axios from 'axios';
import { base_url, constants } from '../../../store/constants';
import { routeConstant } from '../../../routes/routeConstants';

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(location.state?.email || '');

  useEffect(() => {
    setEmail(location.state?.email || '');
    return () => {
      setEmail('');
    };
  }, [location.state?.email]);

  const verifyCodeApi = async () => {
    setLoading(true);
    try {
      const data = await axios.post(base_url + constants.verifyCode, { email, code: otp });
      toaster.show("success", data.data.message, 3000);
      // console.log('authTokenauthTokenauthTokenauthToken *******0 ', data.data)
      navigate(routeConstant.createNewPassword, { state: { token: data.data } })
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
    if (!otp) {
      toaster.show('warning', "Please Enter OTP!", 3000);
    } else if (otp.length < 6) {
      toaster.show('warning', "Please Enter Complete Code!", 3000);
    }
    else {
      verifyCodeApi();
    }
  }
  return (
    <>
      <OtpForm
        otp={otp}
        setOtp={setOtp}
        handleSubmit={handleSubmit}
      />
      <Loader loading={loading} />
    </>
  )
}

export default Otp