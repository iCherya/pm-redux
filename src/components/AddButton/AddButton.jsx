import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './AddButton.module.css';

const AddButton = ({ addItems }) => (
  <button className={styles.button} onClick={addItems} type="button">
    Load more...
  </button>
);

AddButton.propTypes = {
  addItems: PropTypes.func.isRequired
};

export default AddButton;
