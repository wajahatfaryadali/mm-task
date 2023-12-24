import React from 'react'
import DashboardCard from '../../components/Atoms/DashboardCard/DashboardCard'
import { Container, Grid, Typography } from '@mui/material'
import CPagination from '../../components/Atoms/CustomPagination/CPagination'

const Dashboard = () => {
  return (
    <Container
      sx={{ maxWidth: '1366px', height: '100vh', pt: '32px' }}
    >
      <Grid Container>
        <Grid item xs={12}>
          <Typography variant='h1' color={'#3E53D7'} mb={{ xs: '16px', md: '24px' }}>
            Articles
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mt: { xs: '20px', md: '35px' } }}>
          <CPagination />
        </Grid>
      </Grid>
    </Container >
  )
}

export default Dashboard