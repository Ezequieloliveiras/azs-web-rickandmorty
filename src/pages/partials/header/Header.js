import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Container,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import SubMenu from './SubMenu'

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#6b3fa0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              marginRight: '50px',
            }}
          >
            RICK AND MORTY
          </Typography>

          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              letterSpacing: '0.1rem',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                color: 'white',
                textDecoration: 'underline',
              },
            }}
          >
            LIST OF EPISODES
          </Typography>

          <Typography
            noWrap
            component="a"
            href="/details"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:'20px',
              '&:hover': {
                color: 'white',
                textDecoration: 'underline', 
              },
            }}
          >
            DETAILS OF EPISODES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <SubMenu>
                <a href="/" style={{
                  textDecoration: 'none',
                  marginBottom: '10px',
                  paddingLeft: '10px',
                  color: '#6b3fa0'
                }}>LIST OF EPISODES</a>
                <a href="/details" style={{
                  textDecoration: 'none',
                  paddingLeft: '10px',
                  color: '#6b3fa0'
                }}>DETAILS EPISODES</a>
              </SubMenu>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RICK AND MORTY
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
