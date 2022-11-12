import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../utils/api';
import { CastList } from './CastList';
import Loader from '../Loader/Loader';
import { WarningMessage, ErrorMessage } from '../Messages/Messages.styled';
import scroll from '../../utils/scroll';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    scroll();
  }, [cast]);

  useEffect(() => {
    setIsLoader(true);

    getCast(id)
      .then(result => {
        setCast(result);
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
      {!isError && !isLoader && (!cast || cast.length === 0) && (
        <WarningMessage>No cast information</WarningMessage>
      )}
      {!isError && !isLoader && cast && cast.length && (
        <CastList casting={cast} />
      )}
    </>
  );
};

export default Cast;
