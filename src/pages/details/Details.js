import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

import TitleDetails from './TitleDetails'
import DescriptionStyle from './stylesDivs/DescriptionStyle'
import ContainerStyle from './stylesDivs/ContainerStyle'
import BoxStyle from './stylesDivs/BoxStyle'
import ContentStyle from './stylesDivs/ContentStyle'


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

function Details() {
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
                <ContainerStyle >
                  <BoxStyle >
                    <ContentStyle>
                        <img
                          width="100%"
                          height="auto"
                          alt="details-reference"
                          src={character.image}
                        />
                      <div style={{ marginTop: '20px', backgroundColor:'white', position: 'absolute', bottom: '0px',padding: '5px' }}>
                        <div>
                          Personagem: {character.name}
                        </div>
                        <div>
                          Espécie: {character.species}
                        </div>
                        <div>
                          Status: {character.status}
                        </div>
                      </div>
                    </ContentStyle>
                  </BoxStyle>
                </ContainerStyle>
              )
            })}
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default Details