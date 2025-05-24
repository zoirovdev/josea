import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </Box>
  );
}

export default App;
