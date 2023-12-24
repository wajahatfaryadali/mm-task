import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import tempImg from '../../../assets/images/tempImg.png';
import classes from './index.module.css';

const DashboardCard = (props) => {
    const {
        image = tempImg,
        title = 'Temp Title',
        time = '15 min ago',
        detail = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    } = props;

    return (
        <Card className={classes.cardContainer}>
            <CardMedia image={image} alt="img" sx={{ height: "141px", borderRadius: '4px' }} />
            <CardContent>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="caption">{time}</Typography>
                <Typography
                    variant="body1"
                    lineHeight={{ xs: "16px" }}
                    fontSize="12px"
                    mt="11px"
                    height="50px"
                >
                    {detail}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
