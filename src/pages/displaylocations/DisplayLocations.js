import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

import TitleLocations from './TitleLocations'
import ContainerStyle from '../displaylocations/stylesDivs/ContainerStyle'
import CardStyle from './stylesDivs/CardStyle'
import ContentStyle from '../displaylocations/stylesDivs/ContentStyle'
import Div from '../displaylocations/stylesDivs/NameDivs'

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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <div>
      <TitleLocations />
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {

        const totalCharacterCountForEpisode = characters ? characters.length : 0
        return (

          <ContainerStyle key={id}>
            <CardStyle>
              <h3>Episódio: {episode}</h3>
            </CardStyle>
            <ContentStyle>
              <Div>
                <h4>Nome do Episódio:</h4> {name}
              </Div>
              <Div>
                <h4>Lançamento:</h4> {air_date}
              </Div>
              <Div>
                <h4>Total de Personagens no Episódio:</h4> {totalCharacterCountForEpisode}
              </Div>
            </ContentStyle>
          </ContainerStyle>
        )
      })}
    </div>
  )
}

export default DisplayLocations
