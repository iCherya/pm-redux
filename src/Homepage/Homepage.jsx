import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Homepage.module.css';
import { addPhotos } from '../ducks/photos';
import PhotosList from '../components/PhotosList/PhotosList';
import AddButton from '../components/AddButton/AddButton';

const Homepage = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.data);

  useEffect(() => {
    dispatch(addPhotos(null, photos.length));
  }, []);

  return (
    <div>
      <h2 className={styles.heading}>Photos</h2>
      <PhotosList photos={photos} />
      <AddButton addItems={() => dispatch(addPhotos(null, photos.length))} />
    </div>
  );
};

export default Homepage;
