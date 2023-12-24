import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../Atoms/InputField/InputField';
import OrDivider from '../../Atoms/OrDivider/OrDivider';

import { text } from '../../../utils/constants/strings';
import { Link } from 'react-router-dom';
import { routeConstant } from '../../../routes/routeConstants';
import CustomSelect from '../../Atoms/CustomSelect/CustomSelect';

function RegisterForm(props) {
  const {
    width = '358px',
  } = props;

  return (
    <Box width={width} component={'form'} textAlign={'center'}>
      <Typography variant='h1' textTransform={'capitalize'} mb={'64px'}>
        create account
      </Typography>
      <InputField
        type={'text'}
        name={text.name}
        placeholder={'Name'}
      />
      <InputField
        type={text.email}
        placeholder={'Email'}
      />
      <InputField
        type={text.password}
        placeholder={'Password'}
        autoComplete={'password'}
      />
      <InputField
        type={text.password}
        name={text.confirmPassword}
        placeholder={'Confirm Password'}
        autoComplete={'password'}
      />
      <CustomSelect />
      <Button variant='contained' fullWidth sx={{ mt: '32px' }}>
        Register
      </Button>
      <OrDivider />
      <Box>
        <Typography color={'primary.textGray'}>
          Have an account yet? {' '}
          <Link to={routeConstant.login} className='text-deco-none'>
            <Typography component={'span'} color={'primary.light'} sx={{ cursor: 'pointer' }} fontWeight={600}>
              Login
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default RegisterForm