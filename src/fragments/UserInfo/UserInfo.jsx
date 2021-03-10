import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './UserInfo.module.css';

const UserInfo = ({ name, email }) => (
  <p className={styles.user}>
    {name} - <a href={`mailto:${email}`}>{email}</a>
  </p>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default UserInfo;
