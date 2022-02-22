import { NavBar } from '../components';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
const profilePage = () =>{
  //Style Cosmic Latte!
  //Page Structure: NavBar, Container{Content}
  return (
    <div>
      <div>
        < NavBar/>
      </div>
      <div>
        <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#FFF8E7', height: '100vh' }} />
      </Container>
      </div>
    </div>
  );
}
export default profilePage;