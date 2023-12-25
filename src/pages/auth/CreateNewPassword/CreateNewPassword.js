import React, { useEffect, useState } from 'react'
import CreateNewPasswordForm from '../../../components/Molecules/CreateNewPasswordForm/CreateNewPasswordForm'
import Loader from '../../../components/Atoms/Loader/Loader'
import { checkPasswordSame } from '../../../utils/helpers/checkPasswordSame'
import { validatePassword } from '../../../utils/helpers/validatePassword'
import { toaster } from '../../../utils/helpers/toaster'
import { base_url, constants } from '../../../store/constants'
import { routeConstant } from '../../../routes/routeConstants'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const CreateNewPassword = () => {
  const [loading, setLoading] = useState(false)
  const [isPasswordSame, setIsPasswordSame] = useState(true)
  const [token, setToken] = useState(true)
  const location = useLocation();
  const navigate = useNavigate()

  const [inputVal, setInputVal] = useState({
    password: '',
    confirmPassword: '',
  })

  useEffect(() => {
    setToken(location.state?.token.data || '');
    return () => {
      setToken('');
    };
  }, [location.state?.token.data]);

  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
  })

  const createNewPassApi = async () => {
    setLoading(true)
    try {
      const resp = await axios.patch(base_url + constants.resetPassword,
        inputVal,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log('resprespresp ********* ', resp)
      const msg = "Password Updated Successfully!"
      toaster.show("success", msg, 3000)
      navigate(routeConstant.login);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const msg = error.response.data.message;
        toaster.show("error", msg, 3000)
        return;
      }
      return toaster.show("error", error, 3000);
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrorState = {};
    Object.keys(inputVal).forEach(key => {
      newErrorState[key] = inputVal[key].trim() === '';
    });
    const isValid = checkPasswordSame(inputVal.password, inputVal.confirmPassword);
    const checkPassword = validatePassword(inputVal.password)
    setError(newErrorState);
    setIsPasswordSame(isValid)
    if (!checkPassword) {
      const passwordMsg = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      toaster.show('error', passwordMsg, 5000)
    }
    const isAnyFieldEmpty = Object.values(newErrorState).some(value => value);
    if (!isAnyFieldEmpty && isValid && checkPassword) {
      createNewPassApi();
    }
  }
  return (
    <>
      <CreateNewPasswordForm
        error={error}
        setError={setError}
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSubmit={handleSubmit}
        isPasswordSame={isPasswordSame}
      />
      <Loader loading={loading} />
    </>
  )
}

export default CreateNewPassword