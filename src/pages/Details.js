import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

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
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_ALL_EPISODE_IDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
        // Calcula o total de personagens para o episódio atual
        const totalCharacterCountForEpisode = characters ? characters.length : 0;

        return (
          <div key={id}>
            <h3>{episode}</h3>
            <h3>{name}</h3>
            <h3>{air_date}</h3>
            <h3>Total de Personagens no Episódio: {totalCharacterCountForEpisode}</h3>
            <img
              width="400"
              height="250"
              alt="location-reference"
              src={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`}
            />
            <br />
            <b>About this location:</b>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayLocations;
