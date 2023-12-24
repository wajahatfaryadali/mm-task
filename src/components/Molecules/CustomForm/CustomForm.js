import { Box, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../Atoms/InputField/InputField';


function CustomForm(props) {
  const {
    title = 'title of the form',
    width = '358px',
    inputFields = [],
    startIcon
  } = props;
  return (
    <Box width={width} textAlign={'center'}>
      <Typography variant='h1' textTransform={'capitalize'} mb={'64px'}>
        {title}
      </Typography>
      <InputField
        startIcon={startIcon}
        placeholder={'Email'}
      />
      <Typography variant='subtitle1' textTransform={'capitalize'} sx={{ color: 'primary.light' }} textAlign={'right'}>
        Forgot Password?
      </Typography>
    </Box>
  )
}

export default CustomForm