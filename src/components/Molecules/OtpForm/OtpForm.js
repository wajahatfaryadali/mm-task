import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputField from '../../Atoms/InputField/InputField';
import OrDivider from '../../Atoms/OrDivider/OrDivider';
import OTPInput from 'react-otp-input';

import classes from './index.module.css'
import { CustomAlert } from '../../Atoms/CustomAlert/CustomAlert';
import { routeConstant } from '../../../routes/routeConstants';
import { Link } from 'react-router-dom';

function OtpForm(props) {
    const {
        width = '358px',
    } = props;

    const [otp, setOtp] = useState('');

    return (
        <Box width={width} component={'form'} textAlign={'center'}>
            <Typography variant='h1' textTransform={'capitalize'} mb={'32px'}>
                {/* in design there is written Forgot Password but what about Reset Password :) */}
                Verify Otp
            </Typography>
            <CustomAlert
                message={"We have send you 6 digits verification code to your email. Please kindly check"}
            />
            <OTPInput
                value={otp}
                placeholder={'000000'}
                inputType={'tel'}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                containerStyle={classes.otpContainer}
                inputStyle={classes.otpInput}
                skipDefaultStyles={true}
            />
            <Link to={'#'} className='text-deco-none'>
                <Typography
                    variant='h1'
                    textTransform={'capitalize'}
                    className={classes.resendText}
                    color={'primary'}
                >
                    Resend Code
                </Typography>
            </Link>
            <Button variant='contained' fullWidth sx={{ mt: '44px' }}>
                Verify
            </Button>
            <Button variant='outlined' fullWidth sx={{ mt: '16px' }}>
                Back
            </Button>
        </Box>
    );
}

export default OtpForm