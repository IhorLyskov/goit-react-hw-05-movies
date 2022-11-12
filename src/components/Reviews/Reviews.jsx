import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../utils/api';
import ReviewsList from './ReviewsList';
import Loader from '../Loader/Loader';
import { WarningMessage, ErrorMessage } from '../Messages/Messages.styled';
import scroll from '../../utils/scroll';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    scroll();
  }, [reviews]);

  useEffect(() => {
    setIsLoader(true);

    getReviews(id)
      .then(result => {
        setReviews(result);
        setIsError(false);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoader(false));
  }, [id]);

  return (
    <>
      {isLoader && <Loader />}
      {isError && !isLoader && (
        <ErrorMessage>Net error! Repeat please...</ErrorMessage>
      )}
      {!isError && !isLoader && (!reviews || reviews.length === 0) && (
        <WarningMessage>No reviews information</WarningMessage>
      )}
      {!isError && !isLoader && reviews && reviews.length && (
        <ReviewsList reviews={reviews} />
      )}
    </>
  );
};

export default Reviews;
