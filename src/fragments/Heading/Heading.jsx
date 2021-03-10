import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Heading.module.css';

const Heading = ({ text }) => <h2 className={styles.heading}>{text}</h2>;

Heading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Heading;
