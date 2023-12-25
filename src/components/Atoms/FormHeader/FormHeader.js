import { Typography } from '@mui/material'
import React from 'react'

const FormHeader = ({ title, variant = 'h1', mb = '64px' }) => {
    return (
        <Typography variant={variant} textTransform={'capitalize'} mb={mb}>
            {title}
        </Typography>
    )
}

export default FormHeader