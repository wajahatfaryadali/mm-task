import React from 'react'
import classes from "./index.module.css";
import { Divider, Typography } from '@mui/material';

function OrDivider() {

  return (
    <div className={classes.root}>
      <Divider className={classes.divider} orientation="horizontal" />
      <Typography variant="body2" color="textSecondary">
        OR
      </Typography>
      <Divider className={classes.divider} orientation="horizontal" />
    </div>
  );
};

export default OrDivider;