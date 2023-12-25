import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputField from '../../Atoms/InputField/InputField';
import OrDivider from '../../Atoms/OrDivider/OrDivider';
import OTPInput from 'react-otp-input';

import classes from './index.module.css'
import { CustomAlert } from '../../Atoms/CustomAlert/CustomAlert';
import { routeConstant } from '../../../routes/routeConstants';
import { Link, useNavigate } from 'react-router-dom';
import FormHeader from '../../Atoms/FormHeader/FormHeader';

function OtpForm(props) {
    const nagigate = useNavigate();
    const {
        width = '358px',
        otp,
        setOtp,
        handleSubmit
    } = props;

    const handleChange = (value) => {
        console.log('caldkfjaldsf ', value)
        setOtp(value);
    };

    return (
        <Box width={width} component={'form'} textAlign={'center'} onSubmit={handleSubmit}>
            {/* in design there is written Forgot Password but what about Reset Password :) */}
            <FormHeader mb='32px' title={'Verify Otp'} />
            <CustomAlert
                message={"We have send you 6 digits verification code to your email. Please kindly check"}
            />
            <OTPInput
                value={otp}
                placeholder={'000000'}
                inputType={'tel'}
                onChange={handleChange}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                containerStyle={classes.otpContainer}
                inputStyle={classes.otpInput}
                skipDefaultStyles={true}
                focusStyles={classes.focusStyle}
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
            <Button variant='contained' fullWidth sx={{ mt: '44px' }} type='submit'>
                Verify
            </Button>
            <Button variant='outlined' fullWidth sx={{ mt: '16px' }} onClick={() => nagigate(routeConstant.forgotPassword)}>
                Back
            </Button>
        </Box >
    );
}

export default OtpForm