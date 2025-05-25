import { Stack, Box, Typography, Divider, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Jobs = ({ jobs }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {Array.isArray(jobs) && jobs.map((job) => (
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
  );
};

export default Jobs;

