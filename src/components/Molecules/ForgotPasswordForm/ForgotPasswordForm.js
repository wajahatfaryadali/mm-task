import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../Atoms/InputField/InputField';
import OrDivider from '../../Atoms/OrDivider/OrDivider';

import { text } from '../../../utils/constants/strings';

function ForgotPasswordForm(props) {
    const {
        width = '417px',
    } = props;

    return (
        <Box width={width} component={'form'} textAlign={'center'}>
            <Typography variant='h1' textTransform={'capitalize'} mb={'24px'}>
                Forgot Password
            </Typography>
            <Typography color={'primary.textGray'} variant='subtitle2' mb={'32px'}>
                Seems you forget your password, we’ll send a recovery code to your email
            </Typography>
            <InputField
                type={text.email}
                placeholder={'Email'}
            />
            {/* setting marginTop to 34 because input field have 16px bottom margin */}
            <Button variant='contained' fullWidth sx={{ mt: '34px' }}>
                Send
            </Button>
            <Button variant='outlined' fullWidth sx={{ mt: '16px' }}>
                Back
            </Button>
        </Box>
    )
}

export default ForgotPasswordForm