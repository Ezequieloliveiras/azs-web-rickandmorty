import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Grid } from '@mui/material'

import Title from './Title'
import Card from './stylesdivs/Card'
import Content from './stylesdivs/Content'
import Div from '../listofepisodes/stylesdivs/Div'
import FavoriteButton from './icons/FavoriteIcon'
import SeenButton from './icons/SeenIcon'
import PrimarySearchAppBar from '../partials/header/Search' 

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
  const [searchTerm, setSearchTerm] = useState('')

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

  const filteredEpisodes = data.episodes.results.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Title />
      <PrimarySearchAppBar setSearchTerm={setSearchTerm} />
      <Grid container spacing={2} justifyContent="center">
        {filteredEpisodes.map(({ id, episode, name, air_date, characters }) => {
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
                <h4>Episode: {episode}</h4>
                <Content>
                  <Div>
                    <h5 style={{paddingTop:'5px', marginRight:'5px'}}>Name:</h5>{name}
                  </Div>
                  <Div>
                    <h5 style={{paddingTop:'5px', marginRight:'5px'}}>Launch:</h5> {air_date}
                  </Div>
                  <Div>
                    <h5 style={{paddingTop:'5px', marginRight:'5px'}}>Characters:</h5> {totalCharacterCountForEpisode}
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
