import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Container,
  InputBase,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import SubMenu from './SubMenu'

function ResponsiveAppBar() {
  const [searchValue, setSearchValue] = React.useState('')
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log('Search submitted:', searchValue)
    setSearchValue('')
  }

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
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EPISODES
          </Typography>

          <Typography
            noWrap
            component="a"
            href="/details"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DETAILS
          </Typography>

          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <IconButton
              type="submit"
              aria-label="search"
              color="inherit"
              sx={{ p: '10px' }}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              sx={{
                color: 'inherit',
                '& .MuiInputBase-input': {
                  fontFamily: 'monospace',
                },
              }}
            />
          </Box>

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
                <a href="/" style={{ textDecoration: 'none', marginBottom: '10px' }}>LIST OF EPISODES</a>
                <a href="/details" style={{ textDecoration: 'none' }}>DETAILS EPISODES</a>
                <Box
                  component="form"
                  onSubmit={handleSearchSubmit}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}
                >
                  <IconButton
                    type="submit"
                    aria-label="search"
                    color="inherit"
                    sx={{ p: '10px' }}
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchChange}
                    sx={{
                      color: 'inherit',
                      '& .MuiInputBase-input': {
                        fontFamily: 'monospace',
                      },
                    }}
                  />
                </Box>
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
