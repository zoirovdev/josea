import { Stack, Box, InputBase } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <Link to={'/'}>
        <Box component='img' src='/wearehiring.png' alt='logo' 
	sx={{ height: '90px', width: '140px', marginLeft: '10px', marginTop: '5px' }}/>
      </Link>
      <Box sx={{ marginLeft: '300px', display: 'flex', flexDirection: 'row', width: '400px',
	alignItems: 'center', padding: '5px 8px', backgroundColor: '#f1f1f1',
	borderRadius: '10px', gap: '2px'}}>
	<SearchIcon sx={{ marginLeft: '10px' }}/>
	<InputBase placeholder='Search' sx={{ marginLeft: '10px', fontSize: '18px' }}/> 
      </Box>
    </Stack>)
}


export default Navbar
