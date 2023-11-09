import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useState } from 'react';

import {
  Grid,
} from '@mui/material';

import TitleLocations from './TitleLocations';
import ContainerStyle from '../displaylocations/stylesDivs/ContainerStyle';
import CardStyle from './stylesDivs/CardStyle';
import ContentStyle from '../displaylocations/stylesDivs/ContentStyle';
import Div from '../displaylocations/stylesDivs/NameDivs';
import FavoriteButton from './FavoriteButton';  // Import the FavoriteButton component

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
  const initialFavoriteEpisodes = [];
  const [favoriteEpisodes, setFavoriteEpisodes] = useState(initialFavoriteEpisodes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const toggleFavorite = (episodeId) => {
    setFavoriteEpisodes((prevFavoriteEpisodes) => {
      const isFavorite = prevFavoriteEpisodes.includes(episodeId);
      if (isFavorite) {
        return prevFavoriteEpisodes.filter((favEpisode) => favEpisode !== episodeId);
      } else {
        return [...prevFavoriteEpisodes, episodeId];
      }
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <TitleLocations />
      {data.episodes.results.map(({ id, episode, name, air_date, characters }) => {
        const totalCharacterCountForEpisode = characters ? characters.length : 0;
        const isFavorite = favoriteEpisodes.includes(id);

        return (
          <Grid container alignItems="center" key={id}>
            <Grid item>
              <ContainerStyle>
                  <FavoriteButton 
                    id={id}
                    onToggleFavorite={() => toggleFavorite(id)}
                    isFavorite={isFavorite}
                   />
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
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

export default DisplayLocations;
