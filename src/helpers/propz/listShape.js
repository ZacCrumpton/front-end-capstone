import PropTypes from 'prop-types';

const listShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { listShape };
