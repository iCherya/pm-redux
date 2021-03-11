import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPhotos, deletePhotos } from '../../ducks/photosList';
import Heading from '../../fragments/Heading/Heading';
import List from '../../fragments/List/List';
import Button from '../../fragments/Button/Button';

const Homepage = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photosList.data);
  const albumId = useSelector((state) => state.photosList.albumId);

  useEffect(() => {
    dispatch(addPhotos(albumId, photos.length));
  }, []);

  useEffect(() => () => dispatch(deletePhotos()), []);

  return (
    <div>
      <Heading text="Photos" />
      <List photos={photos} />
      <Button
        text="Add more..."
        actionOnClick={() => dispatch(addPhotos(albumId, photos.length))}
      />
    </div>
  );
};

export default Homepage;
