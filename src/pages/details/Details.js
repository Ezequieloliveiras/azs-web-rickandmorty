import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import TitleDetails from './TitleDetails'


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

function Details() {
  const { loading, error, data } = useQuery(GET_ALL_EPISODE_IDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <TitleDetails />
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
        const totalCharacterCountForEpisode = characters ? characters.length : 0;

        return (
          <div key={id}>
            <div style={{ margin: '50px 0px' }}>
              <h3>{episode}</h3>
              <h3>{name}</h3>
              <h3>{air_date}</h3>
              <h3>Total de Personagens no Episódio: {totalCharacterCountForEpisode}</h3>
            </div>


            {characters.map((character) => {
              return (
                <div style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: '700px', backgroundColor: 'white', }}>
                    <img
                      width="400"
                      height="250"
                      alt="details-reference"
                      src={character.image}
                    />
                    <div style={{margin:'30px 0px'}}>

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

export default Details;
