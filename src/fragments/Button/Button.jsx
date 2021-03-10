import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Button.module.css';

const Button = ({ actionOnClick, text }) => (
  <button className={styles.button} onClick={actionOnClick} type="button">
    {text}
  </button>
);

Button.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
