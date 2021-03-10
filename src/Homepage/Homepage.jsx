import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
import styles from './Homepage.module.css';
import { addPhotos } from '../ducks/photos';
// import { addPhotosAction } from '../store';

const Homepage = () => {
  const photos = useSelector((state) => state.photos.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPhotos(null, 0));
  }, []);

  return (
    <div>
      <h2 className={styles.heading}>Photos</h2>
      <ul className={styles.content}>
        {photos.map(({ id, thumbnailUrl, title }) => (
          <li key={id} className={styles.item}>
            <Link to={`photo/${id}`}>
              <img src={thumbnailUrl} alt={title} />
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={styles.button}
        onClick={() => dispatch(addPhotos(null, photos.length))}
        type="button"
      >
        Load more...
      </button>
    </div>
  );
};

// Homepage.propTypes = {
//   photos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       thumbnailUrl: PropTypes.string,
//       title: PropTypes.string
//     })
//   ).isRequired,

//   addPhotos: PropTypes.func.isRequired
// };

export default Homepage;
