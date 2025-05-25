import { useEffect, useState } from 'react'
import { Service } from '../service/api.jsx'
import { useParams, Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'



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
    <Box component='div' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', width: '50%', margin: 'auto', border: '1px solid #f1f1f1', borderRadius: '10px',
	padding: '20px 40px', boxShadow: 2}}>
      <Typography>Title: {detail.job_title}</Typography>
      <Typography>Employer: {detail.employer_name}</Typography>
      <Typography>Type: {detail.job_employment_type}</Typography>
      {detail.job_apply_link && (
        <a href={detail.job_apply_link} target='_blank' rel='noopener noreferrer'>
          Apply here
        </a>
      )}
      <Typography>Desc: {detail.job_description}</Typography>
      <Typography>Location: {detail.job_location}</Typography>
      <Box> Highlights: 
        <Box> Benefits: {detail.job_highlights?.Benefits?.map( benefit => (
	  <Typography>{benefit}</Typography>
	))}</Box>
	<Box> Qualifications: {detail.job_highlights?.Qualifications?.map( qualification => (
	  <Typography>{qualification}</Typography>
	))}</Box>
	<Box> Responsibilities: {detail.job_highlights?.Responsibilities?.map( responsibility => (
	  <Typography>{responsibility}</Typography>
	))}</Box>
      </Box>
      <Typography>{detail.job_posted_at}</Typography>
    </Box>
  )
}



export default Detail
