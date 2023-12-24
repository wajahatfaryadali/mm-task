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
  } = props;

  return (
    <Box width={width} component={'form'} textAlign={'center'}>
      <Typography variant='h1' textTransform={'capitalize'} mb={'64px'}>
        Welcome Back
      </Typography>
      <InputField
        type={text.email}
        placeholder={'Email'}
      />
      <InputField
        type={text.password}
        placeholder={'Password'}
        autoComplete={'password'}
      />
      <Link to={routeConstant.forgotPassword} className='text-deco-none'>
        <Typography variant='subtitle1' textTransform={'capitalize'} sx={{ color: 'primary.light', cursor: 'pointer' }} textAlign={'right'}>
          Forgot Password?
        </Typography>
      </Link>
      <Button variant='contained' fullWidth sx={{ mt: '32px' }}>
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