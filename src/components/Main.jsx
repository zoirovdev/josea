import { Box, Typography, CircularProgress, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import { Service } from '../service/api.jsx'
import Jobs from './Jobs.jsx'

const Main = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Service.fetchAll()
        setJobs(response.data)
      } catch (error) {
        setError("Failed to load jobs. Please try again later.")
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ textAlign: 'center', mb: 4 }}>
        Available Job Listings
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {!loading && !error && jobs.length === 0 && (
        <Typography textAlign="center" color="text.secondary">
          No jobs found.
        </Typography>
      )}

      {!loading && !error && jobs.length > 0 && (
        <Jobs jobs={jobs} />
      )}
    </Box>
  )
}

export default Main

