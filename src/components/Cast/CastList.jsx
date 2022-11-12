import PropTypes from 'prop-types';
import {
  ActorsList,
  CastItem,
  CastImage,
  Name,
  Character,
} from './CastList.styled';
import noImage from '../../images/noImage.png';

export const CastList = ({ casting }) => (
  <ActorsList>
    {casting.map(({ cast_id, profile_path, original_name, character }) => (
      <CastItem key={cast_id}>
        <CastImage
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w342${profile_path}`
              : noImage
          }
          alt={original_name}
        />
        <Name>{original_name}</Name>
        <Character>{`Character: ${character}`}</Character>
      </CastItem>
    ))}
  </ActorsList>
);

CastList.propTypes = {
  casting: PropTypes.array.isRequired,
};
