import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material'

import TitleDetails from './TitleDetails'
import DescriptionStyle from './StyleDivs/DescriptionStyle'
import Father from './StyleDivs/Father'
import FavoriteButton from './FavoriteButton'


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

  const initialFavoriteEpisodes = []

  const [favoriteEpisodes, setFavoriteEpisodes] = useState(initialFavoriteEpisodes)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const toggleFavorite = (episodeId) => {
    setFavoriteEpisodes((prevFavoriteEpisodes) => {
      const isFavorite = prevFavoriteEpisodes.includes(episodeId)
      if (isFavorite) {
        return prevFavoriteEpisodes.filter((favEpisode) => favEpisode !== episodeId)
      } else {
        return [...prevFavoriteEpisodes, episodeId]
      }
    })
  }

  return (
    <Father>
      <TitleDetails />
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
        const totalCharacterCountForEpisode = characters ? characters.length : 0
        const isFavorite = favoriteEpisodes.includes(id)

        return (
          <div key={id}>
            <DescriptionStyle>
              <h3>Episódio: {episode}</h3>
              <h3>Nome: {name}</h3>
              <h3>Lançamento: {air_date}</h3>
              <h3>Total de Personagens no Episódio: {totalCharacterCountForEpisode}</h3>
              <FavoriteButton
                id={id}
                onToggleFavorite={() => toggleFavorite(id)}
                isFavorite={isFavorite}
              />
            </DescriptionStyle>

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

            <br />
          </div>
        )
      })}
    </Father>
  )
}

export default Details