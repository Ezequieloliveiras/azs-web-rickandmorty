import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

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
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_ALL_EPISODE_IDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
        const totalCharacterCountForEpisode = characters ? characters.length : 0;

        return (
          <div key={id}>
            <h3>{episode}</h3>
            <h3>{name}</h3>
            <h3>{air_date}</h3>

            <h3>Total de Personagens no Episódio: {totalCharacterCountForEpisode}</h3>

            {characters.map((character, index) => {
              return (
                <div key={index}>
                  <img
                    width="400"
                    height="250"
                    alt="details-reference"
                    src={character.image}
                  />
                  <br />
                  <br />
                  <div>
                    <ul>
                      <li>
                        {character.name}
                      </li>
                      <li>
                        {character.species}
                      </li>
                      <li>
                        {character.status}
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
            <br />
          </div>
        )
      })}
    </div>
  );
}

export default DisplayLocations;
