import React from 'react'
import { Alert, Typography } from '@mui/material'
import infoIcon from '../../../assets/svgs/info-icon.svg'

export const CustomAlert = ({ message }) => {
    return (
        <Alert
            severity={"warning"}
            icon={<img src={infoIcon} />}
            sx={{ textAlign: 'left', mb: '24px' }}
        >
            {message}
        </Alert>
    )
}

