import { useLocation } from 'react-router-dom';
import { Item, MovieLink, Image, Title, Vote } from './MovieItem.styled';
import noImage from '../../images/noImage.png';
import PropTypes from 'prop-types';

export const MovieItem = ({
  movie: { id, poster_path, original_title, vote_average, release_date },
}) => {
  const location = useLocation();

  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={location}>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : noImage
          }
          alt={original_title}
        />
        <Title>
          {release_date
            ? `${original_title} (${release_date.substring(0, 4)})`
            : `${original_title}`}
        </Title>
        <Vote vote={vote_average.toFixed(2)}> {vote_average.toFixed(2)}</Vote>
      </MovieLink>
    </Item>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string,
  }).isRequired,
};
