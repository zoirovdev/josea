import { Stack, Box } from '@mui/material'


const Jobs = ({ jobs }) => {
  console.log(jobs)
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',
		 alignItems: 'center' }}>
      {Array.isArray(jobs) && jobs.map(job => (
        <Box key={job.job_id} sx={{ bgColor: 'gray', border: '1px solid gray', borderRadius: '5px', margin: '5px',
			            padding: '5px 10px' }}>
	  {job.job_title}
	</Box>
      ))}
    </Stack>
  )
}




export default Jobs
