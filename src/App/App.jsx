import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import Homepage from '../components/Homepage/Homepage';
import PhotoAlbum from '../components/PhotoAlbum/PhotoAlbum';
import PhotoItem from '../components/PhotoItem/PhotoItem';

const App = () => (
  <BrowserRouter>
    <div className={styles.wrapper}>
      <Switch>
        <Route path="/album/:id">
          <PhotoAlbum />
        </Route>
        <Route path="/photo/:id">
          <PhotoItem />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
