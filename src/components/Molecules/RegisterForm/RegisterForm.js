import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../Atoms/InputField/InputField';
import OrDivider from '../../Atoms/OrDivider/OrDivider';

import { text } from '../../../utils/constants/strings';
import { Link } from 'react-router-dom';
import { routeConstant } from '../../../routes/routeConstants';
import CustomSelect from '../../Atoms/CustomSelect/CustomSelect';
import FormHeader from '../../Atoms/FormHeader/FormHeader';

function RegisterForm(props) {
  const countryList = ['Pakistan', 'England', 'France', 'Australia']
  const {
    width = '358px',
    inputVal,
    setInputVal,
    handleSubmit,
    error,
    setError,
    isPasswordSame
  } = props;

  // console.log('**** error *** ', error)
  const handleChange = (e) => {
    // console.log('e.target.ide.target.ide.target.id', e.target.id)
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
      <FormHeader title="create account" />
      <InputField
        type={'text'}
        name={text.name}
        placeholder={'Name'}
        required
        value={inputVal.name}
        error={error.name}
        onChange={handleChange}
      />
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
      <InputField
        type={text.password}
        name={text.confirmPassword}
        placeholder={'Confirm Password'}
        autoComplete={'password'}
        required
        value={inputVal.confirmPassword}
        error={error.confirmPassword}
        onChange={handleChange}
        isPasswordSame={isPasswordSame}
      />
      <CustomSelect
        countryList={countryList}
        value={inputVal.country}
        setInputVal={setInputVal}
      />
      <Button variant='contained' fullWidth sx={{ mt: '32px' }} type='submit'>
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