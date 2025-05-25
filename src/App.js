import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'
import Detail from './components/Detail.jsx'


function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>}/>
	<Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </Box>
  );
}

export default App;
