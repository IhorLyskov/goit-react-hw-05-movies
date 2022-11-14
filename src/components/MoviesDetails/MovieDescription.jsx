import { Box } from '../Box/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DetailsLinks } from './DetailsLinks';
import Loader from 'components/Loader/Loader';
import noImage from '../../images/noImage.png';
import PropTypes from 'prop-types';
import {
  MovieImage,
  Wrapper,
  Title,
  SubTitle,
  Description,
} from './MovieDescription.styled';

export const MovieDescription = ({ movieDetails }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  return (
    <>
      <Box display="flex" maxWidth={900} mx="auto">
        <MovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : noImage
          }
          alt={original_title}
        />
        <Wrapper>
          <Title>
            {release_date
              ? `${original_title} (${release_date.substring(0, 4)})`
              : `${original_title}`}
          </Title>
          <Description>{`User score: ${Math.round(
            vote_average * 10
          )}%`}</Description>
          <Description>
            <SubTitle>Overview:</SubTitle>
            {overview ? overview : 'Overview not found'}
          </Description>
          <Description>
            <SubTitle>Genres:</SubTitle>
            {genres.length > 0
              ? genres.map(genre => genre.name).join(', ')
              : 'Genres not found'}
          </Description>
        </Wrapper>
      </Box>

      <DetailsLinks />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieDescription.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};
