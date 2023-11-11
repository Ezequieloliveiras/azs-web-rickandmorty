import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'

import { Grid } from '@mui/material'

import TitleLocations from './TitleLocations'
import CardStyle from './stylesDivs/CardStyle'
import ContentStyle from '../displaylocations/stylesDivs/ContentStyle'
import Div from '../displaylocations/stylesDivs/NameDivs'
import FavoriteButton from './FavoriteButton'
import SeenButton from './SeenButton'

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

function DisplayLocations() {
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
      <TitleLocations />
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
        const totalCharacterCountForEpisode = characters ? characters.length : 0
        const isFavorite = favoriteEpisodes.includes(id)

        return (
          <Grid container alignItems="center" justifyContent="center" key={id}>
            <Grid item>
              <CardStyle>
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
              
                <ContentStyle>
                  <Div>
                   <h4>Name:</h4>{name}
                  </Div>
                  <Div>
                  <h4>Launch:</h4> {air_date}
                  </Div>
                  <Div>
                  <h4>Characters:</h4> {totalCharacterCountForEpisode}
                  </Div>
                </ContentStyle>
                </CardStyle>
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

export default DisplayLocations
