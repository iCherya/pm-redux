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
  const { photoUrl, photoTitle, albumId, albumTitle } = useSelector(
    (state) => state.photoSingle.data
  );
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
          <Photo url={photoUrl} title={photoTitle} />
          <PhotoInfo
            title={photoTitle}
            albumId={albumId}
            albumTitle={albumTitle}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoItem;
