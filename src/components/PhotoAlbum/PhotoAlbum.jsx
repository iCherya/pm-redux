/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addPhotos, deletePhotos } from '../../ducks/photosList';
import { loadAlbum } from '../../ducks/albumInfo';
import Heading from '../../fragments/Heading/Heading';
import List from '../../fragments/List/List';
import Button from '../../fragments/Button/Button';
import UserInfo from '../../fragments/UserInfo/UserInfo';

const PhotoAlbum = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photosList.data);
  const album = useSelector((state) => state.albumInfo.data);
  const isLoading = useSelector((state) => state.albumInfo.isLoading);

  const { id: albumId } = useParams();

  useEffect(() => {
    dispatch(addPhotos(albumId, photos.length));
    dispatch(loadAlbum(albumId));
  }, []);

  useEffect(() => () => dispatch(deletePhotos()), []);

  return (
    <div>
      <Heading text="Album page" />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <UserInfo
            name={album.user.name}
            email={album.user.email}
            albumTitle={album.title}
          />
          <List photos={photos} />
          <Button
            text="Add more..."
            actionOnClick={() => dispatch(addPhotos(albumId, photos.length))}
          />
        </>
      )}
    </div>
  );
};

export default PhotoAlbum;
