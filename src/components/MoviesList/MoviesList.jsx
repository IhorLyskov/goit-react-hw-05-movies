import { MovieItem } from './MovieItem';
import { MoviesListStyle } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <MoviesListStyle>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MoviesListStyle>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
