import React, { useState } from 'react'
import {
    InputAdornment,
    TextField,
    Box,
    MenuItem
} from '@mui/material';
import { getIcon } from '../../../utils/helpers/getIcons';
import { text } from '../../../utils/constants/strings';
import classes from './index.module.css'
const CustomSelect = (props) => {
    const [open, setOpen] = useState(false);
    const {
        setInputVal,
        countryList,
        value
    } = props

    const handleChange = (event) => {
        setInputVal(prevState => ({
            ...prevState,
            country: event.target.value
        }))
    };

    const handleOpen = () => setOpen(!open)

    return (
        <Box sx={{ minWidth: 120 }}>
            <TextField
                fullWidth
                select
                open={open}
                onClick={handleOpen}
                value={value ? value : 0}
                onChange={handleChange}
                sx={{ textAlign: 'left', color: 'red' }}
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            <img src={getIcon(text.countrySelect)} className='icon-width' />
                        </InputAdornment>,

                }}
            >
                <MenuItem value={0} disabled>
                    {"Select Country"}
                </MenuItem>
                {countryList.map((country, i) =>
                    <MenuItem key={i} value={country}>{country}</MenuItem>
                )}
            </TextField>
        </Box >
    )
}

export default CustomSelect