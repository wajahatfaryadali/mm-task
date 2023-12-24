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

    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);

    const {
        menuList,
    } = props

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleOpen = () => setOpen(!open)

    return (
        <Box sx={{ minWidth: 120 }}>
            <TextField
                fullWidth
                select
                open={open}
                onClick={handleOpen}
                
                placeholder='Country'

                sx={{ textAlign: 'left'}}
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            <img src={getIcon(text.countrySelect)} className='icon-width' />
                        </InputAdornment>,
                }}
            // SelectProps={{
            //     IconComponent: () => (
            //         <InputAdornment position="end">
            //             <Box component={'div'} className={`${classes.iconContainer} alignCenterUsingFlex`}>
            //                 <img src={getIcon(text.selectArrows).arrowDown} style={{ width: '15px', height: '7.5px', margin: 'atuo' }} />
            //             </Box>
            //         </InputAdornment>
            //     ),
            // }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
        </Box>
    )
}

export default CustomSelect