import { useEffect, useState } from 'react'
import { Service } from '../service/api.jsx'
import { useParams } from 'react-router-dom'
import {
  Box,
  Typography,
  Divider,
  Link as MuiLink,
  Paper,
  Stack
} from '@mui/material'

const Detail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState({})

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await Service.fetchById(id)
        setDetail(response.data[0])
        console.log(response.data[0])
      } catch (error) {
        console.log(error)
      }
    }

    getDetail()
  }, [id])

  return (
    <Box
      sx={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: 4,
        borderRadius: 3,
        boxShadow: 4,
        backgroundColor: '#fff',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          padding: 2,
          mb: 4
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          {detail.job_title}
        </Typography>

        {detail.job_apply_link && (
          <MuiLink
            href={detail.job_apply_link}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: 500,
              '&:hover': { backgroundColor: '#1565c0' }
            }}
          >
            Apply 
	 </MuiLink>
        )}
      </Stack>

      <Paper elevation={2} sx={{ padding: 3, borderRadius: 2 }}>
        <Stack spacing={2}>
          <Row label="Employment Type" value={detail.job_employment_type} />
          <Divider />
          <Row label="Employer" value={detail.employer_name} />
          <Divider />
          <Row label="Location" value={detail.job_location} />
          <Divider />
          <Row label="Posted At" value={detail.job_posted_at} />
        </Stack>
      </Paper>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Job Description
        </Typography>
        <Typography sx={{ whiteSpace: 'pre-line' }}>
          {detail.job_description}
        </Typography>
      </Box>

      {/* Highlights */}
      {detail?.job_highlights && (
        <Box sx={{ mt: 4 }}>
          {['Benefits', 'Qualifications', 'Responsibilities'].map((section) => (
            detail.job_highlights[section] ? (
              <Box key={section} sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {section}
                </Typography>
                <Stack spacing={1}>
                  {detail.job_highlights[section].map((item, idx) => (
                    <Typography key={idx} variant="body2">• {item}</Typography>
                  ))}
                </Stack>
              </Box>
            ) : null
          ))}
        </Box>
      )}
    </Box>
  )
}

const Row = ({ label, value }) => (
  <Stack direction="row" justifyContent="space-between">
    <Typography fontWeight={500}>{label}</Typography>
    <Typography>{value || '-'}</Typography>
  </Stack>
)

export default Detail

