import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../Atoms/InputField/InputField';
import OrDivider from '../../Atoms/OrDivider/OrDivider';

import { text } from '../../../utils/constants/strings';
import { Link } from 'react-router-dom';
import { routeConstant } from '../../../routes/routeConstants';

function LoginForm(props) {
  const {
    width = '358px',
    inputVal,
    setInputVal,
    handleSubmit,
    error,
    setError,
  } = props;

  // console.log('**** error *** ', error)
  const handleChange = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.id]: e.target.value
    })
    setError({
      ...error,
      [e.target.id]: false
    })
  }

  return (
    <Box width={width} component={'form'} textAlign={'center'} onSubmit={handleSubmit}>
      <Typography variant='h1' textTransform={'capitalize'} mb={'64px'}>
        Welcome Back
      </Typography>
      <InputField
        type={text.email}
        placeholder={'Email'}
        required
        value={inputVal.email}
        error={error.email}
        onChange={handleChange}
      />
      <InputField
        type={text.password}
        placeholder={'Password'}
        autoComplete={'password'}
        required
        value={inputVal.password}
        error={error.password}
        onChange={handleChange}
      />
      <Link to={routeConstant.forgotPassword} className='text-deco-none'>
        <Typography variant='subtitle1' textTransform={'capitalize'} sx={{ color: 'primary.light', cursor: 'pointer' }} textAlign={'right'}>
          Forgot Password?
        </Typography>
      </Link>
      <Button variant='contained' fullWidth sx={{ mt: '32px' }} type='submit'>
        Log in
      </Button>
      <OrDivider />
      <Box>
        <Typography color={'primary.textGray'}>
          Have no account yet? {' '}
          <Link to={routeConstant.register} className='text-deco-none'>
            <Typography component={'span'} color={'primary.light'} sx={{ cursor: 'pointer' }} fontWeight={600}>
              Register
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default LoginForm