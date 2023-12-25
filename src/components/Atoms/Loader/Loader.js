import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Dialog } from '@mui/material';




const Loader = (props) => {
    const { loading } = props
    return (
        <>
            {loading ?
                <Dialog
                    open={loading}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            background: 'transparent'
                        }
                    }}
                >
                    <Box component={'div'} sx={{
                        width: '100px',
                        height: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <CircularProgress />
                    </Box>
                </Dialog>
                : null}
        </>
    )
}

export default Loader;