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
              <h3> Episódio: {episode}</h3>
              <h3>Nome: {name}</h3>
              <h3>Lançamento: {air_date}</h3>
              <h3>Total de Personagens no Episódio: {totalCharacterCountForEpisode}</h3>
            </div>


            {characters.map((character) => {
              return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: '100%',height:'450px', backgroundColor: '#f3e5f5', paddingTop: '80px', display:'flex', justifyContent:'center' }}>
                    <div style={{ backgroundColor:'white', boxShadow: '0px 0px 5px 1px black', borderRadius:'5px', width:'500px', height:'350px'}}>
                      <img
                        width="100%"
                        height="250"
                        alt="details-reference"
                        src={character.image}
                      />
                    <div style={{marginTop:'20px'}}>
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
