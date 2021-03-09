import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';

const Homepage = () => {
  const [photos, setPhotos] = useState([]);

  const loadPhotos = () => {
    const start = photos.length;
    const limit = 6;

    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => setPhotos([...photos, ...data]));
  };

  useEffect(() => loadPhotos(), []);

  return (
    <div>
      <h2 className={styles.heading}>Photos</h2>
      <ul className={styles.content}>
        {photos.map(({ id, thumbnailUrl, title }) => (
          <li key={id} className={styles.item}>
            <Link to={`photo/${id}`}>
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

export default Homepage;
