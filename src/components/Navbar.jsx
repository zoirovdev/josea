import { Stack, Box, InputBase } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search.jsx'
import { useState } from 'react'

const Navbar = () => {
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setQ(event.target.value)
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      if(q.trim() !== ''){
	navigate(`search?q=${encodeURIComponent(q)}`)
      }
    } 
  }
  
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <Link to="/">
        <Box component='img' src='/wearehiring.png' alt='logo' 
	sx={{ height: '90px', width: '140px', marginLeft: '10px', marginTop: '5px' }}/>
      </Link>
      <Box sx={{ marginLeft: '300px', display: 'flex', flexDirection: 'row', width: '400px',
	alignItems: 'center', padding: '5px 8px', border: '1px solid #f1f1f1', boxShadow: 1,
	borderRadius: '10px', gap: '2px'}}>
	<SearchIcon sx={{ marginLeft: '10px' }}/>
	<InputBase 
	placeholder='Search' 
	sx={{ marginLeft: '10px', fontSize: '18px' }}
	onChange={handleChange}
	onKeyDown={handleKeyDown}/> 
      </Box>
    </Stack>)
}


export default Navbar
