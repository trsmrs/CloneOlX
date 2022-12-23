import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { deepPurple } from '@mui/material/colors';

export default function ButtonAppBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: deepPurple['A200']}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color= 'secondary'
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon sx={{color: '#fff'}} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
