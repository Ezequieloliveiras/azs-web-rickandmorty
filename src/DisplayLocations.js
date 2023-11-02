import { useQuery} from '@apollo/client';
import { gql } from '@apollo/client';

const GET_LOCATIONS = gql`
{
    charactersByIds(ids:"1") {
        id 
        name
        status
      }
    }
`;


function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.charactersByIds.map(({ id, name, status, image }) => (
      <div key={id}>
        <h3>{name}</h3>
        <h3>{status}</h3>
        <h3>{image}</h3>
        <img width="400" height="250" alt="location-reference" src={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`} />
        <br />
        <b>About this location:</b>
        
        <br />
      </div>
    ));
  }

  export default DisplayLocations

 // <p>{description}</p>