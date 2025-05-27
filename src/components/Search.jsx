import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Service } from '../service/api.jsx'
import { Stack, Box, Typography, Divider, Paper, CircularProgress, Alert } from '@mui/material';



const Search = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const q = params.get('q')

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await Service.search(q)
	setTimeout(() => {
          setJobs(response.data)
          setLoading(false)
	}, 1000) 
      } catch (error) {
        setError('Failed to fetch data')
	setLoading(false)
      }
    }
    
    if(q){
      getData()
    }
  }, [])
  
  return (
    <Box sx={{ padding: 4 }}>

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

      {!loading && !error &&  jobs.length > 0 && (
        <Stack
          spacing={2}
          sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          }}
        >
          {Array.isArray(jobs) &&  jobs.filter((job, index, self) =>
           index === self.findIndex(j => j.job_id === job.job_id))
           .map((job) => (
	     <Link
              to={`/detail/${job.job_id}`}
              key={job.job_id}
              style={{ textDecoration: 'none', width: '100%', maxWidth: '700px' }}
            >
              <Paper
                elevation={3}
                sx={{
                padding: 3,
                borderRadius: 2,
                transition: '0.3s',
                '&:hover': {
                boxShadow: 6,
                backgroundColor: '#f9f9f9',
                },
                }}
              >
              <Typography
                variant="h6"
                sx={{ marginBottom: 1, fontWeight: 'bold', color: '#333' }}
              >
                {job.job_title}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ color: 'text.secondary', marginBottom: 1 }}
              >
                {job.employer_name !== job.job_publisher
                  ? `${job.employer_name} (${job.job_publisher})`
                  : job.employer_name}
              </Typography>

              <Divider sx={{ marginY: 1 }} />

              <Typography
                variant="body2"
                sx={{
                  marginBottom: 2,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {job.job_description}
              </Typography>

              <Divider sx={{ marginBottom: 1 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color="text.secondary">
                  📍 {job.job_location}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  🗓 {job.job_posted_at}
                </Typography>
              </Box>
            </Paper>
          </Link>
        ))}
      </Stack>
      )}
    </Box>
  )
}



export default Search
