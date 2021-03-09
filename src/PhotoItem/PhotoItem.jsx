import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './PhotoItem.module.css';

const PhotoItem = () => {
  const [photo, setPhoto] = useState({});
  const [uploaded, setUploaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}?_expand=album`)
      .then((response) => response.json())
      .then((data) => {
        setPhoto(data);
        setUploaded(true);
      });
  }, []);

  if (!uploaded) {
    return <div className="">Loading...</div>;
  }

  return (
    <div>
      <h2 className={styles.heading}>Single Photo</h2>
      <div className={styles.content}>
        <div className={styles.photo}>
          <img src={photo.url} alt={photo.title} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>Title: {photo.title}</h3>
          <p>
            Album:{' '}
            <Link to={`/album/${photo.album.id}`}>{photo.album.title}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
