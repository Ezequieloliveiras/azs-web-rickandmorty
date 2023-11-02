import { useQuery} from '@apollo/client';
import { gql } from '@apollo/client';

const GET_LOCATIONS = gql`
query GetAllEpisodeIds {
    episodes {
      results {
        episode
        name
        air_date
      }
    }
  }
`


function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.episodes.results.map(({ id, episode, name, air_date,  }) => (
      <div key={id}>
        <h3>{episode}</h3>
        <h3>{name}</h3>
        <h3>{air_date}</h3>

        <img width="400" height="250" alt="location-reference" src={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`} />
        <br />
        <b>About this location:</b>
        
        <br />
      </div>
    ));
  }

  export default DisplayLocations

 // <p>{description}</p>