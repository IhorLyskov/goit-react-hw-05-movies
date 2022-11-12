import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTrendingMovies } from '../../utils/api';
import { Box } from '../../components/Box/Box';
import { Title } from './Home.styled';
import { ErrorMessage } from '../../components/Messages/Messages.styled';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    setIsLoader(true);
    setTrendingMovies(null);
    getTrendingMovies(pageParams)
      .then(movies => {
        setTrendingMovies(movies);
        setIsError(false);
      })
      .catch(error => {
        setIsError(true);
      })
      .finally(() => setIsLoader(false));
  }, [pageParams]);

  return (
    <Box>
      {isLoader && <Loader />}
      {isError && !isLoader && (
        <ErrorMessage>Net error! Repeat please...</ErrorMessage>
      )}
      {!isLoader && !isError && trendingMovies && (
        <>
          <Title>Trending Today</Title>
          <MoviesList movies={trendingMovies.results} />
          <Pagination
            setPage={setSearchParams}
            totalPages={trendingMovies.total_pages}
            currentPage={pageParams - 1}
          />
        </>
      )}
    </Box>
  );
};

export default Home;
