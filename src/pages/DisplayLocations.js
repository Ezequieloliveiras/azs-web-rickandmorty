import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'


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

      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {

        const totalCharacterCountForEpisode = characters ? characters.length : 0
        return (

          <div style={{
            position: 'relative',
            width: '900px',
            padding:'10px',
            margin:'10px',
            borderRadius:'5px',
            display: 'block',
            justifyContent: 'space-around',
            backgroundColor: 'grey',
          }} key={id}>

            <div
              style={{
                backgroundColor: 'white',
                border: 'none',
                boxShadow:'1px 1px 1px 1px',
                width: '300px',
                height: '300px',
                margin: '10px',
                borderRadius:'5px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h3>Episódio: {episode}</h3>

            </div>
            <div style={{ width: '400px', position: 'absolute', top: '140px', left: '400px'}}>
              <h3>Nome do Episódio: {name}</h3>
              <h3>Lançamento: {air_date}</h3>
              <h3>Total de Personagens no Episódio: {totalCharacterCountForEpisode}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DisplayLocations
