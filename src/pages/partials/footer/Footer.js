import React from 'react'
import { Typography, Container, Paper } from '@mui/material'

const Footer = () => {
    return (
        <Paper style={{
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#6b3fa0',
            borderRadius: '0',
            marginTop: '50px'
        }}>
            <Container>
                <Typography color="white" align="center">
                    Rick and Morty was created in the United States on December 2, 2013
                </Typography>
            </Container>
        </Paper>
    )
}

export default Footer
