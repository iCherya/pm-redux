import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Photo.module.css';

const Photo = ({ url, title }) => (
  <div className={styles.photo}>
    <img src={url} alt={title} />
  </div>
);

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Photo;
