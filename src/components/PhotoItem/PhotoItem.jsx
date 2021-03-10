import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadPhoto } from '../../ducks/photoSingle';
import styles from './PhotoItem.module.css';
import Heading from '../../fragments/Heading/Heading';
import Photo from '../../fragments/Photo/Photo';
import PhotoInfo from '../../fragments/PhotoInfo/PhotoInfo';

const PhotoItem = () => {
  const { id: photoId } = useParams();

  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photoSingle.data);
  const isLoading = useSelector((state) => state.photoSingle.isLoading);

  useEffect(() => {
    dispatch(loadPhoto(photoId));
  }, []);

  return (
    <div>
      <Heading text="Single Photo" />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.wrapper}>
          <Photo url={photo.url} title={photo.title} />
          <PhotoInfo
            title={photo.title}
            albumId={photo.album.id}
            albumTitle={photo.album.title}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoItem;
