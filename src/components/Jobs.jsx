import { Stack, Box, Typography, Divider } from '@mui/material'
import { Link } from 'react-router-dom'


const Jobs = ({ jobs }) => {
  console.log(jobs)
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start',
		 alignItems: 'center' }}>
      {Array.isArray(jobs) && jobs.map(job => (
	<Link to={`/detail/${job.job_id}`} key={job.job_id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box key={job.job_id} sx={{ bgColor: 'gray', border: '1px solid gray', borderRadius: '5px', margin: '5px',
			            padding: '30px 40px', width: '600px' }}>
	  <Typography variant='body2' sx={{ fontSize: '16px', margin: '10px' }}>{job.job_title} on {job.employer_name !== job.job_publisher ? `${job.employer_name} (${job.job_publisher})` : job.employer_name}</Typography>
	  <Divider />
	  <Typography variant='body2' sx={{ fontSize: '16px', margin: '10px' }}>{job.job_description}</Typography>
	  <Divider />
	  <Typography variant='body2' sx={{ fontSize: '16px', marginTop: '10px', marginLeft: '10px' }}>{job.job_location}</Typography>
	  <Typography variant='body2' sx={{ fontSize: '16px', marginLeft: '10px' }}>{job.job_posted_at}</Typography>
	</Box>
	</Link>
      ))}
    </Stack>
  )
}




export default Jobs
