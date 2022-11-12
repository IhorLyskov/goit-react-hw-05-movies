import { DetailsLinksList, DetailsLinksItem } from './DetailsLinks.styled';
import { KeyLink } from '../KeyLink/KeyLink.styled';

export const DetailsLinks = () => {
  return (
    <DetailsLinksList>
      <DetailsLinksItem>
        <KeyLink to="cast">Cast</KeyLink>
      </DetailsLinksItem>
      <DetailsLinksItem>
        <KeyLink to="reviews">Reviews</KeyLink>
      </DetailsLinksItem>
    </DetailsLinksList>
  );
};
