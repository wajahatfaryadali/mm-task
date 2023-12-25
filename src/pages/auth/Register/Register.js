import React, { useState } from 'react'
import RegisterForm from '../../../components/Molecules/RegisterForm/RegisterForm'
import { checkPasswordSame } from '../../../utils/helpers/checkPasswordSame';
import { toaster } from '../../../utils/helpers/toaster';
import { validatePassword } from '../../../utils/helpers/validatePassword';
import { base_url, constants } from '../../../store/constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { routeConstant } from '../../../routes/routeConstants';
import Loader from '../../../components/Atoms/Loader/Loader';

const Register = () => {

  const [loading, setLoading] = useState(false)
  const [isPasswordSame, setIsPasswordSame] = useState(true)
  const navigate = useNavigate();

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

  const dispatchSignUp = async () => {
    setLoading(true)
    try {
      const resp = await axios.post(base_url + constants.signUp, inputVal);
      // console.log('response check ******** ', resp)
      const msg = 'User created successfully';
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
      if (key !== 'country') {
        newErrorState[key] = inputVal[key].trim() === '';
      }
    });
    const isValid = checkPasswordSame(inputVal.password, inputVal.confirmPassword);
    const checkPassword = validatePassword(inputVal.password)
    if (!checkPassword) {
      const passwordMsg = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      toaster.show('error', passwordMsg, 5000)
    }

    setIsPasswordSame(isValid)
    setError(newErrorState);

    const isAnyFieldEmpty = Object.values(newErrorState).some(value => value);
    if (!isAnyFieldEmpty && isValid && checkPassword) {
      dispatchSignUp()
    }
  }

  return (
    <div>
      <RegisterForm
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
        isPasswordSame={isPasswordSame}
      />
      <Loader loading={loading} />
    </div >
  )
}

export default Register