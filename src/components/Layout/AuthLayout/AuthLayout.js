import React from 'react'
import { Box, Typography } from '@mui/material'
import classes from "./index.module.css";
import robot from "../../../assets/svgs/robo.svg"
import { useDeviceType } from '../../../hooks/useDeviceType';


const AuthLayout = ({ Component }) => {
  const { isMobile, isTab } = useDeviceType();
  return (
    <Box display={'flex'} minHeight={'100vh'}>
      <Box display={{ xs: 'none', md: 'block' }} className={`${classes.blueContainer} ${isTab && 'w-50'}`}>
        <Box className={classes.roboContainer}>
          <img src={robot} alt={'robot img'} />
          <Typography variant='h2' color={'#fff'} mt={'33px'}>
            Welcome aboard my friend
          </Typography>
          <Typography color={'#fff'}>
            just a couple of clicks and we start
          </Typography>
        </Box>
      </Box>
      <Box component={'div'} className={`${classes.whiteContainer} p-relative ${isMobile && 'w-100'} ${isTab && 'w-50'}`}>
        <Box component={'div'} className='align-div-center mw-fc mh-fc'>
          {Component}
        </Box>
      </Box>
    </Box >
  )
}

export default AuthLayout