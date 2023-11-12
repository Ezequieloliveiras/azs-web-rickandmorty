import React, { useState } from 'react'
import {
  Box,
  Toolbar,
  InputBase,
  IconButton,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

function PrimarySearchAppBar({ setSearchTerm }) {
  const [searchTerm, setSearchTermLocal] = useState('')

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    setSearchTerm(searchTerm)
  }

  const handleSearchChange = (event) => {
    setSearchTermLocal(event.target.value)
  }

  return (
    <Box sx={{ flexGrow: 1, marginLeft: '90px' }}>
      <Toolbar>
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton
            type="submit"
            aria-label="search"
            color="#6b3fa0"
            sx={{ p: '10px' }}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              color: '#6b3fa0',
              '& .MuiInputBase-input': {
                fontFamily: 'monospace',
              },
            }}
          />
        </Box>
      </Toolbar>
    </Box>
  )
}

export default PrimarySearchAppBar
