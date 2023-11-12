import React, { useState, useEffect } from 'react'
import { Typography, Container, Paper } from '@mui/material'

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false)

    useEffect(() => {
        // Simula um tempo de espera para representar o carregamento da página
        const timer = setTimeout(() => {
            setShowFooter(true)
        }, 1000) // Ajuste conforme necessário

        return () => clearTimeout(timer) // Limpa o temporizador ao desmontar o componente
    }, [])

    return (
        showFooter && (
            <Paper
                style={{
                    padding: '20px',
                    marginTop: '50px',
                    borderRadius: '0',
                    backgroundColor: '#6b3fa0',
                }}
            >
                <Container>
                    <Typography color="white" align="center">
                        Rick and Morty was created in the United States on December 2, 2013
                    </Typography>
                </Container>
            </Paper>
        )
    )
}

export default Footer
