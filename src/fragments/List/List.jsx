import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import styles from './List.module.css';

const List = ({ photos }) => (
  <ul className={styles.content}>
    {photos.map(({ id, thumbnailUrl, title }) => (
      <li key={id} className={styles.item}>
        <Link to={`/photo/${id}`}>
          <img src={thumbnailUrl} alt={title} />
        </Link>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired
};

export default List;
