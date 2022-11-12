import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../utils/api';
import { Box } from '../Box/Box';
import Loader from '../Loader/Loader';
import { MovieDescription } from './MovieDescription';
import { IconContext } from 'react-icons';
import { FaArrowLeft } from 'react-icons/fa';
import GoBack from '../GoBack/GoBack.styled';
import { ErrorMessage } from '../Messages/Messages.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const { state: prevLocation } = useLocation();
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const linkGoBack = useRef(prevLocation ?? '/');

  useEffect(() => {
    setIsLoader(true);

    getMovieDetails(id)
      .then(result => {
        setMovieDetails(result);
        setIsError(false);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoader(false));
  }, [id]);

  return (
    <Box>
      <GoBack to={linkGoBack.current}>
        <IconContext.Provider
          value={{ size: '0.7em', style: { marginTop: '2px' } }}
        >
          <FaArrowLeft />
        </IconContext.Provider>
        {' Go back'}
      </GoBack>
      {isLoader && <Loader />}
      {isError && !isLoader && (
        <ErrorMessage>Net error! Repeat please...</ErrorMessage>
      )}
      {!isLoader && !isError && movieDetails && (
        <MovieDescription movieDetails={movieDetails} />
      )}
    </Box>
  );
};

export default MovieDetails;
