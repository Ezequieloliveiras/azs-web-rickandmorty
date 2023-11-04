import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import TitleLocations from './TitleLocations'

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
          
          <div style={{
            position: 'relative',
            width: '900px',
            padding: '10px',
            margin: '20px',
            borderRadius: '5px',
            display: 'block',
            justifyContent: 'space-around',
            backgroundColor: 'grey',
            boxShadow: '0px 0px 5px 1px black',
          }} key={id}>
            
            <div
              style={{
                backgroundColor: 'white',
                border: 'none',
                boxShadow: '0px 0px 5px 1px',
                width: '300px',
                height: '300px',
                margin: '10px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h3>Episódio: {episode}</h3>
            </div>

            <div style={{
              width: '400px',
              height: '150px',
              position: 'absolute',
              top: '140px',
              left: '400px'
            }}>
              <div style={{ display: 'flex', width:'600px',  paddingBottom: '10px' }}>
                <h4>Nome do Episódio:</h4> {name}
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px' }}>
                <h4>Lançamento:</h4> {air_date}
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px' }}>
                <h4>Total de Personagens no Episódio:</h4> {totalCharacterCountForEpisode}
              </div>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default DisplayLocations
