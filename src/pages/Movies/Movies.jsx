import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../utils/api';
import { Box } from '../../components/Box/Box';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import {
  WarningMessage,
  ErrorMessage,
} from '../../components/Messages/Messages.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState(null);
  const [isQuery, setIsQuery] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsQuery(false);
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    setIsQuery(true);
    setIsLoader(true);

    searchMovies(query)
      .then(value => {
        setMovies(value);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoader(false));
  }, [searchParams]);

  const onFormSubmit = value => {
    setSearchParams(value ? { query: value } : {});
  };

  return (
    <Box>
      <SearchForm onSubmit={onFormSubmit} />
      {isQuery && isLoader && <Loader />}
      {isQuery && !isLoader && isError && (
        <ErrorMessage>Net error! Repeat please...</ErrorMessage>
      )}
      {isQuery && !isLoader && !isError && movies.length === 0 && (
        <WarningMessage>Movies not found! Repeat please...</WarningMessage>
      )}
      {isQuery && !isLoader && !isError && <MoviesList movies={movies} />}
    </Box>
  );
};

export default Movies;
