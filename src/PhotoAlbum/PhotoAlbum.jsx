/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './PhotoAlbum.module.css';

const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState({});
  const [uploaded, setUploaded] = useState(false);

  const { id: albumId } = useParams();

  const loadPhotos = () => {
    const start = photos.length;
    const limit = 6;

    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos([...photos, ...data]);
      });
  };

  const loadUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
      });
  };

  useEffect(() => {
    loadPhotos();
    loadUser();
    setUploaded(true);
  }, []);

  if (!uploaded) {
    return <div className="">Loading...</div>;
  }

  return (
    <div>
      <h2 className={styles.heading}>Album Page</h2>
      <p className={styles.user}>
        {user.name} - {user.email}
      </p>
      <ul className={styles.content}>
        {photos.map(({ id, thumbnailUrl, title }) => (
          <li key={id} className={styles.item}>
            <Link to={`/photo/${id}`}>
              <img src={thumbnailUrl} alt={title} />
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.button} onClick={loadPhotos} type="button">
        Load more...
      </button>
    </div>
  );
};

export default PhotoAlbum;
