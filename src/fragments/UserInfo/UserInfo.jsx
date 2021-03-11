import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './UserInfo.module.css';

const UserInfo = ({ userName, userEmail, albumTitle }) => (
  <>
    <h3 className={styles.album}>Album: {albumTitle}</h3>
    <p className={styles.user}>
      {userName} -{' '}
      <a href={`mailto:${userEmail}`} target="_blank" rel="noreferrer">
        {userEmail}
      </a>
    </p>
  </>
);

UserInfo.propTypes = {
  albumTitle: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired
};

export default UserInfo;
