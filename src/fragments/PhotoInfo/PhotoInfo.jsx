import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import styles from './PhotoInfo.module.css';

const PhotoInfo = ({ title, albumId, albumTitle }) => (
  <ul className={styles.wrapper}>
    <li>
      <span>Title:</span> {title}
    </li>
    <li>
      <span>Album:</span> <Link to={`/album/${albumId}`}>{albumTitle}</Link>
    </li>
  </ul>
);

PhotoInfo.propTypes = {
  title: PropTypes.string.isRequired,
  albumId: PropTypes.number.isRequired,
  albumTitle: PropTypes.string.isRequired
};

export default PhotoInfo;
