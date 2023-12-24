import { Pagination } from '@mui/material'
import React from 'react'

const CPagination = () => {
    return (
        <Pagination
            count={32}
            color='primary'
            variant='text'
            sx={{ fontWeight: 800, gap: '20px' }}
        />
    )
}

export default CPagination