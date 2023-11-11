import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'

import { Grid } from '@mui/material'

import Title from './Title'
import Card from './stylesdivs/Card'
import Content from './stylesdivs/Content'
import Div from '../listofepisodes/stylesdivs/Div'
import FavoriteButton from './icons/FavoriteIcon'
import SeenButton from './icons/SeenIcon'

const GET_ALL_EPISODE_IDS = gql`
  query GetAllEpisodeIds {
    episodes {
      results {
        id
        episode
        name
        air_date
        characters {
          count: id
        }
      }
    }
  }
`

function ListOfEpisodes() {
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
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Title />
      <Grid container spacing={2} justifyContent="center">
        {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
          const totalCharacterCountForEpisode = characters ? characters.length : 0
          const isFavorite = favoriteEpisodes.includes(id)

          return (
            <Grid item key={id}>
              <Card>
                <SeenButton
                  id={id}
                  onToggleSeen={() => { }}
                  isSeen={false}
                />
                <FavoriteButton
                  id={id}
                  onToggleFavorite={() => toggleFavorite(id)}
                  isFavorite={isFavorite}
                />
                <h3>Episode: {episode}</h3>
                <Content>
                  <Div>
                    <h4>Name:</h4>{name}
                  </Div>
                  <Div>
                    <h4>Launch:</h4> {air_date}
                  </Div>
                  <Div>
                    <h4>Characters:</h4> {totalCharacterCountForEpisode}
                  </Div>
                </Content>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default ListOfEpisodes
