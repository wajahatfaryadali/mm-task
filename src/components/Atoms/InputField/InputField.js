import { InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { getIcon } from '../../../utils/helpers/getIcons';
import { text } from '../../../utils/constants/strings';

function InputField(props) {

  const [showPassword, setShowPassword] = useState(false);

  const {
    placeholder,
    type = 'text',
    name,
    ...rest
  } = props;


  return (
    <TextField
      label=""
      name={name ? name : type}
      type={
        type === text.password
          ? showPassword
            ? 'text'
            : type
          : type}
      id={name ? name : type}
      placeholder={placeholder}
      sx={{ mb: 2 }}
      fullWidth
      InputProps={{
        startAdornment:
          <InputAdornment position="start">
            <img src={type === text.password
              ? getIcon(name ? name : type).lock
              : getIcon(name ? name : type)}
              alt={'o'}
              className='icon-width'
            />
          </InputAdornment>,
        endAdornment:
          type === text.password ?
            <InputAdornment position="end" sx={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
              <img src={showPassword
                ? getIcon(name ? name : type).eyeClose
                : getIcon(name ? name : type).eyeOpen}
                alt={'o'}
                className='icon-width'
              />
            </InputAdornment> : "",
      }}
      {...rest}
    />
  )
}

export default InputField