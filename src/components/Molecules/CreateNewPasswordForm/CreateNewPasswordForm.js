import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../Atoms/InputField/InputField';

import { text } from '../../../utils/constants/strings';


function CreateNewPasswordForm(props) {
    const {
        width = '417px',
    } = props;

    return (
        <Box width={width} component={'form'} textAlign={'center'}>
            <Typography variant='h1' textTransform={'capitalize'} mb={'64px'}>
                {/* in design there is written Forgot Password but what about Reset Password :) */}
                Reset password
            </Typography>
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
            {/* mt same as Forgot password */}
            <Button variant='contained' fullWidth sx={{ mt: '34px' }}>
                Reset Password
            </Button>
        </Box>
    )
}

export default CreateNewPasswordForm