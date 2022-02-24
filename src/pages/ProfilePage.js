
import { NavBar } from '../components';
import * as React from 'react';
//import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
//import Container from '@mui/material/Container';
const profilePage = () =>{
  //Style Cosmic Latte!
  //Page Structure: NavBar, Container{Content}
  return (
    <div>
      <div>
        < NavBar/>
      </div>
      <div>
        <Box sx={{ 
          bgcolor: '#FFF8E7',
          height: '50vh',
          width: '180vh',
          borderRadius: 8,
          border: 4, 
          borderColor: '#eeeeee',
          margin: 'auto'
          }} />
      </div>
    </div>
  );
}
export default profilePage;
