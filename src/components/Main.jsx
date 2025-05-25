import { Box, Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Service } from '../service/api.jsx'
import Jobs from './Jobs.jsx'

const Main = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Service.fetchAll()
	setJobs(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  
  return (
    <Box>
      <Jobs jobs={jobs}/>
    </Box>
  )
}



export default Main
