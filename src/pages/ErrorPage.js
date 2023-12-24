import React from 'react'
import robo from "../assets/svgs/robo.svg"
import { Box, Typography } from '@mui/material'
function ErrorPage() {
    return (
        <Box component={'div'} className='p-relative' minHeight={'100vh'}>
            <Box component={'div'} className='align-div-center mw-fc mh-fc text-center'>
                <img src={robo} alt='robo' className='' />
                <Typography variant='h3' mt={2}>
                    404_
                </Typography>
                <Typography variant='h1'>
                    You're Beyond The Borders.
                </Typography>

            </Box>

        </Box>
    )
}

export default ErrorPage