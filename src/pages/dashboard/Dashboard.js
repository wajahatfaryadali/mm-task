import React, { useEffect, useState } from 'react'
import DashboardCard from '../../components/Atoms/DashboardCard/DashboardCard'
import { Button, Container, Grid, Typography } from '@mui/material'
import CPagination from '../../components/Atoms/CustomPagination/CPagination'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Atoms/Loader/Loader'
import axios from 'axios'
import { base_url_blog, constants } from '../../store/constants'
import { toaster } from '../../utils/helpers/toaster'
import { logOut } from '../../store/slices/authSlice/authSlice'

const Dashboard = () => {
  const [cardData, setCardData] = useState([]);
  const localState = useSelector(state => state.login);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [title, setTitle] = useState('');
  const [params, setParams] = useState({});

  const getParams = () => {
    let filters = {};
    if (page) {
      filters = {
        ...filters,
        page,
      }
    }
    if (limit) {
      filters = {
        ...filters,
        limit,
      }
    }
    if (title) {
      filters = {
        ...filters,
        title,
      }
    }
    setParams(filters)
  }

  const getDashboardData = async () => {
    setLoading(true)
    try {

      const authToken = localState?.authToken;
      const response = await axios.get(base_url_blog + constants.blogs, {
        params,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
      );
      setCardData(response?.data?.data?.result)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const msg = error.response.data.message;
        toaster.show("error", msg, 3000)
        return;
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDashboardData()
    return () => {
      setCardData([])
    }
  }, [params])

  useEffect(() => {
    getParams()
    return () => {
      setParams({})
    }
  }, [page, limit, title])

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <>
      <Container component={'div'}
        sx={{ maxWidth: '1366px !important', height: '100vh', pt: '32px' }}
      >
        <Grid Container>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h1' color={'#3E53D7'} mb={{ xs: '16px', md: '24px' }}>
              Articles
            </Typography>
            <Button variant='text' onClick={handleLogout} >
              Log out
            </Button>
          </Grid>
          <Grid item container xs={12} gap={"16px"} justifyContent={'space-between'} sx={{ height: '80vh', overflowY: 'auto' }}>
            {cardData.length ? cardData?.map((item, i) =>
              <Grid item xs={12} sm={6} md={3} key={item._id} maxWidth={'298px !important'}>
                <DashboardCard
                  image={item.image}
                  title={item.title}
                  time={item.updatedAt}
                  detail={item.description}
                />
              </Grid>)
              :
              <>
                {
                  loading ? "" :
                    <Typography variant='h1' height={"90%"} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} flexDirection={'column'}>
                      No Data To Display!
                    </Typography>
                }
              </>
            }
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mt: '30px' }}>
            <CPagination
              handlePageChange={handlePageChange}
            />
          </Grid>
        </Grid>
      </Container >
      <Loader loading={loading} />
    </>
  )
}

export default Dashboard