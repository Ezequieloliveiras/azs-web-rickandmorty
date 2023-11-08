import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

import TitleDetails from '../src/pages/displaylocations/TitleLocations'
import DescriptionStyle from '../src/pages/details/stylesDivs/DescriptionStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2'


const GET_ALL_EPISODE_IDS = gql`

query GetAllCharacters {
  episodes {
    results {
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

function PaginaTeste() {
  const { loading, error, data } = useQuery(GET_ALL_EPISODE_IDS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <div>
      <TitleDetails />
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
        const totalCharacterCountForEpisode = characters ? characters.length : 0

        return (
          <div key={id}>
            <DescriptionStyle>
              <h3>
                Episódio: {episode}
              </h3>
              <h3>
                Nome: {name}
              </h3>
              <h3>
                Lançamento: {air_date}
              </h3>
              <h3>
                Total de Personagens no Episódio: {totalCharacterCountForEpisode}
              </h3>
            </DescriptionStyle>

            {characters.map((character) => {
              return (
                <>
                    <Grid container>
                        <Grid item xs={12} md={6} lg={3} sx={{backgroundColor:'red'}}>
                            item 1
                        </Grid>
                        <Grid item xs={12} md={6}  lg={3} sx={{backgroundColor:'green'}}>
                            item 1
                        </Grid>
                        <Grid item xs={12} md={6}  lg={3} sx={{backgroundColor:'grey'}}>
                            item 1
                        </Grid>
                     
                     
                    </Grid>
                </>
              )
            })}
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default PaginaTeste