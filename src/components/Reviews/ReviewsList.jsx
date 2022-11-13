import PropTypes from 'prop-types';
import {
  ReviewList,
  ReviewItem,
  Data,
  Author,
  Review,
} from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => (
  <ReviewList>
    {reviews.map(({ id, created_at, author, content }) => (
      <ReviewItem key={id}>
        <Data>{new Date(created_at).toLocaleDateString('en-US')}</Data>
        <Author>{`Author: ${author}`} </Author>
        <Review>{content}</Review>
      </ReviewItem>
    ))}
  </ReviewList>
);

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default ReviewsList;
