import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material'

import Title from './Title'
import Description from './stylesdivs/Description'
import Father from './stylesdivs/Father'

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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <Father>
      <Title />
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
        const totalCharacterCountForEpisode = characters ? characters.length : 0

        return (
          <div key={id}>
            <Description>
              <h3>Espisode: {episode}</h3>
              <h3>Name: {name}</h3>
              <h3>Launch: {air_date}</h3>
              <h3>Characters: {totalCharacterCountForEpisode}</h3>
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
                        <div>Character: {character.name}</div>
                        <div>Species: {character.species}</div>
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
    </Father>
  )
}

export default Details
