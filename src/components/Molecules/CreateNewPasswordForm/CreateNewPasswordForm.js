import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../Atoms/InputField/InputField';

import { text } from '../../../utils/constants/strings';


function CreateNewPasswordForm(props) {
    const {
        width = '417px',
        inputVal,
        setInputVal,
        handleSubmit,
        error,
        setError,
        loading
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
                {/* in design there is written Forgot Password but what about Reset Password :) */}
                Reset password
            </Typography>
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
            />
            {/* mt same as Forgot password */}
            <Button variant='contained' fullWidth sx={{ mt: '34px' }} type='submit'>
                Reset Password
            </Button>
        </Box>
    )
}

export default CreateNewPasswordForm