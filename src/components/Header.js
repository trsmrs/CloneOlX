import { Box } from '@mui/system';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Container, Divider, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { AccountCircle } from '@mui/icons-material';


export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#9c27b0" }} position="fixed" elevation={5}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ borderBottom: "1px solid white" }} href={'/'}>XLO</Link> - Anuncie aqui
            </Typography>
            <Link href={'/user/publish'}>
              <Button color="inherit" variant='outlined'>Anunciar</Button>
            </Link>
            <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === true ?
                  <Avatar src='https://avatars.githubusercontent.com/u/92055925?v=4' />
                  : <AccountCircle></AccountCircle>
              }
              <Typography sx={{ marginLeft: 1 }} variant='subtitle2' color='#fff'>Tiago Machado</Typography>
            </IconButton>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              <Link href='/user/dashboard'>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href='/user/publish'>
                <MenuItem>Publicar anúncio</MenuItem>
              </Link>
              <Divider sx={{ marginBottom: 1 }}></Divider>
              <Link href='/'>
                <MenuItem sx={{marginLeft:1}}>Sair</MenuItem>
              </Link>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
