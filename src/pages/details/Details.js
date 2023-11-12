import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material'
import Title from './Title'
import Description from './stylesdivs/Description'
import Father from './stylesdivs/Father'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const GET_ALL_EPISODE_IDS = gql`
  query GetAllCharacters {
    episodes {
      results {
        id
        episode
        name
        air_date
        characters {
          image
          species
          status
          name: name
        }
      }
    }
  }
`

function Details() {
  const { loading, error, data } = useQuery(GET_ALL_EPISODE_IDS)
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300
      setShowScrollButton(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Father>
      <Box>
        <Title />
        {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
          const totalCharacterCountForEpisode = characters ? characters.length : 0

          return (
            <div key={id}>
              <Description sx={{ position: 'relative' }}>
                <div style={{ textAlign: 'left', border: '1px solid grey', padding: '20px', borderRadius: '5px' }}>
                  <h3>Episódio: {episode}</h3>
                  <h3>Nome: {name}</h3>
                  <h3>Lançamento: {air_date}</h3>
                  <h3>Personagens: {totalCharacterCountForEpisode}</h3>
                </div>
              </Description>

              <Grid container spacing={3} justifyContent="center">
                {characters.map((character, index) => (
                  <Grid item key={index} xs={10} md={4} lg={3}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="auto"
                        alt="details-reference"
                        src={character.image}
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="div">
                          <div>Personagem: {character.name}</div>
                          <div>Espécie: {character.species}</div>
                          <div>Status: {character.status}</div>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          )
        })}
      </Box>

      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          variant="contained"
          color="primary"
          sx={{ position: 'fixed', bottom: 16, right: 16, backgroundColor:'#6b3fa0' }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </Father>
  )
}

export default Details
