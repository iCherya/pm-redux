import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './UserInfo.module.css';

const UserInfo = ({ name, email, albumTitle }) => (
  <>
    <h3 className={styles.album}>Album: {albumTitle}</h3>
    <p className={styles.user}>
      {name} -{' '}
      <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
        {email}
      </a>
    </p>
  </>
);

UserInfo.propTypes = {
  albumTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default UserInfo;
