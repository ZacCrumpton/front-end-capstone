import PropTypes from 'prop-types';

const animeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  episodes: PropTypes.string.isRequired,
  vActors: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  mainCharacter: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { animeShape };
